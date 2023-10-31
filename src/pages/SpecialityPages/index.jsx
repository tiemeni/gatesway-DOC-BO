import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button } from '@chakra-ui/react';
import { UilPlus } from '@iconscout/react-unicons';
import RessourceSearchLayout from '../../layouts/RessourceSearchLayout';
import { speciality } from '../../utils/data';
import TableGenerator from '../../layouts/TableGenerator';
import { dataSpeciality } from '../../utils/dataFields';
import getAllSpecialities from '../../redux/speciality/actions';

function SpecialityPage() {
  const dispatch = useDispatch();
  const specialities = useSelector((state) => state.Specialities.specialities);

  useEffect(() => {
    dispatch(getAllSpecialities());
  }, []);
  return (
    <Box p={5} spacing={5}>
      <RessourceSearchLayout data={speciality} />
      <p style={{ marginTop: 15 }}>
        {specialities.length} specialités correspondent a votre recherche
      </p>
      <Link to="upsert">
        <Button
          style={{ marginTop: 15 }}
          backgroundColor="#04B7C9"
          colorScheme="blue"
        >
          <UilPlus />
          Creer une specialité
        </Button>
      </Link>
      <Box marginTop="20px">
        <TableGenerator entityType="speciality" data={dataSpeciality} />
      </Box>
    </Box>
  );
}

export default SpecialityPage;
