import axios from 'axios';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';

import CalendarDatePicker from './calendarDatePicker';
import { useToast } from './toast-bar/toast';

interface TimeSlot {
  startTime: string;
  endTime: string;
}

interface FormData {
  name: string;
  email: string[];
  phone: string;
  description: string;
}

const timeSlots: TimeSlot[] = [
  { startTime: '05:00', endTime: '05:59' },
  { startTime: '06:00', endTime: '06:59' },
  { startTime: '07:00', endTime: '07:59' },
  { startTime: '08:00', endTime: '08:59' },
  { startTime: '20:00', endTime: '20:59' },
  { startTime: '21:00', endTime: '21:59' },
  { startTime: '22:00', endTime: '22:59' },
  { startTime: '23:00', endTime: '23:59' },
];

const initialValues: FormData = {
  name: '',
  email: [''],
  phone: '',
  description: '',
};

const BookMeeting = ({ setOpen }: any) => {
  const { showToast } = useToast();
  const [timeSlot, setTimeSlot] = useState<TimeSlot[]>([]);
  const [loader, setLoader] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialValues);

  useEffect(() => {
    const getTimeSlot = async () => {
      setLoader(true);
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/book/date`,
        );

        if (response?.status === 200) {
          setTimeSlot(response?.data?.data);
          setLoader(false);
        }
      } catch (error) {
        setLoader(false);
        showToast('error', 'Please try again later.', 'topRight');
      }
    };
    getTimeSlot();
  }, []);

  const formatTimeSlot = (startTime: string, endTime: string): string => {
    const [startHour, startMinute] = startTime.split(':').map(Number) as any;
    let [endHour, endMinute] = endTime.split(':').map(Number) as any;

    if (endMinute > 0) {
      endHour += 1;
      endMinute = 0;
    }

    const endPeriod = endHour < 12 ? 'AM' : 'PM';
    const formattedStartHour = startHour % 12 || 12;
    const formattedEndHour = endHour % 12 || 12;

    return `${formattedStartHour}:${startMinute.toString().padStart(2, '0')} - ${formattedEndHour}:${endMinute.toString().padStart(2, '0')} ${endPeriod}`;
  };

  const handleDateSelect = (date: Dayjs) => {
    setSelectedDate(date);
  };

  const handleTimeSlotSelect = (slot: TimeSlot) => {
    setSelectedSlot(slot);
  };

  const handleNext = () => {
    if (!selectedDate || !selectedSlot) {
      showToast('warning', 'Please select date & time', 'topRight');
      return;
    }
    setStep(2);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleEmailChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const { value } = e.target;
    const updatedEmails = [...formData.email];
    updatedEmails[index] = value;
    setFormData({ ...formData, email: updatedEmails });
  };

  const handleAddGuest = () => {
    setFormData({
      ...formData,
      email: [...formData.email, ''],
    });
  };

  const handleRemoveGuest = (index: number) => {
    const updatedEmails = formData.email.filter((_, i) => i !== index);
    setFormData({ ...formData, email: updatedEmails });
  };

  const handleConfirm = async (e: React.FormEvent) => {
    setLoader(true);
    e.preventDefault();
    const formattedDate = selectedDate?.format('YYYY-MM-DD') || '';
    const { description, name, email, phone } = formData;

    if (!name || email[0] === '') {
      setLoader(false);
      showToast('warning', 'Please fill required fields', 'topRight');
      return;
    }

    const bookingData = {
      description,
      name,
      primaryEmail: email[0],
      secondaryEmail: email?.slice(1),
      phone,
      date: formattedDate,
      startTime: selectedSlot?.startTime,
      endTime: selectedSlot?.endTime,
    };

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/book/bookMeeting`,
        bookingData,
      );

      if (response?.status === 200) {
        setFormData(initialValues);
        setLoader(false);
        setOpen(false);
        showToast('success', response?.data?.message, 'topRight');
      }
    } catch (error: any) {
      setLoader(false);
      showToast('error', error?.response?.data?.message, 'topRight');
    }
  };

  const isSlotBooked = (slot: TimeSlot) => {
    return timeSlot.some((bookedSlot: any) => {
      return (
        bookedSlot.date === selectedDate?.format('YYYY-MM-DD') &&
        slot.startTime <= bookedSlot.startTime &&
        slot.endTime >= bookedSlot.endTime
      );
    });
  };
  return (
    <>
      <div className="glassmorphism-container modal fixed inset-0 z-50 flex items-center justify-center ">
        <div className="modal-content borde relative w-1/2 rounded-lg border-primary-400 bg-white p-6">
          <button
            className="absolute right-3 top-2 cursor-pointer border-none bg-transparent text-xl text-gray-700"
            onClick={() => setOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="gray"
              className="size-6"
            >
              <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          {step === 1 && (
            <>
              <h3 className="mb-4 text-center text-lg font-semibold">
                Select a Date & Time
              </h3>
              <div className="grid justify-center gap-6 md:grid-cols-2">
                {/* Calendar Section */}
                <CalendarDatePicker onSelectDate={handleDateSelect} />
                {/* Time Slots */}

                <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-lg sm:p-4">
                  {loader ? (
                    <div className="flex size-full items-center justify-center">
                      <svg
                        className="mr-3 size-5 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          className="opacity-25"
                        />
                        <path
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          fill="currentColor"
                          className="opacity-75"
                        />
                      </svg>
                    </div>
                  ) : (
                    <>
                      <div className="mb-4 ">
                        {selectedDate
                          ? `Selected Date: ${dayjs(selectedDate).format('ddd, DD MMM YYYY')}`
                          : 'Select a Date'}
                      </div>
                      <div className="custom-scrollbar grid h-48 grid-cols-2 gap-2 overflow-y-auto">
                        {timeSlots.map((slot, index) => (
                          <button
                            key={index}
                            className={`rounded-md py-2 ${
                              selectedSlot?.startTime === slot.startTime
                                ? 'bg-primary-500 text-primary-100'
                                : 'bg-primary-500/20 text-primary-500'
                            } ${isSlotBooked(slot) ? '!pointer-events-none !bg-primary-400 !bg-opacity-100 !text-primary-100' : ''}`}
                            onClick={() => handleTimeSlotSelect(slot)}
                          >
                            {isSlotBooked(slot)
                              ? 'Booked'
                              : formatTimeSlot(slot.startTime, slot.endTime)}
                          </button>
                        ))}
                      </div>
                      <div className="mt-6">
                        <button
                          className="flex w-full items-center justify-center rounded-md bg-primary-500 px-4 py-2 text-primary-300"
                          onClick={handleNext}
                        >
                          Next
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <button
                className="absolute left-3 top-2 cursor-pointer border-none bg-transparent text-xl font-medium text-gray-700"
                onClick={() => setStep(1)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="gray"
                  className="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>

              <h3 className="mb-4 text-center text-lg font-semibold">
                Enter Project Details
              </h3>
              <form action="#" className="grid gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-primary-400"
                  >
                    Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-primary-500 p-2.5 text-sm text-primary-500 outline-none"
                  />
                </div>

                {formData.email.map((email, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-full">
                      <label
                        htmlFor={`email-${index}`}
                        className="mb-2 block text-sm font-medium text-primary-400"
                      >
                        Email{index === 0 && '*'}
                      </label>
                      <div className="flex">
                        <input
                          type="email"
                          name={`email-${index}`}
                          placeholder={
                            index === 0
                              ? 'Enter your Email'
                              : 'Enter guest Email'
                          }
                          value={email}
                          onChange={(e) => handleEmailChange(e, index)}
                          className="w-full rounded-lg border border-primary-500 p-2.5 text-sm text-primary-500 outline-none"
                        />
                        {index > 0 && (
                          <button
                            type="button"
                            onClick={() => handleRemoveGuest(index)}
                            className="ml-2 rounded text-white"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="red"
                              className="size-6"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  className="rounded bg-primary-500 px-4 py-2 text-white md:w-32"
                  onClick={handleAddGuest}
                >
                  Add Guest
                </button>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-primary-400"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="WhatsApp Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-primary-500 p-2.5 text-sm text-primary-500 outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="mb-2 block text-sm font-medium text-primary-400"
                  >
                    Please share anything that will help prepare for our
                    meeting.
                  </label>
                  <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-primary-500 p-2.5 text-sm text-primary-500 outline-none"
                  />
                </div>

                <button
                  className="flex w-full items-center justify-center rounded-md bg-primary-500 px-4 py-2 text-primary-300"
                  onClick={handleConfirm}
                >
                  {loader ? (
                    <svg
                      className="mr-3 size-5 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        className="opacity-25"
                      />
                      <path
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        fill="currentColor"
                        className="opacity-75"
                      />
                    </svg>
                  ) : (
                    'Confirm Booking'
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default BookMeeting;
