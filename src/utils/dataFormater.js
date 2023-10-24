/**
 * praticien formater
 */

export const pratFormater = (data) => ({
  civility: 'M',
  name: data.name,
  surname: data.surname,
  birthdate: data.birthdate,
  telephone: data.telephone,
  email: data.email,
  initiales: data.initiales,
  active: data.active?.toString(),
  timeSlot: data.timeSlot,
  _id: data._id,
});

export const userFormater = (data) => ({
  civility: 'M',
  name: data.name,
  surname: data.surname,
  birthdate: data.birthdate,
  telephone: data.telephone,
  email: data.email,
  initiales: data.initiales,
  active: data.active?.toString(),
  _id: data._id,
});

export const patientFormater = (data) => ({
  civility: data?.civility?.label,
  name: data.name,
  surname: data.surname,
  birthdate: data.birthdate,
  telephone: data.telephone,
  email: data.email,
  initiales: data.initiales,
  active: data.active?.toString(),
  groups: data.groups,
  _id: data._id,
});

export const motifFormater = (data) => ({
  civility: data?.civility?.label,
  nom: data.nom || data.label,
  default_time: data.default_time,
  reference: data.reference,
  active: data.active?.toString(),
  _id: data._id,
});
