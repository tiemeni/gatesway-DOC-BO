/**
 * @description for praticiens
 */
export const dataPraticien = {
  cols: [
    { label: 'Actions', fname: 'Action' },
    { label: 'civilité', fname: 'civility' },
    { label: 'Nom', fname: 'name' },
    { label: 'Prenom', fname: 'surname' },
    { label: 'Date de naissance', fname: 'birthdate' },
    { label: 'Portable', fname: 'telephone' },
    { label: 'Email', fname: 'email' },
    { label: 'Initiales', fname: 'initiales' },
    { label: 'Actif', fname: 'active' },
    { label: 'Temps par defaut', fname: 'timeSlot' },
  ],
  rows: [],
  actions: [
    {
      label: 'modifier',
      action: () => console.log('modifier'),
      editePath: '/content/praticien/upsert/',
    },
    {
      label: 'supprimer',
      action: (fn) => fn(),
    },
  ],
};

export const dataUSer = {
  cols: [
    { label: 'Actions', fname: 'Action' },
    { label: 'civilité', fname: 'civility' },
    { label: 'Nom', fname: 'name' },
    { label: 'Prenom', fname: 'surname' },
    { label: 'Date de naissance', fname: 'birthdate' },
    { label: 'Portable', fname: 'telephone' },
    { label: 'Email', fname: 'email' },
    { label: 'Initiales', fname: 'initiales' },
    { label: 'Actif', fname: 'active' },
  ],
  rows: [],
  actions: [
    {
      label: 'modifier',
      action: () => console.log('modifier'),
      editePath: '/content/user/upsert/',
    },
    {
      label: 'supprimer',
      action: (fn) => fn(),
    },
  ],
};

export const dataLieux = {
  cols: [
    { label: 'Actions', fname: 'Action' },
    { label: 'Label', fname: 'label' },
    { label: 'Code postal', fname: 'codePostal' },
    { label: 'Region', fname: 'region' },
    { label: 'Ville', fname: 'ville' },
    { label: 'Reference', fname: 'reference' },
    { label: 'initiales', fname: 'initiales' },
    { label: 'Active', fname: 'active' },
  ],
  rows: [],
  actions: [
    {
      label: 'modifier',
      action: () => console.log('modifier'),
      editePath: '/content/lieu/upsert/',
    },
    { label: 'Supprimer', action: () => console.log('Supprimer') },
  ],
};

export const dataMotifs = {
  cols: [
    { label: 'Actions', fname: 'Action' },
    { label: 'Nom', fname: 'nom' },
    { label: 'Temps par defaut', fname: 'default_time' },
    { label: 'Couleur', fname: 'couleur' },
    { label: 'Reference', fname: 'reference' },
    { label: 'Active', fname: 'active' },
  ],
  rows: [],
  actions: [
    {
      label: 'modifier',
      action: () => console.log('modifier'),
      editePath: '/content/motif/upsert/',
    },
    { label: 'Supprimer', action: () => console.log('Supprimer') },
  ],
};

export const dataPatient = {
  cols: [
    { label: 'Actions', fname: 'Action' },
    { label: 'civilité', fname: 'civility' },
    { label: 'Nom', fname: 'name' },
    { label: 'Prenom', fname: 'surname' },
    { label: 'Date de naissance', fname: 'birthdate' },
    { label: 'Portable', fname: 'telephone' },
    { label: 'Email', fname: 'email' },
    { label: 'Initiales', fname: 'initiales' },
    { label: 'Actif', fname: 'active' },
    { label: 'Group', fname: 'groups' },
  ],
  rows: [],
  actions: [
    {
      label: 'modifier',
      action: () => console.log('modifier'),
      editePath: '/content/patient/upsert/',
    },
  ],
};

export const dataSpeciality = {
  cols: [
    { label: 'Actions', fname: 'Action' },
    { label: 'Label', fname: 'label' },
    { label: 'Titre', fname: 'title' },
    { label: 'Reference', fname: 'reference' },
  ],
  rows: [
    {
      label: 'nom spec',
      title: 'titre',
      reference: 'reference',
    },
    {
      label: 'nom spec 2',
      title: 'titre 2',
      reference: 'reference 2',
    },
  ],
  actions: [
    {
      label: 'modifier',
      action: () => console.log('modifier'),
      editePath: '/content/speciality/upsert/',
    },
    {
      label: 'supprimer',
      action: (fn) => fn(),
    },
  ],
};
