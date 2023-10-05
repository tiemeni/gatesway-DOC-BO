import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Checkbox,
  HStack,
  IconButton,
  Text,
  VStack,
} from '@chakra-ui/react';
import { UilPlus } from '@iconscout/react-unicons';
import MenuItemChild from './menu-Item-child';

const _spacing = 3;
const _iconSize = 20;

function MenuItem(props) {
  const { professionName, data } = props;
  const [isGroupChecked, setIsGroupChecked] = useState(false);

  const handleChange = () => {
    setIsGroupChecked(!isGroupChecked);
  };

  return (
    <AccordionItem>
      <HStack alignItems="center">
        <Checkbox
          value={isGroupChecked}
          onChange={handleChange}
          onAbortCapture={handleChange}
          size="md"
          colorScheme="primary"
        />
        <AccordionButton
          px={0}
          _hover={{ bg: 'transparent' }}
          _expanded={{ borderBottomWidth: 1, borderBottomColor: 'primary.200' }}
        >
          <HStack w="full" justifyContent="space-between">
            <Text
              fontSize="sm"
              textTransform="uppercase"
              color="primary.500"
              fontWeight="semibold"
            >
              {professionName}
            </Text>

            <IconButton
              onClick={(e) => e.stopPropagation()}
              size="xs"
              variant="ghost"
              icon={<UilPlus color="black" size={_iconSize} />}
            />
          </HStack>
        </AccordionButton>
      </HStack>
      <AccordionPanel py={_spacing} px={0}>
        <VStack spacing={_spacing}>
          {data.map((praticien) => (
            <MenuItemChild
              key={praticien._id}
              name={praticien.name}
              surname={praticien.surname}
              _id={praticien._id}
            />
          ))}
        </VStack>
      </AccordionPanel>
    </AccordionItem>
  );
}

MenuItem.propTypes = {
  professionName: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MenuItem;
