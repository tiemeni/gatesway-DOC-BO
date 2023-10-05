import React from 'react';
import { Box, HStack } from '@chakra-ui/react';
import Calendar from '../../components/Calendar';
import MenuPraticien from '../../components/MenuPraticien';
import { useDimensions } from '../../hooks/useDimensions';

function MainPage() {
  const { innerHeight } = useDimensions();
  return (
    <HStack minW="full" alignItems="flex-start" h={innerHeight}>
      <Box minW="20%" h="full">
        <MenuPraticien />
      </Box>
      <Box overflow="auto" h="full">
        <Calendar />
      </Box>
    </HStack>
  );
}

export default MainPage;
