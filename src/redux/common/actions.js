import * as types from './types';

export const resetApp = () => ({
  type: types.RESET_APP,
});

export const onDateSelected = (payload) => ({
  type: types.AGENDA_DATE_CLICK,
  payload,
});

export const onChangeCalendar = (payload) => ({
  type: types.SHOW_CALENDAR_LOADER,
  payload,
});

export const onEventClick = (payload) => ({
  type: types.EVENT_CLICK,
  payload,
});

export const onOpenDialog = (payload) => ({
  type: types.DELETE_EVENT,
  payload,
});
