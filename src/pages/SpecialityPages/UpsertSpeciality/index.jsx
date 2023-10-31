import React, { useEffect, useState } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FormGenerator from '../../../layouts/FormGenerator';
import { upsertSpeciality } from '../../../utils/data';

const specialityAPIformatter = (data) => ({
  idProfession: data?.idProfession,
  label: data.label,
  secretaryAlert: data.secretaryAlert,
  title: data.title,
  webAlert: data.webAlert,
  _id: data._id,
});

function CreateSpeciality() {
  const { id } = useParams();
  const specs = useSelector((state) => state.Specialities.specialities);
  const [launchSpeciality, setLaunchSpeciality] = useState(true);
  const [specToUpdate, setSpecToUpdate] = useState({});
  const [data] = useState(upsertSpeciality);
  useEffect(() => {
    specs.forEach((m) => {
      if (m?._id === id) {
        setSpecToUpdate(m);
        setLaunchSpeciality(false);
      }
    });
  }, []);

  if (id && launchSpeciality) {
    return 'launching specs';
  }

  return (
    <Grid templateColumns="repeat(7, 1fr)" gap={4} mt={10} mb={20}>
      <GridItem colStart={2} colEnd={6} rowStart={1}>
        <FormGenerator
          editeData={specialityAPIformatter(specToUpdate)}
          data={data}
        />
      </GridItem>
    </Grid>
  );
}

export default CreateSpeciality;
