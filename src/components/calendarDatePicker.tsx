import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';

interface CalendarDatePickerProps {
  onSelectDate?: (date: Dayjs) => void;
}

const CalendarDatePicker: React.FC<CalendarDatePickerProps> = ({
  onSelectDate,
}) => {
  const today = dayjs();
  const [currentMonth, setCurrentMonth] = useState<Dayjs>(
    dayjs().startOf('month'),
  );
  const [selectedDate, setSelectedDate] = useState<Dayjs>(today);

  useEffect(() => {
    if (onSelectDate) onSelectDate(today);
  }, []);

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const startDayOfMonth = currentMonth.startOf('month').day();
  const daysInMonth = currentMonth.daysInMonth();

  const handleDateClick = (date: Dayjs) => {
    if (date.isBefore(today, 'day')) return;
    setSelectedDate(date);
    if (onSelectDate) onSelectDate(date);
  };

  const goToNextMonth = () => setCurrentMonth(currentMonth.add(1, 'month'));
  const goToPreviousMonth = () =>
    setCurrentMonth(currentMonth.subtract(1, 'month'));

  return (
    <div className="w-full rounded-lg border border-gray-200 bg-white p-3 shadow-lg sm:p-4">
      <div className="mb-2 flex items-center justify-between">
        <button
          onClick={goToPreviousMonth}
          className="text-gray-600 transition duration-150 ease-in-out hover:text-primary-500"
        >
          &lt;
        </button>
        <div className="text-base font-semibold text-primary-500 sm:text-lg">
          {currentMonth.format('MMMM YYYY')}
        </div>
        <button
          onClick={goToNextMonth}
          className="text-gray-600 transition duration-150 ease-in-out hover:text-primary-500"
        >
          &gt;
        </button>
      </div>

      <div className="mb-2 grid grid-cols-7 gap-2 text-center font-medium text-gray-500">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-xs sm:text-sm">
            {day}
          </div>
        ))}
      </div>

      <div className="mt-2 grid grid-cols-7 gap-2">
        {[...Array(startDayOfMonth)].map((_, idx) => (
          <div key={idx}></div>
        ))}

        {[...Array(daysInMonth)].map((_, dayIdx) => {
          const date = currentMonth.date(dayIdx + 1);
          const isSelected = selectedDate && selectedDate.isSame(date, 'day');
          const isPastDate = date.isBefore(today, 'day');

          let buttonClass =
            'size-8 rounded-full text-xs font-medium transition duration-150 ease-in-out sm:size-10';

          if (isSelected) {
            buttonClass += ' bg-primary-500 text-white';
          } else if (isPastDate) {
            buttonClass += ' cursor-not-allowed text-gray-300';
          } else {
            buttonClass += ' bg-white text-gray-700 hover:bg-blue-100';
          }

          return (
            <button
              key={dayIdx}
              onClick={() => handleDateClick(date)}
              disabled={isPastDate}
              className={buttonClass}
            >
              {dayIdx + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarDatePicker;
