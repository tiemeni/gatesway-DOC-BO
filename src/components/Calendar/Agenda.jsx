import React, { useRef, memo } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import frlocale from '@fullcalendar/core/locales/fr';
import interactionPlugin from '@fullcalendar/interaction';
import { Box, Text } from '@chakra-ui/react';
import Pikaday from 'pikaday';
import { useDispatch, useSelector } from 'react-redux';
import EventContent from './EventContent';
import { onChangeCalendar, onDateSelected } from '../../redux/common/actions';
import {
  headerToolbar,
  months,
  slotLabelFormat,
  weekdays,
  weekdaysShort,
} from '../../utils/variables/fullcalendar';
import Loader from './Loader';
import { useSocket } from '../../providers/socket';

function Agenda() {
  const idc = localStorage.getItem('idc');
  const dispatch = useDispatch();
  const calendarRef = useRef(null);
  const pickerRef = useRef(null);
  const { practitionersCheckedList } = useSelector((state) => state.Praticiens);
  const socket = useSocket();

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
  const onLoad = (isLoading) => dispatch(onChangeCalendar(isLoading));
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
        months,
        weekdays,
        weekdaysShort,
      },
      firstDay: 1,
      showWeekNumber: true,
    });
    pickerRef.current = picker;

    return () => {
      picker.destroy();
    };
  }, []);

  React.useEffect(() => {
    socket.on('refetchEvents', () => {
      calendarRef.current.getApi().refetchEvents();
    });
  }, [socket]);

  return (
    <Box position="relative" w="full">
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
        datesSet={onDatesSet}
        dayHeaderContent={dayHeaderContent}
        dateClick={onDateClick}
        headerToolbar={headerToolbar}
        slotLabelFormat={slotLabelFormat}
        eventClassNames="calendar-event"
        eventSources={[
          {
            url: `${process.env.REACT_APP_LOCAL_URL}/appointments/`,
            extraParams: {
              idCentre: idc,
              idp: practitionersCheckedList.idsList,
            },
          },
        ]}
        eventSourceSuccess={(rawEvents) => rawEvents.data}
        loading={onLoad}
      />
      <Loader />
    </Box>
  );
}

export default memo(Agenda);
