import { AddIcon, EditIcon, ExternalLinkIcon, RepeatIcon } from '@chakra-ui/icons';
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text
} from '@chakra-ui/react';
import { UilCog } from '@iconscout/react-unicons';
import React from 'react';
import styles from '../styles';


function MenuConfig() {

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={<UilCog  color="white"/>}
        style={{backgroundColor:'#353535'}}
      />
      <MenuList>
        <MenuItem icon={<AddIcon />}>
          <Text style={styles.textMenu} >Gestion des patient</Text>
        </MenuItem>
        <MenuItem icon={<ExternalLinkIcon />} >
        <Text style={styles.textMenu}>Gestion des praticiens</Text>
        </MenuItem>
        <MenuItem icon={<RepeatIcon />}>
        <Text style={styles.textMenu}>Gestion des lieux</Text>
        </MenuItem>
        <MenuItem icon={<EditIcon />} >
        <Text style={styles.textMenu}>Gestion du centre</Text>
        </MenuItem>
      </MenuList>
    </Menu>);
}

export default MenuConfig;