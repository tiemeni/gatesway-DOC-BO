import { GET_ALL_PATIENT, POST_PATIENT_REQUEST } from './types';

export const getAllPatients = () => ({
  type: GET_ALL_PATIENT,
});

export const postPatient = (patient) => ({
  type: POST_PATIENT_REQUEST,
  patient,
});
