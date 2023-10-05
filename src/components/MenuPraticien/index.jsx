import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Accordion, Box, Input, VStack } from '@chakra-ui/react';
import MenuItem from './menu-item';
import { getPraticiens } from '../../redux/praticiens/actions';

const _spacing = 3;
function MenuPraticien() {
  const dispatch = useDispatch();
  const { datas, success, loading } = useSelector((state) => state.Praticiens);

  useEffect(() => {
    dispatch(getPraticiens());
  }, []);

  console.log(success, loading);

  return (
    <VStack h="full" boxShadow="2xl">
      <Box p={_spacing}>
        <Input variant="outline" placeholder="Rechercher un praticien" />
      </Box>
      <Box h="full" w="full" px={_spacing}>
        <Accordion w="full" allowMultiple defaultIndex={[3]} onChange={() => console.log("done")}>
          {Object.keys(datas).map((profession) => (
            <MenuItem
              key={profession}
              professionName={profession}
              data={datas[profession]}
            />
          ))}
        </Accordion>
      </Box>
    </VStack>
  );
}

export default MenuPraticien;
