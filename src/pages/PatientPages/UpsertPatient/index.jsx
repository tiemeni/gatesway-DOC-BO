import React, { useEffect, useState } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import FormGenerator from '../../../layouts/FormGenerator';
import { patientCreateOrEdite } from '../../../utils/data';
import getAllCivilities from '../../../redux/civility/actions';
import getAllGroupes from '../../../redux/groupes/actions';
import getAllSpecialities from '../../../redux/speciality/actions';
import getAllLieux from '../../../redux/lieux/actions';

function CreatePatient() {
  const dispatch = useDispatch();
  const [data] = useState(patientCreateOrEdite);
  useEffect(() => {
    dispatch(getAllCivilities());
    dispatch(getAllGroupes());
    dispatch(getAllSpecialities());
    dispatch(getAllLieux());
  }, []);
  return (
    <Grid templateColumns="repeat(7, 1fr)" gap={4} mt={10} mb={20}>
      <GridItem colStart={2} colEnd={6} rowStart={1}>
        <FormGenerator editeData={{}} data={data} />
      </GridItem>
    </Grid>
  );
}

export default CreatePatient;
