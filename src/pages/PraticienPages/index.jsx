import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button } from '@chakra-ui/react';
import { UilPlus } from '@iconscout/react-unicons';
import RessourceSearchLayout from '../../layouts/RessourceSearchLayout';
import { praticien } from '../../utils/data';
import TableGenerator from '../../layouts/TableGenerator';
import { dataPraticien } from '../../utils/dataFields';
import { getAllPraticiens } from '../../redux/praticiens/actions';

function PraticienPage() {
  const dispatch = useDispatch();
  const praticiens = useSelector((state) => state.Praticiens.praticiens);
  useEffect(() => {
    if (praticiens.length === 0) {
      dispatch(getAllPraticiens());
    }
  }, []);

  return (
    <Box p={5} spacing={5}>
      <RessourceSearchLayout data={praticien} />
      <p style={{ marginTop: 15 }}>
        {praticiens.length} praticiens correspondent a votre recherche
      </p>
      <Link to="upsert">
        <Button
          style={{ marginTop: 15 }}
          backgroundColor="#04B7C9"
          textColor="white"
        >
          <UilPlus />
          Creer un praticien
        </Button>
      </Link>
      <Box marginTop="20px" width="100%">
        <TableGenerator entityType="praticien" data={dataPraticien} />
      </Box>
    </Box>
  );
}

export default PraticienPage;
