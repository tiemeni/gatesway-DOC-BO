import { SearchIcon, WarningTwoIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
  Text,
  VStack
} from '@chakra-ui/react';
import { UilBolt, UilComments, UilDesktop, UilEnvelopeAlt, UilUser, UilUsersAlt } from '@iconscout/react-unicons';
import React from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import MenuActionUser from './listeMenue/MenuActionUser';
import MenuConfig from './listeMenue/MenuConfi';
import styles from './styles';

function Header() {
  const date = new Date();
  const currentHours = date.toLocaleTimeString();

  return (

    <Flex style={styles.container}>
      <Box>
        <HStack spacing={4}>
          <VStack width='100%' spacing={-2}>
            <Text style={styles.logoTitle}>GATEWAYSDOC</Text>
            <Text style={styles.hours}>{currentHours}</Text>
          </VStack>
          <InputGroup mr={10} ml='10' maxW="lg">
            <Input _placeholder={{ color: 'blue.300' }} style={styles.input} size="sm" placeholder="Rechercher un patient" />
            <InputRightElement alignItems="flex-end" pointerEvents='stroke'>
              <IconButton
                alignItems="center"
                size="sm"
                bottom={2}
                ml={2}
                rounded='full'
                aria-label="Rechercher"
                icon={<SearchIcon style={styles.icon} />}
                bg="blue.300"
                color="gray.400"
                _hover={{ color: 'gray.600' }}
              />
            </InputRightElement>
          </InputGroup>
          <HStack style={styles.hstack} spacing={6}>
            <UilUser style={styles.icon} variant='Bold' size={22} />
            <UilEnvelopeAlt style={styles.icon} size={24} />
            <MenuConfig/>
            <UilBolt style={styles.icon} variant='Bold' size={24} />
            <UilDesktop style={styles.icon} variant='Bold' size={24} />
          </HStack>
        </HStack>
      </Box>
      <Spacer />
      <Box>
        <HStack style={styles.hstack} spacing={6}>
          <Box style={styles.iconBox}>
            <UilComments style={styles.icon} size={18} />
          </Box>
          <Box style={styles.iconBox}>
            <UilEnvelopeAlt style={styles.icon} variant='Bold' size={18} />
          </Box>
          <Box style={styles.iconBox}>
            <WarningTwoIcon style={styles.icon} variant='Bold' size={18} />
          </Box>
          <Box style={styles.iconBoxUser}>
            <UilUser style={styles.icon} variant='Bold' size={25} />
          </Box>
          <HStack>
            <MenuActionUser />
            <IoMdArrowDropdown style={styles.icon} variant='Bold' size={18} />
          </HStack>
          <UilUsersAlt style={styles.icon} variant='Bold' size={24} />
        </HStack>
      </Box>
    </Flex>
  );
}

export default Header;
