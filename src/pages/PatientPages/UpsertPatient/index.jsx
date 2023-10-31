import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { Grid, GridItem } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import FormGenerator from '../../../layouts/FormGenerator';
import { patientCreateOrEdite } from '../../../utils/data';
import getAllCivilities from '../../../redux/civility/actions';
import getAllGroupes from '../../../redux/groupes/actions';
import getAllSpecialities from '../../../redux/speciality/actions';
import getAllLieux from '../../../redux/lieux/actions';

const patientAPIformatter = (data) => ({
  civility: data?.civility?._id,
  name: data.name,
  surname: data.surname,
  birthdate: moment(data.birthdate).format('YYYY-MM-DD'),
  telephone: data.telephone,
  email: data.email,
  initiales: data.initiales,
  active: data.active ? 1 : 0,
  rights: data?.rights?.length > 0 ? data?.rights[0] : null,
  _id: data._id,
});

function CreatePatient() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const motif = useSelector((state) => state.Patient.patients);
  const [launchPatients, setLaunchPatients] = useState(true);
  const [patientToUpdate, setPatientToUpdate] = useState({});
  const [data] = useState(patientCreateOrEdite);
  useEffect(() => {
    motif.forEach((m) => {
      if (m?._id === id) {
        setPatientToUpdate(m);
        setLaunchPatients(false);
      }
    });
    dispatch(getAllCivilities());
    dispatch(getAllGroupes());
    dispatch(getAllSpecialities());
    dispatch(getAllLieux());
  }, []);

  if (id && launchPatients) {
    return 'launching patients';
  }

  return (
    <Grid templateColumns="repeat(7, 1fr)" gap={4} mt={10} mb={20}>
      <GridItem colStart={2} colEnd={6} rowStart={1}>
        <FormGenerator
          editeData={patientAPIformatter(patientToUpdate)}
          data={data}
        />
      </GridItem>
    </Grid>
  );
}

export default CreatePatient;
