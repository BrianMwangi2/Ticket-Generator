// src/components/EventForm.js
import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const EventForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [venue, setVenue] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = { name, date, venue, description };
    onSubmit(newEvent);  // Pass the new event data to the parent
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom>Create a New Event</Typography>
      <TextField
        fullWidth
        label="Event Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <TextField
        fullWidth
        label="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
        sx={{ mt: 2 }}
      />
      <TextField
        fullWidth
        label="Venue"
        value={venue}
        onChange={(e) => setVenue(e.target.value)}
        required
        sx={{ mt: 2 }}
      />
      <TextField
        fullWidth
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        sx={{ mt: 2 }}
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
        Create Event
      </Button>
    </Box>
  );
};

export default EventForm;
