import * as types from './types';

export const onUpdateAppointment = (payload) => ({
  type: types.UPDATE_APPOINTMENT_REQUEST,
  payload,
});

export const onDeleteAppointment = (payload) => ({
  type: types.DELETE_APPOINTMENT_REQUEST,
  payload,
});

export const copyAppointmentId = (payload) => ({
  type: types.COPY_APPOINTMENT_ID,
  payload,
});

export const duplicateAppointment = (payload) => ({
  type: types.DUPLICATE_APPOINTMENT_REQUEST,
  payload,
});
