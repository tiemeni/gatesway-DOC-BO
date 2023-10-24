import React, { useState } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import FormGenerator from '../../../layouts/FormGenerator';
import { upsertMotifs } from '../../../utils/data';

function CreateMotif() {
  const [data] = useState(upsertMotifs);
  return (
    <Grid templateColumns="repeat(7, 1fr)" gap={4} mt={10} mb={20}>
      <GridItem colStart={2} colEnd={6} rowStart={1}>
        <FormGenerator editeData={{}} data={data} />
      </GridItem>
    </Grid>
  );
}

export default CreateMotif;
