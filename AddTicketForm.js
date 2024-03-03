import React, { useState } from 'react';
import { CalendarIcon, LocationMarkerIcon, InformationCircleIcon } from '@heroicons/react/solid';

const AddTicketForm = () => {
  const event = {
    name: 'Music Live Event in Ahmedabad',
    date: '3rd December',
    time: '12:00 PM',
    location: 'Ahmedabad',
    ticketPrice: 10 // Assuming ticket price is $10
  };

  const [ticketCount, setTicketCount] = useState(1);

  const handleIncrement = () => {
    setTicketCount(ticketCount + 1);
  };

  const handleDecrement = () => {
    if (ticketCount > 1) {
      setTicketCount(ticketCount - 1);
    }
  };

  const subTotal = ticketCount * event.ticketPrice;
  const gst = subTotal * 0.1;
  const totalAmount = subTotal + gst;

  return (
    <div
      className="w-[487px] h-[615.08px] top-[204px] left-[477px] p-8 rounded-lg border border-solid border-gray-300 mx-auto my-auto bg-white shadow-md mb-8 flex flex-col mt-9"
    >
      <h2 className="text-2xl font-semibold mb-2">{event.name}</h2>
      <p className="text-red-500 mb-4">
        {ticketCount} ticket{ticketCount !== 1 ? 's' : ''}
      </p>
      <hr className="mb-5 border-gray-400" />

      <div className="mb-4">
        <div className="flex items-center text-gray-600 mb-3">
          <CalendarIcon className="h-5 w-5 mr-1" />
          <p>{event.date} | {event.time}</p>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <LocationMarkerIcon className="h-5 w-5 mr-1" />
          <p>{event.location}</p>
        </div>
      </div>
      <hr className="mb-5 border-gray-400" />

      <div className="mb-4 text-gray-600 flex flex-col">
        <div className="flex justify-between">
          <label className="block mb-2 mr-2">Number of Tickets:</label>
          <div className="flex items-center">
            <button
              className="px-2 border border-red-500  font-bold hover:bg-red-400 hover:border-red-700"
              onClick={handleDecrement}
            >
              <span className="text-lg text-red-500 text-xl">-</span>
            </button>
            <span className="px-2  py-1">{ticketCount}</span>
            <button
              className="px-2 border border-red-500  font-bold hover:bg-red-400 hover:border-red-700"
              onClick={handleIncrement}
            >
              <span className="text-lg text-red-500 text-xl">+</span>
            </button>
          </div>
        </div>
      </div>

      <div className="mb-4 text-gray-600 flex flex-col">
        <div className="flex justify-between">
          <p className="mb-5">Sub total:</p>
          <p className="mb-5">&#x20B9;{subTotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p className="mb-5">GST (10%):</p>
          <p className="mb-5">&#x20B9;{gst.toFixed(2)}</p>
        </div>
        <hr className="my-2 border-dotted border-gray-400" />
        <div className="flex justify-between">
          <p className="font-semibold ">Total Amount:</p>
          <p className="font-semibold mb-2">&#x20B9;{totalAmount.toFixed(2)}</p>
        </div>
      </div>
      <hr className="mb-4 border-gray-400" />
      <div className="flex items-center mb-7">
        <InformationCircleIcon className="h-5 w-5 mr-1 text-black" />
        <p className="text-sm text-gray-600">I hereby acknowledge my agreement to finalize this transaction by proceeding.</p>
      </div>
      <button className="w-full py-2 rounded bg-red-500 text-white hover:bg-red-600">
        Proceed to Pay
      </button>
    </div>
  );
};

export default AddTicketForm;
