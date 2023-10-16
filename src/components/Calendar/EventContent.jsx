import React from 'react';
import {
  Box,
  Divider,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Text,
  Tooltip,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import {
  UilCopy,
  UilArrowRight,
  UilTrashAlt,
  UilPrint,
  UilCheck,
  UilTimes,
  UilInvoice,
  UilPhoneAlt,
  UilGlobe,
} from '@iconscout/react-unicons';
import PropTypes from 'prop-types';

function TooltipContent() {
  return (
    <VStack p={2} gap={2} alignItems="flex-start">
      <Text fontSize="sm" fontWeight="semibold">
        Nom du patient
      </Text>
      <HStack>
        <Text fontSize="sm" fontWeight="semibold">
          Motif:
        </Text>
        <Text fontSize="sm">Consultation 16-59 ans</Text>
      </HStack>
      <HStack>
        <Text fontSize="sm" fontWeight="semibold">
          Durée:
        </Text>
        <Text fontSize="sm">15 min</Text>
      </HStack>
      <HStack>
        <Icon as={UilGlobe} fontSize="xl" />
        <Text fontSize="sm">Rendez-pris de puis le mobile</Text>
      </HStack>
    </VStack>
  );
}

function EventContent({ event }) {
  const { bgColor } = event.extendedProps;
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [isVisible, setIsVisible] = React.useState(false);

  const openPopover = () => {
    if (isOpen) return;
    setIsVisible(true);
  };
  const closePopover = () => setIsVisible(false);
  const openMenu = (e) => {
    e.preventDefault();
    onOpen();
    closePopover();
  };

  return (
    <Menu
      isOpen={isOpen}
      onClose={onClose}
      gutter={-8}
      placement="bottom-start"
      isLazy
    >
      <Tooltip
        label={<TooltipContent />}
        bg="white"
        color="black"
        hasArrow
        gutter={0}
        isOpen={isVisible}
        onOpen={openPopover}
        onClose={closePopover}
      >
        <MenuButton
          as={Box}
          height="full"
          w="full"
          overflow="hidden"
          bg={bgColor}
          p={1}
          roundedRight="0.5em"
          onContextMenu={openMenu}
        >
          <Text fontSize="small">{event.extendedProps.heure_debut}</Text>
          <Text
            fontSize="small"
            fontWeight="semibold"
          >{`${event.extendedProps.civ} ${event.title}`}</Text>
        </MenuButton>
      </Tooltip>

      {/* Content menu */}
      <Portal>
        <MenuList minW="20em" boxShadow="lg" zIndex={10}>
          <MenuItem>
            <HStack w="full" gap={4}>
              <Icon as={UilCopy} color="primary.500" fontSize="xl" />
              <Text fontSize="small">Copier-coller le rdv</Text>
            </HStack>
          </MenuItem>
          <MenuItem>
            <HStack w="full" gap={4}>
              <Icon as={UilArrowRight} color="primary.500" fontSize="xl" />
              <Text fontSize="small">Deplacer le rdv</Text>
            </HStack>
          </MenuItem>
          <MenuItem>
            <HStack w="full" gap={4}>
              <Icon as={UilTrashAlt} color="red.500" fontSize="xl" />
              <Text fontSize="small" color="red.500">
                Supprimer le rdv
              </Text>
            </HStack>
          </MenuItem>
          <MenuItem>
            <HStack w="full" gap={4}>
              <Icon as={UilPrint} color="primary.500" fontSize="xl" />
              <Text fontSize="small">Imprimer le rdv</Text>
            </HStack>
          </MenuItem>
          <MenuItem>
            <HStack w="full" gap={4}>
              <Icon as={UilInvoice} color="primary.500" fontSize="xl" />
              <Text fontSize="small">Encaissement</Text>
            </HStack>
          </MenuItem>
          <Divider />
          <MenuItem>
            <HStack w="full" gap={4}>
              <Icon as={UilCheck} color="primary.500" fontSize="xl" />
              <Text fontSize="small">Absence excusée</Text>
            </HStack>
          </MenuItem>
          <MenuItem>
            <HStack w="full" gap={4}>
              <Icon as={UilTimes} color="primary.500" fontSize="xl" />
              <Text fontSize="small">Absence non excusée</Text>
            </HStack>
          </MenuItem>
          <Divider />
          <MenuItem>
            <HStack w="full" gap={4}>
              <Icon as={UilPhoneAlt} color="primary.500" fontSize="xl" />
              <Text fontSize="small">Appel Urgence</Text>
            </HStack>
          </MenuItem>
        </MenuList>
      </Portal>
    </Menu>
  );
}

EventContent.propTypes = {
  event: PropTypes.shape().isRequired,
};

export default EventContent;
