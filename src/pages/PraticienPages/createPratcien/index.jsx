import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import FormGenerator from '../../../layouts/FormGenerator';
import { praticienCreateOrEdite } from '../../../utils/data';

function CreatePraticien() {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={4} mt={10} mb={20}>
      <GridItem colStart={2} colEnd={5} rowStart={1}>
        <FormGenerator data={praticienCreateOrEdite} />
      </GridItem>
    </Grid>
  );
}

export default CreatePraticien;
