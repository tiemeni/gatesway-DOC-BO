import React from 'react';
import { Box, HStack } from '@chakra-ui/react';
import Calendar from '../../components/Calendar';
import MenuPraticien from '../../components/MenuPraticien';

function MainPage() {
  return (
    <HStack minW="full" alignItems="flex-start" bg="red.400">
      <Box minW="20%" bg="red.100">
        <MenuPraticien />
      </Box>
      <Box overflow="auto" h="28">
        <Calendar />
      </Box>
    </HStack>
  );
}

export default MainPage;
