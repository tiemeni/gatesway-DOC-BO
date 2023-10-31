import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { Grid, GridItem } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import FormGenerator from '../../../layouts/FormGenerator';
import { praticienCreateOrEdite } from '../../../utils/data';
import getAllCivilities from '../../../redux/civility/actions';
import getAllGroupes from '../../../redux/groupes/actions';
import getAllSpecialities from '../../../redux/speciality/actions';
import getAllLieux from '../../../redux/lieux/actions';

const pratAPIformatter = (data) => ({
  civility: data.civility,
  name: data.name,
  surname: data.surname,
  birthdate: moment(data.birthdate).format('YYYY-MM-DD'),
  telephone: data.telephone,
  email: data.email,
  initiales: data.initiales,
  active: data.active ? 1 : 0,
  timeSlot: Math.ceil((data.timeSlot - 5) / 5),
  _id: data._id,
  job: data.job?._id,
  groups: data?.groups,
  affectation: data?.affectation?.length > 0 ? data?.affectation[0]?._id : null,
});

function CreatePraticien() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const praticiens = useSelector((state) => state.Praticiens.praticiens);
  const [launchPrat, setLaunchPrat] = useState(true);
  const [pratToUpdate, setPratToUpdate] = useState({});
  const [data] = useState(praticienCreateOrEdite);

  useEffect(() => {
    praticiens.forEach((p) => {
      if (p?._id === id) {
        setPratToUpdate(p);
        setLaunchPrat(false);
      }
    });
    dispatch(getAllCivilities());
    dispatch(getAllGroupes());
    dispatch(getAllSpecialities());
    dispatch(getAllLieux());
  }, [id]);

  if (id && launchPrat) {
    return 'launching praticiens';
  }

  return (
    <Grid templateColumns="repeat(7, 1fr)" gap={4} mt={10} mb={20}>
      <GridItem colStart={2} colEnd={6} rowStart={1}>
        <FormGenerator editeData={pratAPIformatter(pratToUpdate)} data={data} />
      </GridItem>
    </Grid>
  );
}

export default CreatePraticien;
