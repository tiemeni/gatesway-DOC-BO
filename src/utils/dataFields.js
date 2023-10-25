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
  actions: [{ label: 'modifier', action: () => console.log('modifier') }],
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
  actions: [{ label: 'modifier', action: () => console.log('modifier') }],
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
    { label: 'Reference', fname: 'active' },
  ],
  rows: [],
  actions: [
    { label: 'modifier', action: () => console.log('modifier') },
    { label: 'Supprimer', action: () => console.log('Supprimer') },
  ],
};

export const dataMotifs = {
  cols: [
    { label: 'Actions', fname: 'Action' },
    { label: 'Nom', fname: 'nom' },
    { label: 'Temps par defaut', fname: 'default_time' },
    { label: 'Reference', fname: 'reference' },
    { label: 'Active', fname: 'active' },
  ],
  rows: [
    {
      nom: 'nom motif',
      default_time: '15 minutes',
      reference: 'reference',
      active: 'active',
    },
    {
      nom: 'nom motif',
      default_time: '15 minutes',
      reference: 'reference',
      active: 'active',
    },
  ],
  actions: [
    { label: 'modifier', action: () => console.log('modifier') },
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
  rows: [
    {
      civility: 'tiemeni',
      name: 'chr',
      surname: 'sur',
      birthdate: 'homme',
      telephone: '658686162',
      email: 'tiemanirocket@gmail.com',
      initiales: 'tiom',
      active: 'true',
      groups: 'Administrateur',
    },
    {
      civility: 'yomani',
      name: 'rodrigue',
      surname: 'rodrigue',
      birthdate: '17/01/2002',
      telephone: '658686162',
      email: 'tiemanirocket@gmail.com',
      initiales: 'tiom',
      active: 'true',
      groups: 'Administrateur',
    },
  ],
  actions: [{ label: 'modifier', action: () => console.log('modifier') }],
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
    { label: 'modifier', action: () => console.log('modifier') },
    { label: 'Supprimer', action: () => console.log('Supprimer') },
  ],
};
