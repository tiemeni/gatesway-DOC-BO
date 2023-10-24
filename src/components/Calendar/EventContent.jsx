import React, { useRef } from 'react';
import {
  Box,
  Divider,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Tooltip,
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
} from '@iconscout/react-unicons';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { onDeleteEvent, onEventClick } from '../../redux/common/actions';
import TooltipContent from './TooltipContent';

function EventContent({ event }) {
  const {
    _id,
    status,
    bgColor,
    timeStart,
    patient,
    motif,
    provenance,
    duree,
    dateRdv,
    lieu,
    name,
    surname,
    profession,
    dateLong,
  } = event.extendedProps;
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [isVisible, setIsVisible] = React.useState(false);
  const dispatch = useDispatch();
  const initialRef = useRef(null);

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

  const eventClick = () => {
    const createdAt = event.extendedProps.created_at;
    dispatch(
      onEventClick({
        showFicheRdv: true,
        infoRdv: {
          _id,
          patient,
          motif,
          timeStart,
          date: dateRdv,
          duree,
          status,
          lieu: lieu.label,
          praticien: `${name} ${surname}`,
          profession,
          createdAt,
          dateLong,
        },
      }),
    );
  };

  const onDelete = () => dispatch(onDeleteEvent(true));

  return (
    <Menu
      isOpen={isOpen}
      onClose={onClose}
      gutter={-8}
      placement="bottom-start"
      initialFocusRef={initialRef}
      isLazy
    >
      <Tooltip
        label={
          <TooltipContent
            patient={patient}
            motif={motif}
            duration={duree}
            provenance={provenance}
          />
        }
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
          onClick={eventClick}
        >
          <Text color={event.textColor} fontSize="small">
            {timeStart}
          </Text>
          <Text
            fontSize="small"
            whiteSpace="nowrap"
            textOverflow="unset"
            color={event.textColor}
          >
            {patient.civ ?? ''}
            <strong>{patient.name}</strong>
            <span> {patient.surname}</span>
          </Text>
        </MenuButton>
      </Tooltip>

      {/* Content menu */}
      <MenuList minW="20em" boxShadow="lg" zIndex={10}>
        <MenuItem ref={initialRef}>
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
        <MenuItem onClick={onDelete}>
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
    </Menu>
  );
}

EventContent.propTypes = {
  event: PropTypes.shape().isRequired,
};

export default EventContent;
