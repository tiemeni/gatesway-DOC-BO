import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Box, Button } from '@chakra-ui/react';
import { UilPlus } from '@iconscout/react-unicons';
import RessourceSearchLayout from '../../layouts/RessourceSearchLayout';
import { praticien } from '../../utils/data';
import TableGenerator from '../../layouts/TableGenerator';
import { dataUSer } from '../../utils/dataFields';
import { getAllUser } from '../../redux/user/actions';

function UserPage() {
  const users = useSelector((state) => state.User.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUser());
  }, []);
  return (
    <Box p={5} spacing={5}>
      <RessourceSearchLayout data={praticien} />
      <p style={{ marginTop: 15 }}>
        {users.length} Utilisateurs correspondent a votre recherche
      </p>
      <Link to="upsert">
        <Button
          style={{ marginTop: 15 }}
          backgroundColor="#04B7C9"
          colorScheme="blue"
        >
          <UilPlus />
          Creer un utilisateur
        </Button>
      </Link>
      <Box marginTop="20px">
        <TableGenerator entityType="user" data={dataUSer} />
      </Box>
    </Box>
  );
}

export default UserPage;
