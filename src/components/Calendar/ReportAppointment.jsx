import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Select,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import {
  UilArrowCircleRight,
  UilSearch,
  UilExclamationTriangle,
} from '@iconscout/react-unicons';
import { Field, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import LoadingText from '../elements/WaitingMessage';
import { openReportModal } from '../../redux/appointments/actions';

function ReportAppointment() {
  const { openReport } = useSelector((state) => state.Appointments);
  const dispatch = useDispatch();
  const availabilities = [1];
  const isLoading = false;
  const initialValues = {
    date: '',
    day: '',
    creneau: '',
    lieu: '',
  };

  const onClose = () => dispatch(openReportModal({ isOpen: false, id: null }));
  const onSubmit = (data) => console.log(data);

  return (
    <Modal
      isOpen={openReport}
      closeOnOverlayClick={false}
      onClose={onClose}
      size="4xl"
    >
      <ModalOverlay />
      <ModalContent roundedTop={10}>
        <ModalHeader roundedTop={10} bg="primary.500">
          <Text fontWeight="normal" fontSize="lg" color="white">
            Choisir une nouvelle disponibilité
          </Text>
        </ModalHeader>
        <ModalCloseButton color="white" />
        <ModalBody p={5}>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <VStack gap={5} alignItems="flex-start">
                  <Accordion
                    w="full"
                    defaultIndex={[0]}
                    style={{ borderTopColor: 'white' }}
                    allowToggle
                  >
                    <AccordionItem>
                      <AccordionButton px={0}>
                        <Text w="full" textAlign="start" fontSize="sm">
                          Filtre de recherche
                        </Text>
                        <AccordionIcon color="black" />
                      </AccordionButton>
                      <AccordionPanel>
                        <VStack w="full" gap={5}>
                          <HStack w="full" gap={5}>
                            <FormControl>
                              <FormLabel color="gray.500" fontSize="sm">
                                Date
                              </FormLabel>
                              <Field
                                as={Input}
                                id="date"
                                name="date"
                                fontSize="sm"
                                type="date"
                              />
                            </FormControl>
                            <FormControl>
                              <FormLabel color="gray.500" fontSize="sm">
                                Jour
                              </FormLabel>
                              <Field
                                as={Select}
                                id="day"
                                name="day"
                                fontSize="sm"
                              >
                                <option value="1">Lundi</option>
                                <option value="2">Mardi</option>
                                <option value="3">Mercredi</option>
                                <option value="4">Jeudi</option>
                                <option value="5">Vendredi</option>
                                <option value="6">Samedi</option>
                              </Field>
                            </FormControl>
                            <FormControl>
                              <FormLabel color="gray.500" fontSize="sm">
                                Creneau horaire
                              </FormLabel>
                              <Field
                                as={Select}
                                id="creneau"
                                name="creneau"
                                fontSize="sm"
                              >
                                <option value="1">6h-8h</option>
                                <option value="2">8h-10h</option>
                                <option value="3">10h-12h</option>
                                <option value="4">12h-14h</option>
                                <option value="5">14h-16h</option>
                                <option value="6">16h-18h</option>
                              </Field>
                            </FormControl>
                            <FormControl isDisabled>
                              <FormLabel color="gray.500" fontSize="sm">
                                Centre
                              </FormLabel>
                              <Field
                                as={Select}
                                id="creneau"
                                name="creneau"
                                fontSize="sm"
                              >
                                <option value="1">Clinique FOUDA</option>
                                <option value="2">8h-10h</option>
                                <option value="3">10h-12h</option>
                                <option value="4">12h-14h</option>
                                <option value="5">14h-16h</option>
                                <option value="6">16h-18h</option>
                              </Field>
                            </FormControl>
                          </HStack>

                          <Button
                            size="md"
                            colorScheme="primary"
                            leftIcon={<UilSearch />}
                            loadingText={LoadingText}
                            fontSize="sm"
                            fontWeight="normal"
                          >
                            <Text>Rechercher</Text>
                          </Button>
                        </VStack>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                  <VStack alignItems="flex-start" w="full">
                    <Text fontSize="sm">
                      Prochaines disponibilité de Dr OPTHA WIEM
                    </Text>
                    {availabilities.length !== 0 && (
                      <RadioGroup w="full">
                        <Grid templateColumns="repeat(3, 1fr)" columnGap={5}>
                          <GridItem w="full">
                            <Radio colorScheme="primary">
                              <Text fontSize="sm">
                                Mardi 02 Janvier 2024 à 09:00
                              </Text>
                            </Radio>
                          </GridItem>
                          <GridItem w="full">
                            <Radio>
                              <Text fontSize="sm">
                                Mardi 02 Janvier 2024 à 09:00
                              </Text>
                            </Radio>
                          </GridItem>
                          <GridItem w="full">
                            <Radio>
                              <Text fontSize="sm">
                                Mardi 02 Janvier 2024 à 09:00
                              </Text>
                            </Radio>
                          </GridItem>
                          <GridItem w="full">
                            <Radio>
                              <Text fontSize="sm">
                                Mardi 02 Janvier 2024 à 09:00
                              </Text>
                            </Radio>
                          </GridItem>
                          <GridItem w="full">
                            <Radio>
                              <Text fontSize="sm">
                                Mardi 02 Janvier 2024 à 09:00
                              </Text>
                            </Radio>
                          </GridItem>
                          <GridItem w="full">
                            <Radio>
                              <Text fontSize="sm">
                                Mardi 02 Janvier 2024 à 09:00
                              </Text>
                            </Radio>
                          </GridItem>
                        </Grid>
                      </RadioGroup>
                    )}
                    {availabilities.length === 0 && (
                      <HStack
                        justifyContent="center"
                        p={5}
                        rounded={5}
                        bg={isLoading ? 'transparent' : 'secondary.200'}
                        w="full"
                      >
                        {!isLoading && (
                          <>
                            <Icon
                              as={UilExclamationTriangle}
                              color="secondary.500"
                              boxSize={6}
                            />
                            <Text fontSize="sm" color="secondary.500">
                              Aucune disponibilité n'a été trouvée pour ce
                              praticien selon les critères définis.
                            </Text>
                          </>
                        )}
                        {isLoading && (
                          <>
                            <Spinner
                              emptyColor="secondary.200"
                              speed="0.65s"
                              color="secondary.500"
                              size="md"
                            />
                            <Text fontSize="sm" color="secondary.500">
                              Patientez...
                            </Text>
                          </>
                        )}
                      </HStack>
                    )}
                  </VStack>
                </VStack>
              </form>
            )}
          </Formik>
        </ModalBody>
        <ModalFooter flexDirection="column" gap={5} pb={5}>
          <Divider />
          <HStack justifyContent="center" w="full" gap={5}>
            <Button
              size="md"
              colorScheme="primary"
              rightIcon={<UilArrowCircleRight />}
              loadingText={LoadingText}
            >
              <Text fontSize="sm" fontWeight="normal">
                Confirmer
              </Text>
            </Button>
            <Button size="md" onClick={onClose}>
              <Text fontSize="sm" fontWeight="normal">
                Annuler
              </Text>
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ReportAppointment;
