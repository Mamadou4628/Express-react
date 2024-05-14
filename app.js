const express = require('express');
const app = express();
const path = require('path');

// Serve static assets
app.use(express.static(path.join(__dirname, '../dist')));

// Test route
app.get('/test', (req, res) => {
  res.send('Server is operational');
});

// Serve React build as root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

// Listen on port 3000
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
