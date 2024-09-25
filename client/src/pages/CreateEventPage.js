// src/pages/CreateEventPage.js
import React from 'react';
import EventForm from '../components/EventForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateEventPage = () => {
  const navigate = useNavigate();

  const handleCreateEvent = (newEvent) => {
    // Send a POST request to the backend to create a new event
    axios.post('/api/events', newEvent)
      .then((response) => {
        console.log('Event created:', response.data);
        navigate('/');  // Redirect to homepage after event creation
      })
      .catch((error) => {
        console.error('Error creating event:', error);
      });
  };

  return (
    <div>
      <EventForm onSubmit={handleCreateEvent} />
    </div>
  );
};

export default CreateEventPage;
