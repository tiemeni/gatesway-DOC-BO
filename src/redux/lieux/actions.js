import { GET_ALL_LIEUX, POST_LIEU_REQUEST } from './types';

export const getAllLieux = () => ({
  type: GET_ALL_LIEUX,
});

export const postLieuCallout = (lieu) => ({
  type: POST_LIEU_REQUEST,
  lieu,
});
