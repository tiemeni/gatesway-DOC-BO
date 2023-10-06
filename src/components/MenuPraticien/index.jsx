import React, { useEffect, useState } from 'react';
import { UilAngleDoubleLeft } from '@iconscout/react-unicons';
import { useDispatch, useSelector } from 'react-redux';
import {
  Accordion,
  Box,
  HStack,
  IconButton,
  Input,
  VStack,
} from '@chakra-ui/react';
import MenuItem from './menu-item';
import { getPraticiens } from '../../redux/praticiens/actions';

const _spacing = 3;
function MenuPraticien() {
  const dispatch = useDispatch();
  const idc = localStorage.getItem('idc');
  const [practitionerCheckedList, setPractitionerCheckedList] = useState();
  const { datas, success, loading } = useSelector((state) => state.Praticiens);

  // Control profession checkboxes
  const handleSelection = (tabIds, actionTypes = 'add') => {
    let finalTab = [];
    // Uncheck other selected practitioner
    if (actionTypes === 'uncheckOthers') {
      finalTab = [...tabIds];
    }
    // When practitioner is unselected
    if (actionTypes === 'remove') {
      const copyTab = practitionerCheckedList;
      const index = copyTab.indexOf(tabIds[0]);
      copyTab.splice(index, 1);
      finalTab = [...copyTab];
    }
    // When profession is selected/unselected
    if (actionTypes === 'add') {
      if (tabIds.length !== 0) {
        const tabs = Array.from(
          new Set([...practitionerCheckedList, ...tabIds]),
        );
        finalTab = tabs;
      } else {
        const profession = Object.keys(datas)[0];
        const selectedPractitioner = datas[profession][0]._id;
        finalTab = [selectedPractitioner];
      }
    }
    setPractitionerCheckedList(finalTab);
    localStorage.setItem(`practitionerCheckedList${idc}`, finalTab.join(';'));
  };

  useEffect(() => {
    dispatch(getPraticiens());
  }, []);

  useEffect(() => {
    const storedList = localStorage.getItem(`practitionerCheckedList${idc}`);
    let selectedPractitioner = '';
    // if checked practitioner was saved
    if (storedList) {
      selectedPractitioner = storedList.split(';');
      setPractitionerCheckedList(selectedPractitioner);
      return;
    }

    const profession = Object.keys(datas)[0];
    selectedPractitioner = datas[profession][0]._id;
    setPractitionerCheckedList([selectedPractitioner]);
    localStorage.setItem(`practitionerCheckedList${idc}`, selectedPractitioner);
  }, []);

  console.log(loading, success);

  return (
    <VStack h="full" boxShadow="2xl">
      <HStack w="full" justifyContent="end" pb={_spacing}>
        <IconButton
          size="sm"
          variant="unstyled"
          icon={<UilAngleDoubleLeft size="50" color="#04B7C9" />}
        />
      </HStack>
      <Box p={_spacing}>
        <Input variant="outline" placeholder="Rechercher un praticien" />
      </Box>
      <Box h="full" w="full" px={_spacing} overflow="auto">
        <Accordion w="full" allowMultiple defaultIndex={[0]}>
          {datas.lenght !== 0 &&
            Object.keys(datas).map((profession) => (
              <MenuItem
                key={profession}
                professionName={profession}
                data={datas[profession]}
                selectedPractitioners={practitionerCheckedList}
                handleSelection={handleSelection}
              />
            ))}
        </Accordion>
      </Box>
    </VStack>
  );
}

export default MenuPraticien;
