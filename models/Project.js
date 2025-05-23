const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  technologies: String,
  github: String,
  demo: String,
  image: String
});

module.exports = mongoose.model('Project', projectSchema);
