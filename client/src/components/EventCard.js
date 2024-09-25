// src/components/EventCard.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const EventCard = ({ event }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{event.name}</Typography>
        <Typography>{event.date}</Typography>
        <Typography>{event.venue}</Typography>
      </CardContent>
    </Card>
  );
};

export default EventCard;
