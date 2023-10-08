export const data = {
  dataFields: {
    callBacks: {
      onUp: (d) => console.log(d),
      onBack: () => console.log('on back'),
    },
    data: [
      {
        name: 'nom',
        placeholder: 'votre nom',
        required: true,
        type: 'text',
        id: 1,
      },
      {
        name: 'email',
        placeholder: 'votre email',
        required: true,
        type: 'email',
        id: 2,
      },
      {
        name: 'civilité',
        placeholder: 'votre civilité',
        required: true,
        type: 'picklist',
        id: 3,
        options: [
          {
            name: 'option1',
            id: 1,
          },
          {
            name: 'option2',
            id: 2,
          },
        ],
      },
      {
        name: 'color',
        placeholder: 'votre color',
        required: true,
        type: 'colorPicker',
        id: 4,
      },
      {
        name: 'preferences',
        placeholder: 'votre preferences',
        required: true,
        type: 'checkbox',
        id: 5,
        options: [
          {
            name: 'preference1',
            id: 1,
          },
          {
            name: 'preference2',
            id: 2,
          },
        ],
      },
      {
        name: 'sexe',
        placeholder: 'votre sexe',
        required: true,
        type: 'radio',
        id: 6,
        options: [
          {
            name: 'Masculin',
            value: 1,
            id: 1,
          },
          {
            name: 'Feminin',
            value: 0,
            id: 2,
          },
        ],
      },
      {
        name: 'number',
        placeholder: 'votre numero',
        required: true,
        type: 'number',
        id: 7,
      },
    ],
  },
};

/**
 * @description recherche sur praticien
 */

export const praticien = {
  dataFields: {
    callBacks: {
      onUp: (d) => console.log(d),
      onBack: () => console.log('on back'),
    },
    data: [
      {
        name: 'nom',
        placeholder: 'votre nom',
        required: false,
        type: 'text',
        id: 1,
      },
      {
        name: 'email',
        placeholder: 'votre email',
        required: false,
        type: 'email',
        id: 2,
      },
      {
        name: 'civilité',
        placeholder: 'votre civilité',
        required: false,
        type: 'picklist',
        id: 3,
        options: [
          {
            name: 'option1',
            id: 1,
          },
          {
            name: 'option2',
            id: 2,
          },
        ],
      },
    ],
  },
};

/**
 * @description formilaire creation / update praticien
 */

export const praticienCreateOrEdite = {
  dataFields: {
    callBacks: {
      onUp: (d) => console.log(d),
      onBack: () => console.log('on back'),
    },
    data: [
      {
        name: 'civility',
        placeholder: 'civilité',
        required: true,
        type: 'picklist',
        id: 3,
        options: [
          {
            name: 'option1',
            id: 1,
          },
          {
            name: 'option2',
            id: 2,
          },
        ],
      },
      {
        name: 'name',
        placeholder: 'Nom',
        required: true,
        type: 'text',
        id: 1,
      },
      {
        name: 'surname',
        placeholder: 'prenom',
        required: true,
        type: 'email',
        id: 2,
      },
      {
        name: 'birthdate',
        placeholder: 'date de naissance',
        required: false,
        type: 'date',
        id: 4,
      },
      {
        name: 'telephone',
        placeholder: 'portable',
        required: false,
        type: 'number',
        id: 5,
      },
      {
        name: 'email',
        placeholder: 'email',
        required: true,
        type: 'email',
        id: 6,
      },
      {
        name: 'initiales',
        placeholder: 'initiales',
        required: false,
        type: 'text',
        id: 7,
      },
      {
        name: 'active',
        placeholder: 'actif',
        required: false,
        type: 'picklist',
        id: 8,
        options: [
          {
            id: 1,
            name: true,
          },
          {
            id: 2,
            name: false,
          },
        ],
      },
      {
        name: 'groups',
        placeholder: 'group',
        required: false,
        type: 'picklist',
        id: 9,
        options: [
          {
            id: 1,
            name: 'groupe 1',
          },
          {
            id: 2,
            name: 'groupe 2',
          },
        ],
      },
      {
        name: 'affectation',
        placeholder: 'affectation',
        required: false,
        type: 'picklist',
        id: 10,
        options: [
          {
            id: 1,
            name: 'affectation 1',
          },
          {
            id: 2,
            name: 'affectation 2',
          },
        ],
      },
      {
        name: 'job',
        placeholder: 'job',
        required: false,
        type: 'picklist',
        id: 11,
        options: [
          {
            id: 1,
            name: 'job 1',
          },
          {
            id: 2,
            name: 'job 2',
          },
        ],
      },
      {
        name: 'motifFilter',
        placeholder: 'filtres sur les motifs',
        required: false,
        type: 'picklist',
        id: 12,
        options: [
          {
            id: 1,
            name: 'motifFilter 1',
          },
          {
            id: 2,
            name: 'motifFilter 2',
          },
        ],
      },
      {
        name: 'timeSlot',
        placeholder: 'durée de traitement',
        required: false,
        type: 'picklist',
        id: 12,
        options: [
          {
            id: 1,
            name: '15',
          },
          {
            id: 2,
            name: '30',
          },
        ],
      },
    ],
  },
};
