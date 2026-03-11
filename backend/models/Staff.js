const mongoose = require('mongoose');

const StaffSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true }, 
  image: { type: String }, 
  bio: { type: String },
  socials: {
    instagram: String,
    twitter: String
  }
});

module.exports = mongoose.model('Staff', StaffSchema);