import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Grid, GridItem } from '@chakra-ui/react';
import FormGenerator from '../../../layouts/FormGenerator';
import { upsertMotifs } from '../../../utils/data';
import { getAllSpecialities } from '../../../redux/speciality/actions';
import { getAllLieux } from '../../../redux/lieux/actions';
import { postMotif } from '../../../redux/motifs/actions';

const motifAPIformatter = (data) => ({
  nom: data.nom,
  label: data.label,
  initiales: data.initiales,
  active: data.active ? 1 : 0,
  default_time: Math.ceil((data.default_time - 5) / 5),
  _id: data._id,
  idProfession: data.idProfession,
  idLieux: data?.idLieux?.length > 0 ? data?.idLieux[0] : null,
  idSpeciality: data.idSpeciality,
  reference: data.reference,
  couleur: data?.couleur,
});

function CreateMotif() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const motif = useSelector((state) => state.Motifs.motifs);
  const [launchMotif, setLaunchMotif] = useState(true);
  const [motifToUpdate, setMotifToUpdate] = useState({});
  const [data] = useState(upsertMotifs);

  useEffect(() => {
    motif.forEach((m) => {
      if (m?._id === id) {
        setMotifToUpdate(m);
        setLaunchMotif(false);
      }
    });
    dispatch(getAllLieux());
    dispatch(getAllSpecialities());
  }, []);

  if (id && launchMotif) {
    return 'launching motifs';
  }

  const handlePost = (m) => {
    if (id) {
      console.log('edite motif');
    } else {
      dispatch(postMotif(m));
    }
  };

  return (
    <Grid templateColumns="repeat(7, 1fr)" gap={4} mt={10} mb={20}>
      <GridItem colStart={2} colEnd={6} rowStart={1}>
        <FormGenerator
          handlePost={handlePost}
          editeData={motifAPIformatter(motifToUpdate)}
          data={data}
        />
      </GridItem>
    </Grid>
  );
}

export default CreateMotif;
