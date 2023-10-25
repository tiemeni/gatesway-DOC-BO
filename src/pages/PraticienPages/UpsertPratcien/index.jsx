import React, { useEffect, useState } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import FormGenerator from '../../../layouts/FormGenerator';
import { praticienCreateOrEdite } from '../../../utils/data';
import getAllCivilities from '../../../redux/civility/actions';
import getAllGroupes from '../../../redux/groupes/actions';
import getAllSpecialities from '../../../redux/speciality/actions';
import getAllLieux from '../../../redux/lieux/actions';

// const dataForRdite = {
//   timeSlot: 30,
//   _id: '64c6a6fdf745e75e6b7e3770',
//   civility: '64a2e4479b192c3f644517c5',
//   name: 'Saozer2 test',
//   telephone: '658686162',
//   surname: 'King test',
//   email: 'saozerkjjjinghacker2@gmail.com',
//   password: '$2b$10$Vs6.WeHIwj2XF8Qfep4F8.VsMQ22/06iFN8uDLO0ZJADTEuRjOfJe',
//   active: true,
//   groups: '64b67da930dbcafa138b6e96',
//   affectation: '64b93ba06ea4c5f053e484a1',
//   job: '64c6a6e52238f633828048df',
//   idCentre: '649aacd0c7542f87284daefd',
//   isPraticien: true,
//   __v: 0,
// };
function CreatePraticien() {
  const dispatch = useDispatch();
  const [data] = useState(praticienCreateOrEdite);
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

export default CreatePraticien;
