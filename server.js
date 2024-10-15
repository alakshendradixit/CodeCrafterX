// Load required modules
const express = require('express'); // Import Express
const app = express(); // Create an Express app

// Set a port to listen to
const PORT = process.env.PORT || 3000;

// Middleware to serve static files (like HTML, CSS, JS)
app.use(express.static('public')); // 'public' folder for static files

// Define a route for home (GET request for '/')
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html'); // Serve index.html from the 'public' folder
});

// Additional routes can be added here
app.get('/home', function (req, res) {
    res.sendFile(__dirname + '/public/home.html'); // Serve home.html if you have it
});

// Start the server and listen on the specified port
app.listen(PORT, function () {
    console.log('Server is running on http://localhost:' + PORT);
});