// server/app.js

const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Example API route
app.get('/api/events', (req, res) => {
  const events = [
    { id: 1, name: 'Concert 2024', date: '2024-10-05', venue: 'City Arena' },
    { id: 2, name: 'Tech Conference', date: '2024-11-15', venue: 'Tech Hall' },
  ];
  res.json(events);
});

// Listen on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
