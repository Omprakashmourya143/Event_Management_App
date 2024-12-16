import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="border rounded shadow p-4">
      <h3 className="text-xl font-bold">{event.title}</h3>
      <p>{event.description}</p>
      <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
      <p><strong>Location:</strong> {event.location}</p>
    </div>
  );
};

export default EventCard;
