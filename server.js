const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');
const ContactMessage = require('./models/ContactMessage');

// Load .env config
dotenv.config();

// Connect to MongoDB
require('./config/db');

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Use external routes
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

// Contact form submission (keep here)
app.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    await ContactMessage.create({ name, email, message });
    res.send('Thanks for your message!');
  } catch (err) {
    console.error(err);
    res.status(500).send('Something went wrong.');
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
