// first we need to set up the server boilerplate
// imports (what do we need for this file?)
// middleware (same as most projects)
  // app.use(express.json())
// html routes (how to serve the two html files?)
// server listening (port and callback function)

// we need to set up the crud operations
  // writeToFile, readFromFile, deleteFromFile
// using fs


// then we need to set up the routes (from instructions)
// implement the crud operations based on the request.

const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT ?? 3001;

app.use(express.static('public'));
app.use(express.json());

// API ROUTES
app.get('/api/notes', (req, res) => {

});

app.post('/api/notes', (req, res) => {

});

// HTML SERVED FROM VIEWS AS ROUTES
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/notes.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))