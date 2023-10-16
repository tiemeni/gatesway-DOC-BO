import React, { useRef, memo } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import frlocale from '@fullcalendar/core/locales/fr';
import interactionPlugin from '@fullcalendar/interaction';
import { Box, Text } from '@chakra-ui/react';
import Pikaday from 'pikaday';
import { useDispatch } from 'react-redux';
import EventContent from './EventContent';
import { onDateSelected } from '../../redux/common/actions';
import { fakeDatas } from '../../utils/helpers';

function Agenda() {
  console.log('agenda');
  const dispatch = useDispatch();
  const calendarRef = useRef(null);
  const pickerRef = useRef(null);

  const handlePikadayDateChange = (date) => {
    const calendarApi = calendarRef.current.getApi();
    if (date.toString() !== calendarRef.current.getApi().getDate().toString()) {
      calendarApi.gotoDate(new Date(date));
    }
  };

  const onDateClick = (info) => {
    const { dateStr } = info;
    dispatch(onDateSelected({ date: dateStr, isOpen: true }));
  };
  const renderEventContent = ({ event }) => <EventContent event={event} />;
  const dayHeaderContent = (info) => <Text fontSize="sm">{info.text}</Text>;
  const onDatesSet = (event) => {
    if (pickerRef?.current) {
      pickerRef.current.setDate(new Date(event.startStr), {
        triggerChangeEvent: false,
      });
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
        dayHeaderContent={dayHeaderContent}
        dateClick={onDateClick}
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
        datesSet={onDatesSet}
      />
    </Box>
  );
}

export default memo(Agenda);
