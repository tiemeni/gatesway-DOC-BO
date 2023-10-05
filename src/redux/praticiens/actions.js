import * as types from './types';

export const getPraticiens = (payload) => ({
  type: types.GET_ALL_PRATICIENS_REQUEST,
  payload,
});

// Ce n'est pas utilise c'est pjuste pour ne pas avoir d'export par defaut
export const othersActions = (payload) => ({
  type: types.GET_ALL_PRATICIENS_REQUEST,
  payload,
});
