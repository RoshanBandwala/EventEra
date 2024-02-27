import React, { useState } from 'react';
import { ChevronLeftIcon, CalendarIcon, LocationMarkerIcon } from '@heroicons/react/solid'; // Importing necessary icons

const categories = [
  { id: 1, name: 'All Events' },
  { id: 2, name: 'Music' },
  { id: 3, name: 'Dance' },
  { id: 4, name: 'Tech' },
  { id: 5, name: 'Theater' },
  { id: 6, name: 'Festival' },
  { id: 7, name: 'Sports' }
];

const eventsData = [
  { id: 1, name: 'Event 1', category: 'Music', date: '3rd Feb', time: '10:00 AM to 1:00 PM', location: 'Venue 1', price: 'Rs.2000', image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D' },
  { id: 2, name: 'Event 1', category: 'Music', date: '3rd Feb', time: '10:00 AM to 1:00 PM', location: 'Venue 1', price: 'Rs.2000', image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D' }, { id: 3, name: 'Event 1', category: 'Music', date: '3rd Feb', time: '10:00 AM to 1:00 PM', location: 'Venue 1', price: 'Rs.2000', image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D' }, { id: 4, name: 'Event 1', category: 'Music', date: '3rd Feb', time: '10:00 AM to 1:00 PM', location: 'Venue 1', price: 'Rs.2000', image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D' }, { id: 5, name: 'Event 1', category: 'Music', date: '3rd Feb', time: '10:00 AM to 1:00 PM', location: 'Venue 1', price: 'Rs.2000', image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D' }, { id: 6, name: 'Event 1', category: 'Music', date: '3rd Feb', time: '10:00 AM to 1:00 PM', location: 'Venue 1', price: 'Rs.2000', image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D' }, { id: 7, name: 'Event 1', category: 'Music', date: '3rd Feb', time: '10:00 AM to 1:00 PM', location: 'Venue 1', price: 'Rs.2000', image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D' },
  // Add more events here
];

const AllEvents = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [clickedButtonId, setClickedButtonId] = useState(null);

  const handleButtonClick = (id) => {
    // handle the click event on the "Book" button.
    setClickedButtonId(id);
    // Perform other actions as needed
    alert('Event booked!');
  };

  const handleGoBack = () => {
    // handle the click event on the "Go back" button.
    // Implement your go back logic here
    window.history.back();
  };

  return (
    <div className="container mx-auto px-6 md:px-12 py-9 bg-white">
      <div className="flex items-center mb-6">
        <ChevronLeftIcon className="h-8 w-8 mr-2 text-gray-500 cursor-pointer" onClick={handleGoBack} /> {/* Chevron left icon */}
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {eventsData.map(event => (
          <div key={event.id} className="bg-white p-5 rounded-lg shadow-md" style={{ width: '280px' }}>
            <img src={event.image} alt={event.name} className="w-full h-60 rounded-lg mb-4" />
            <h3 className="text-lg md:text-xl font-semibold mb-2">{event.name}</h3>
            <div className="flex items-center text-gray-600 mb-1">
              <CalendarIcon className="h-5 w-5 mr-1" />
              <p>{event.date} | {event.time}</p>
            </div>
            <div className="flex items-center text-gray-600 mb-1">
              <LocationMarkerIcon className="h-5 w-5 mr-1" />
              <p>{event.location}</p>
            </div>
            <div className="flex items-center text-gray-600 font-semibold mb-1">
              <p>{event.price}</p>
              <button
                className={`px-4 py-2 rounded-full ml-auto ${clickedButtonId === event.id ? 'bg-red-500 text-white' : 'bg-white border border-red-500 text-red-500'}`}
                onClick={() => handleButtonClick(event.id)}
              >
                Book
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllEvents;
