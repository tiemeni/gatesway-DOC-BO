import React from 'react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogOverlay,
  Avatar,
  Box,
  Button,
  HStack,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react';
import { UilTrashAlt, UilExclamationTriangle } from '@iconscout/react-unicons';
import { useDispatch, useSelector } from 'react-redux';
import { onDeleteEvent } from '../../redux/common/actions';

function DeleteDialog() {
  const dispatch = useDispatch();
  const cancelRef = React.useRef();
  const { openDeletion } = useSelector((state) => state.Common);
  const onClose = () => dispatch(onDeleteEvent(false));

  return (
    <AlertDialog
      isOpen={openDeletion}
      onClose={onClose}
      leastDestructiveRef={cancelRef}
      isCentered
    >
      <AlertDialogOverlay>
        <AlertDialogContent pt={5}>
          <AlertDialogCloseButton />

          <AlertDialogBody>
            <VStack gap={5}>
              <VStack>
                <Avatar
                  bg="gray.100"
                  icon={
                    <Icon as={UilTrashAlt} boxSize="16" color="primary.500" />
                  }
                  size="xl"
                />
                <Text fontWeight="bold">Supprimer un rendez-vous</Text>
              </VStack>
              <Text color="gray.500" fontSize="sm" align="center">
                Êtes-vous sûre de vouloir supprimer ce rendez-vous?
              </Text>
              <Box
                bg="orange.50"
                w="full"
                p={3}
                rounded={10}
                borderLeftWidth="thick"
                borderLeftColor="red.500"
              >
                <HStack alignItems="flex-start">
                  <Icon
                    as={UilExclamationTriangle}
                    boxSize={5}
                    color="red.500"
                  />
                  <Box>
                    <Text fontSize="sm" fontWeight="bold" color="red.500">
                      Attention
                    </Text>
                    <Text fontSize="sm" color="red.500">
                      Vous ne pourrez pas annuler cette action par la suite.
                    </Text>
                  </Box>
                </HStack>
              </Box>
            </VStack>
          </AlertDialogBody>

          <AlertDialogFooter justifyContent="center">
            <Button onClick={onClose} ref={cancelRef}>
              <Text fontSize="sm">Annuler</Text>
            </Button>
            <Button colorScheme="red" ml={3}>
              <Text fontSize="sm">Supprimer</Text>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default DeleteDialog;
