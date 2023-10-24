import * as types from './types';

export const onUpdateAppointment = (payload) => ({
  type: types.UPDATE_APPOINTMENT_REQUEST,
  payload,
});

export const onDeleteAppointment = (payload) => ({
  type: types.DELETE_APPOINTMENT_REQUEST,
  payload,
});
