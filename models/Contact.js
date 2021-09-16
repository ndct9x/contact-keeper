const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  name: {
    type: 'string',
    require: true,
  },
  email: {
    type: 'string',
    require: true,
  },
  phone: {
    type: 'string',
  },
  type: {
    type: 'string',
    default: 'personal',
  },
  date: {
    type: 'Date',
    default: Date.now,
  },
});

module.exports = mongoose.model('Contact', ContactSchema);
