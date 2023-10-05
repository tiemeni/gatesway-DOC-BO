import {
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text
} from '@chakra-ui/react';
import React from 'react';


function MenuActionUser() {
  return (
    <Flex>
      <Menu>
        <MenuButton pointerEvents="stroke" fontSize={16} textColor='white'  as={Text}>
          Emmanuel EMBOLO
        </MenuButton>
        <MenuList>
          <MenuItem>Mon profile</MenuItem>
          <MenuItem>Changer mon mot de passe</MenuItem>
          <MenuItem>Déconnexion</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  )
};

export default MenuActionUser;

