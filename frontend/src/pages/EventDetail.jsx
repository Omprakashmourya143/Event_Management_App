import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EventDetail = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/events/${eventId}`);
        setEvent(response.data);
      } catch (err) {
        console.error('Error fetching event details:', err);
      }
    };

    fetchEvent();
  }, [eventId]);

  if (!event) {
    return <p>Loading event details...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
      <p className="mb-4">{event.description}</p>
      <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Price:</strong> ${event.price}</p>
    </div>
  );
};

export default EventDetail;
