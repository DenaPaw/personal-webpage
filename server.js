const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const ContactMessage = require('./models/ContactMessage');
require('dotenv').config();
require('./config/db');


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Routes placeholder
app.get('/', (req, res) => {
    res.render('home');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

app.get('/projects', (req, res) => {
    res.render('projects');
});
app.get('/education', (req, res) => {
    res.render('education');
});
app.get('/skills', (req, res) => {
    res.render('skills');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

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