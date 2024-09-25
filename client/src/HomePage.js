import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import axios from 'axios';

const HomePage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from the backend
    axios.get('/api/events')
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Upcoming Events
      </Typography>
      <Grid container spacing={3}>
        {events.map((event) => (
          <Grid item xs={12} sm={6} md={4} key={event.id}>
            <Link to={`/event/${event.id}`} style={{ textDecoration: 'none' }}>
              <Card>
                <CardContent>
                  <Typography variant="h5">{event.name}</Typography>
                  <Typography>{event.date}</Typography>
                  <Typography>{event.venue}</Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default HomePage;
