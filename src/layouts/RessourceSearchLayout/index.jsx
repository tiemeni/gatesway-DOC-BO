import React from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import FormGenerator from '../FormGenerator';

function RessourceSearchLayout({ data = {} }) {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton
            _hover={{ backgroundColor: 'dark.500' }}
            backgroundColor="dark.500"
          >
            <Box as="span" flex="1" textAlign="left" __css={{ color: 'white' }}>
              Recherche d'un utilisateur
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} w="100%">
          <Grid templateColumns="repeat(7, 1fr)" gap={4}>
            <GridItem colStart={2} colEnd={6} rowStart={1}>
              <FormGenerator data={data} />
            </GridItem>
          </Grid>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default RessourceSearchLayout;
