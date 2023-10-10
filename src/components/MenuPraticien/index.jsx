import React, { memo, useCallback } from 'react';
import { UilAngleDoubleLeft } from '@iconscout/react-unicons';
import {
  Accordion,
  Box,
  HStack,
  IconButton,
  Input,
  VStack,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import MenuItem from './menu-item';
import { formatUserName } from '../../utils/helpers';
import { saveCheckedPractitioners } from '../../redux/praticiens/actions';

const _spacing = 3;
function MenuPraticien() {
  const dispatch = useDispatch();
  const { practitionersCheckedList, datas } = useSelector(
    (state) => state.Praticiens,
  );
  const idc = localStorage.getItem('idc');

  // Control profession checkboxes
  const handleSelection = useCallback(
    (tabIds, names, actionTypes = 'add') => {
      let finalTab = [];
      // Uncheck other selected practitioner
      if (actionTypes === 'uncheckOthers') {
        finalTab = { idsList: tabIds, namesList: names };
      }
      // When practitioner is unselected
      if (actionTypes === 'remove') {
        const ids = practitionersCheckedList.idsList;
        const lists = practitionersCheckedList.namesList;
        if (ids.length === 1 && ids[0] === tabIds[0]) return;

        tabIds.forEach((id) => {
          const index = ids.indexOf(id);
          if (index !== -1) {
            ids.splice(index, 1);
            lists.splice(index, 1);
          }
        });
        finalTab = { idsList: [...ids], namesList: [...lists] };
      }
      // When profession is selected/unselected
      if (actionTypes === 'add') {
        const tabs = Array.from(
          new Set([...practitionersCheckedList.idsList, ...tabIds]),
        );
        const namesTabs = Array.from(
          new Set([...practitionersCheckedList.namesList, ...names]),
        );
        finalTab = { idsList: tabs, namesList: namesTabs };
      }

      if (finalTab.idsList.length === 0) {
        const profession = Object.keys(datas)[0];
        const selectedPractitioner = datas[profession][0];
        const username = formatUserName(
          selectedPractitioner.name,
          selectedPractitioner.surname,
        );
        finalTab = {
          idsList: [selectedPractitioner._id],
          namesList: [username],
        };
      }

      dispatch(saveCheckedPractitioners(finalTab));
      localStorage.setItem(
        `practitionerCheckedList${idc}`,
        finalTab.idsList.join(';'),
      );
      localStorage.setItem(
        `practitionerCheckedListNames${idc}`,
        finalTab.namesList.join(';'),
      );
    },
    [practitionersCheckedList.idsList],
  );

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
          {Object.keys(datas).map((profession) => (
            <MenuItem
              key={profession}
              professionName={profession}
              data={datas[profession]}
              selectedPractitioners={practitionersCheckedList.idsList}
              handleSelection={handleSelection}
            />
          ))}
        </Accordion>
      </Box>
    </VStack>
  );
}

export default memo(MenuPraticien);
