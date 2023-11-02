import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Box, Button } from '@chakra-ui/react';
import { UilPlus } from '@iconscout/react-unicons';
import RessourceSearchLayout from '../../layouts/RessourceSearchLayout';
import { motif } from '../../utils/data';
import { dataMotifs } from '../../utils/dataFields';
import TableGenerator from '../../layouts/TableGenerator';
import { getAllMotifs } from '../../redux/motifs/actions';

function MotifsPage() {
  const dispatch = useDispatch();
  const motifs = useSelector((state) => state.Motifs.motifs);

  useEffect(() => {
    dispatch(getAllMotifs());
  }, []);
  return (
    <Box p={5} spacing={5}>
      <RessourceSearchLayout data={motif} />
      <p style={{ marginTop: 15 }}>
        {motifs.length} motifs correspondent a votre recherche
      </p>
      <Link to="upsert">
        <Button
          style={{ marginTop: 15 }}
          backgroundColor="#04B7C9"
          colorScheme="blue"
        >
          <UilPlus />
          Creer un motif
        </Button>
      </Link>
      <Box marginTop="20px">
        <TableGenerator entityType="motif" data={dataMotifs} />
      </Box>
    </Box>
  );
}

export default MotifsPage;
