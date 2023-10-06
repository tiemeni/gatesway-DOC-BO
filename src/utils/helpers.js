const generateRandomAppointments = () => {
  const startDate = new Date('2023-10-02'); // Date de début : aujourd'hui
  startDate.setHours(0, 0, 0, 0); // Réinitialiser l'heure à 00:00:00

  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 6); // Ajouter 6 jours pour obtenir la fin de la semaine

  const appointments = [];

  const colors = [
    '#FF0000',
    '#00FF00',
    '#0000FF',
    '#FFFF00',
    '#FF00FF',
    '#00FFFF',
    '#FFA500',
  ];

  // Générer au moins 15 rendez-vous de 10 minutes pour chaque jour de la semaine
  for (let day = 0; day <= 6; day += 1) {
    const dayAppointments = [];

    while (dayAppointments.length < 15) {
      const startDateTime = new Date(startDate);
      startDateTime.setDate(startDate.getDate() + day);
      startDateTime.setHours(8 + Math.floor(Math.random() * 9)); // Heure aléatoire entre 8h et 16h
      startDateTime.setMinutes(Math.floor(Math.random() * 6) * 10); // Minutes : 0, 10, 20, 30, 40, 50

      const endDateTime = new Date(startDateTime);
      endDateTime.setMinutes(startDateTime.getMinutes() + 10); // Durée fixe de 10 minutes

      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      const appointment = {
        id: dayAppointments.length + 1,
        title: `Rendez-vous ${dayAppointments.length + 1}`,
        start: startDateTime.toISOString(),
        end: endDateTime.toISOString(),
        description: 'Ceci est un événement important',
        heure_debut: startDateTime.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
        civ: 'M.',
        borderColor: '#04B7C9',
        color: '#04B7C9',
        textColor: 'black',
        className: 'calendar-event',
        bgColor: randomColor,
      };

      dayAppointments.push(appointment);
    }

    appointments.push(...dayAppointments);
  }

  return appointments;
};

export const fakeDatas = generateRandomAppointments();

export const retreiveIdc = () => {
  const idc = window.location.search.split('idc=')[1];
  return idc;
};

export const formatUserName = (username, userSurname) => {
  const [firstName, secondName] = username.split(' ');
  const [firstSurname, secondSurname] = userSurname.split(' ');
  let final = '';

  if (firstName) {
    final = firstName;
    if (secondName) {
      final += ` ${secondName}`;
    }
  }

  if (firstSurname) {
    final += ` ${firstSurname}`;
    if (secondSurname && !secondName) {
      final += ` ${secondSurname}`;
    }
  }

  return final;
};

export  const getDateAndTime = ()  => {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');

  let dayOfWeek;
  switch (now.getDay()) {
    case 0:
      dayOfWeek = 'Dimanche';
      break;
    case 1:
      dayOfWeek = 'Lundi';
      break;
    case 2:
      dayOfWeek = 'Mardi';
      break;
    case 3:
      dayOfWeek = 'Mercredi';
      break;
    case 4:
      dayOfWeek = 'Jeudi';
      break;
    case 5:
      dayOfWeek = 'Vendredi';
      break;
    case 6:
      dayOfWeek = 'Samedi';
      break;
    default:
      dayOfWeek = '';
      break;
  }

  let monthName;
  switch (Number(month)) {
    case 1:
      monthName = 'Janvier';
      break;
    case 2:
      monthName = 'Février';
      break;
    case 3:
      monthName = 'Mars';
      break;
    case 4:
      monthName = 'Avril';
      break;
    case 5:
      monthName = 'Mai';
      break;
    case 6:
      monthName = 'Juin';
      break;
    case 7:
      monthName = 'Juillet';
      break;
    case 8:
      monthName = 'Août';
      break;
    case 9:
      monthName = 'Septembre';
      break;
    case 10:
      monthName = 'Octobre';
      break;
    case 11:
      monthName = 'Novembre';
      break;
    case 12:
      monthName = 'Décembre';
      break;
    default:
      monthName = '';
      break;
  }

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const dateTime = `${dayOfWeek} ${day} ${monthName} ${year} ${hours}:${minutes}:${seconds}`;
  return dateTime;
}

