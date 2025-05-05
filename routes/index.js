const express = require('express');
const router = express.Router();

const Project = require('../models/Project');
const Education = require('../models/Education');
const Skill = require('../models/Skill');

// Home
router.get('/', (req, res) => {
  res.render('home');
});

// Projects
router.get('/projects', async (req, res) => {
  const projects = await Project.find();
  res.render('projects', { projects });
});

// Education
router.get('/education', async (req, res) => {
  const education = await Education.find();
  res.render('education', { education });
});

// Skills
router.get('/skills', async (req, res) => {
  const skills = await Skill.find();
  res.render('skills', { skills });
});

// Contact (already working)
router.get('/contact', (req, res) => {
  res.render('contact');
});

module.exports = router;
