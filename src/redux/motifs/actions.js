import { GET_ALL_MOTIFS, POST_MOTIF_REQUEST } from './types';

export const getAllMotifs = () => ({
  type: GET_ALL_MOTIFS,
});

export const postMotif = (motif) => ({
  type: POST_MOTIF_REQUEST,
  motif,
});
