import { GET_ALL_SPECIALITIES, POST_SPEC_REQUEST } from './types';

export const getAllSpecialities = () => ({
  type: GET_ALL_SPECIALITIES,
});

export const postSpeciality = (spec) => ({
  type: POST_SPEC_REQUEST,
  spec,
});
