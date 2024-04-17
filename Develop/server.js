const express = require('express'); // import express
const htmlRoutes = require('./routes/html'); // import html routes
const apiRoutes = require('./routes/api'); // import api routes
const PORT = process.env.PORT || 3001; // set port
const app = express(); // create express app
app.use(express.urlencoded({ extended: false }));   // parse incoming data
app.use(express.json());    // parse incoming data
app.use(express.static("public")); // serve static files
app.use(htmlRoutes); // use html routes
app.use(apiRoutes); // use api routes

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});