import React from 'react';
import { Checkbox, HStack, IconButton, Text } from '@chakra-ui/react';
import { UilPlus, UilCog, UilEdit } from '@iconscout/react-unicons';
import PropTypes from 'prop-types';
import { formatUserName } from '../../utils/helpers';

const _spacing = 3;
const _iconSizeSmall = 18;

function MenuItemChild(props) {
  const { name, surname, _id } = props;

  return (
    <HStack w="full" gap={_spacing}>
      <HStack gap={_spacing - 1}>
        <Checkbox size="md" colorScheme="primary" />
        <Text
          color="dark.500"
          fontSize="sm"
          overflow="hidden"
          textOverflow="ellipsis"
          noOfLines={1}
        >
          {`${formatUserName(name, surname)}`}
        </Text>
      </HStack>
      <HStack spacing={0}>
        <IconButton
          onClick={(e) => e.stopPropagation()}
          size="xs"
          variant="unstyled"
          icon={<UilCog color="#04B7C9" size={_iconSizeSmall} />}
        />
        <IconButton
          onClick={() => console.log(_id)}
          size="xs"
          variant="unstyled"
          icon={<UilPlus color="black" size={_iconSizeSmall} />}
        />
        <IconButton
          onClick={(e) => e.stopPropagation()}
          size="xs"
          variant="unstyled"
          icon={<UilEdit color="black" size={_iconSizeSmall} />}
          aria-label="consignes"
        />
      </HStack>
    </HStack>
  );
}

MenuItemChild.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string,
  _id: PropTypes.string.isRequired,
};

MenuItemChild.defaultProps = {
  surname: '',
};

export default MenuItemChild;
