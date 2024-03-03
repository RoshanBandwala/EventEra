import React, { useState } from 'react';
import { ChevronLeftIcon, CalendarIcon, LocationMarkerIcon, CheckCircleIcon } from '@heroicons/react/solid';
import ticketImage from '../Ticket UI-02.jpg';

const SimilarEventsSection = () => {
    const eventsData = [
        { id: 1, name: 'Event 1', date: '3rd Feb', time: '10:00 AM to 1:00 PM', location: 'Venue 1', price: 'Rs.2000', image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D' },
        { id: 2, name: 'Event 2', date: '4th Feb', time: '11:00 AM to 2:00 PM', location: 'Venue 2', price: 'Rs.2000', image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D' },
        { id: 3, name: 'Event 3', date: '5th Feb', time: '12:00 PM to 3:00 PM', location: 'Venue 3', price: 'Rs.2000', image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D' },
        { id: 4, name: 'Event 4', date: '6th Feb', time: '1:00 PM to 4:00 PM', location: 'Venue 4', price: 'Rs.2000', image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D' }
        // Add more events here
    ];
    const [clickedButtonId, setClickedButtonId] = useState(null);

    const handleButtonClick = (id) => {
        // handle the click event on the "Book" button.
        setClickedButtonId(id);
        // Perform other actions as needed
        alert('Event booked!');
    };

    return (
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
                            className={`px-4 py-2 bg-white 
                            text-red-500 rounded-full 
                            border border-red-500 hover:bg-red-600 hover:text-white ml-auto bg-white border border-red-500 text-red-500`}
                            onClick={() => handleButtonClick(event.id)}
                        >
                            Book
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

const DownloadTicketPage = () => {
    // Handle the print ticket button click event
    const handlePrintButtonClick = () => {
        // Implement your logic here to print the ticket
        alert('Print ticket');
    };

    // Handle the download ticket button click event
    const handleDownloadButtonClick = () => {
        // Implement your logic here to download the ticket
        alert('Download ticket');
    };

    return (
        <div className="container mx-auto px-6 md:px-12 py-9 bg-white overflow-auto">
            {/* Back Button */}
            <div className="flex items-center mb-2 ">
                <ChevronLeftIcon className="h-8 w-8  text-gray-500 cursor-pointer" />
                <h1 className="text-2xl md:text-2xl font-semibold">Back</h1>
            </div>

            {/* Payment Successful Message */}
            <div className="mb-4 text-center flex items-center justify-center">
                <CheckCircleIcon className="h-12 w-12 text-green-500" />
                <p className="text-green-600 text-2xl font-semibold mt-2 ml-2">Payment Successful!</p>
            </div>

            <p className="text-2xl font-semibold">Download your E-Ticket</p>

            {/* Download E-ticket Section */}
            <div className="flex justify-center">
    {/* Ticket Image */}
    <div className="flex justify-center">
        <img src={ticketImage} alt="Ticket" className="w-3/3 md:w-1/2 lg:w-2/3 rounded-lg" />
    </div>
</div>




            {/* Download Buttons */}
            <div className="flex justify-center mb-3">
                <button className="px-4 py-2 bg-white 
                text-red-500 rounded-full 
                border border-red-500 hover:bg-red-600 hover:text-white mr-4" onClick={handlePrintButtonClick}>Print Ticket</button>
                <button className="px-4 
                border border-red-500 py-2 bg-white text-red-500 rounded-full hover:bg-red-600 hover:text-white" onClick={handleDownloadButtonClick}>Download Ticket</button>
            </div>

            {/* Similar Events Section */}
            <div className="mb-6 ml-4">
                <h2 className="text-2xl font-semibold">Similar Events</h2>
                <SimilarEventsSection />
            </div>
        </div>
    );
};

export default DownloadTicketPage;
