import React, { useEffect, useRef, memo, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import frlocale from '@fullcalendar/core/locales/fr';
import interactionPlugin from '@fullcalendar/interaction';
import { Box, Heading, Text } from '@chakra-ui/react';
import Pikaday from 'pikaday';
import { useSelector } from 'react-redux';
import { fakeDatas } from '../../utils/helpers';

function renderEventContent({ event }) {
  const { bgColor } = event.extendedProps;
  return (
    <Box height="full" pl={1} overflow="hidden" bg={bgColor} pb={1}>
      <Text fontSize="sm">{event.extendedProps.heure_debut}</Text>
      <Text
        fontSize="sm"
        fontWeight="semibold"
      >{`${event.extendedProps.civ} ${event.title}`}</Text>
    </Box>
  );
}

function Calendar() {
  const calendarRef = useRef(null);
  const pickerRef = useRef(null);
  const [calendarTItle, setCalendarTItle] = useState();
  const { practitionersCheckedList } = useSelector((state) => state.Praticiens);

  const handlePikadayDateChange = (date) => {
    const calendarApi = calendarRef.current.getApi();
    if (date.toString() !== calendarRef.current.getApi().getDate().toString()) {
      calendarApi.gotoDate(new Date(date));
    }
  };

  const customButtons = {
    miniCalendar: {
      icon: 'fa-calendar',
      click: () => {
        pickerRef.current.show();
      },
    },
  };

  useEffect(() => {
    console.log('calendar');
    let title = '';
    if (practitionersCheckedList.namesList?.length) {
      const { length } = practitionersCheckedList.namesList;
      const [value] = practitionersCheckedList.namesList;
      title = length > 1 ? `Affichage de ${length} praticiens` : value;
    }
    setCalendarTItle(title);
  }, [practitionersCheckedList.namesList]);

  React.useEffect(() => {
    const picker = new Pikaday({
      field: document.querySelector('.fc-miniCalendar-button'),
      format: 'yy-mm-dd',
      onSelect: handlePikadayDateChange,
      i18n: {
        previousMonth: 'Mois précedent',
        nextMonth: 'Mois prochain',
        months: [
          'Janvier',
          'Février',
          'Mars',
          'Avril',
          'Mai',
          'Juin',
          'Juillet',
          'Août',
          'Septembre',
          'Octobre',
          'Novembre',
          'Décembre',
        ],
        weekdays: [
          'Dimanche',
          'Lundi',
          'Mardi',
          'Mercredi',
          'Jeudi',
          'Vendredi',
          'Samedi',
        ],
        weekdaysShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
      },
      firstDay: 1,
      showWeekNumber: true,
    });
    pickerRef.current = picker;

    return () => {
      picker.destroy();
    };
  }, []);

  return (
    <Box p={5}>
      <Heading
        textAlign="center"
        size="lg"
        fontWeight="normal"
        color="primary.500"
        mb={5}
      >
        {calendarTItle}
      </Heading>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, resourceTimeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        weekends
        dayCount
        locale={frlocale}
        initialDate={new Date()}
        slotMinTime="08:00:00"
        slotMaxTime="18:00:00"
        slotDuration="00:05:00"
        slotLabelInterval="00:30:00"
        nowIndicator
        datesAboveResources
        dayMaxEventRows
        allDaySlot={false}
        weekNumbers
        stickyHeaderDates
        height="auto"
        eventContent={renderEventContent}
        customButtons={customButtons}
        events={fakeDatas}
        headerToolbar={{
          left: 'today prev,next miniCalendar',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        slotLabelFormat={{
          hour: 'numeric',
          minute: '2-digit',
          omitZeroMinute: false,
          meridiem: 'short',
        }}
        datesSet={(event) => {
          if (pickerRef?.current) {
            pickerRef.current.setDate(new Date(event.startStr), {
              triggerChangeEvent: false,
            });
          }
        }}
      />
    </Box>
  );
}

export default memo(Calendar);
