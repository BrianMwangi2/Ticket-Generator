// src/pages/EventDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Card, CardContent } from '@mui/material';
import axios from 'axios';

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // Fetch event details from the backend
    axios.get(`/api/events/${id}`)
      .then((response) => {
        setEvent(response.data);
      })
      .catch((error) => {
        console.error('Error fetching event details:', error);
      });
  }, [id]);

  if (!event) {
    return <Typography>Loading event details...</Typography>;
  }

  return (
    <Card style={{ margin: '20px', padding: '20px' }}>
      <CardContent>
        <Typography variant="h4" gutterBottom>{event.name}</Typography>
        <Typography variant="h6">Date: {event.date}</Typography>
        <Typography variant="h6">Venue: {event.venue}</Typography>
        <Typography variant="body1">{event.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default EventDetails;
