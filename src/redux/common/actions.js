import * as types from './types';

export const resetApp = () => ({
  type: types.RESET_APP,
});

export const onDateSelected = (payload) => ({
  type: types.AGENDA_DATE_CLICK,
  payload,
});
