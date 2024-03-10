import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon } from '@heroicons/react/solid'; 
import { CiCalendarDate, CiLocationOn } from "react-icons/ci";
import { MdOutlineCurrencyRupee } from "react-icons/md";

const categories = [
  { id: 1, name: 'All Events' },
  { id: 2, name: 'Music' },
  { id: 3, name: 'Dance' },
  { id: 4, name: 'Tech' },
  { id: 5, name: 'Theater' },
  { id: 6, name: 'Festival' },
  { id: 7, name: 'Sports' },
  { id: 8, name: 'Parties' }
];

const AllEvents = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [eventsData, setEventsData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let apiUrl = 'https://api.theeventera.live/api/events/active';
        if (selectedCategory.id !== 1) {
          apiUrl = `https://api.theeventera.live/api/events/category/${selectedCategory.name}`;
        }
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        setEventsData(data); // assuming data is an array of events
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [selectedCategory]); // re-run effect when selectedCategory changes

  const handleButtonClick = (eventId) => {
    alert(`Event ${eventId} booked!`);
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="container mx-auto px-6 md:px-12 py-9 bg-white">
      <div className="flex items-center mb-6">
        <ChevronLeftIcon className="h-8 w-8 mr-2 text-gray-500 cursor-pointer" onClick={handleGoBack} />
        <h1 className="text-3xl md:text-4xl font-semibold">All Events</h1>
      </div>
      <div className="flex flex-wrap justify-center md:justify-between items-center mb-6">
        <div className="mb-4 md:mb-0">
          {categories.map(category => (
            <button
              key={category.id}
              className={`mr-4 md:mr-0 md:ml-4 py-2 px-6 rounded-full border ${selectedCategory.id === category.id ? 'bg-red-500 text-white' : 'bg-white text-red-500'}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {eventsData.map(event => (
          <div key={event._id} className="p-1.5 bg-white/100 font-poppins rounded-lg  drop-shadow-xl  transition ">
            <div className="w-80 h-[308px] rounded-sm overflow-hidden">
              <img src={`https://api.theeventera.live/${event.poster_img}`} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="p-2">
              <h2 className="text-2xl font-poppins text-gray-800 font-semibold">
                {event.event_name}
              </h2>
              <ul className="text-base mt-5 text-gray-700">
                <li className="flex gap-1 items-center">
                  <CiCalendarDate size={20} />{" "}
                  <span>{new Date(event.event_date).toLocaleDateString()}</span> |{" "}
                  <span>{event.event_time}</span>
                </li>
                <li className="flex gap-1 items-center mt-1">
                  <CiLocationOn size={20} /> <span>{event.city}</span>
                </li>
              </ul>
              <div className="flex items-center mt-3  justify-between mb-5 mx-3">
                <h3 className="text-lg text-gray-800 flex items-center font-poppins font-medium">
                  <MdOutlineCurrencyRupee /> {event.price}
                </h3>
                <button
                  className="py-3 px-12 text-base font-light text-red-500 hover:bg-red-500 border-[1px] transition border-red-500 hover:text-white rounded-3xl"
                  onClick={() => handleButtonClick(event._id)}
                >
                  Book
                </button>
              </div>
            </div>
          </div>
        ))}
        
      </div>
    
    </div>
  );
};

export default AllEvents;
