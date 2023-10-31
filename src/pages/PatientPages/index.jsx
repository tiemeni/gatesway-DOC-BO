import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Box, Button } from '@chakra-ui/react';
import { UilPlus } from '@iconscout/react-unicons';
import RessourceSearchLayout from '../../layouts/RessourceSearchLayout';
import { praticien } from '../../utils/data';
import TableGenerator from '../../layouts/TableGenerator';
import { dataPatient } from '../../utils/dataFields';
import getAllPatients from '../../redux/patient/actions';

function PatientPage() {
  const dispatch = useDispatch();
  const patients = useSelector((state) => state.Patient.patients);

  useEffect(() => {
    dispatch(getAllPatients());
  }, []);
  return (
    <Box p={5} spacing={5}>
      <RessourceSearchLayout data={praticien} />
      <p style={{ marginTop: 15 }}>
        {patients.length} patients correspondent a votre recherche
      </p>
      <Link to="upsert">
        <Button
          style={{ marginTop: 15 }}
          backgroundColor="#04B7C9"
          colorScheme="blue"
        >
          <UilPlus />
          Creer un patient
        </Button>
      </Link>
      <Box marginTop="20px">
        <TableGenerator entityType="patient" data={dataPatient} />
      </Box>
    </Box>
  );
}

export default PatientPage;
