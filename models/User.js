const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: {
    type: 'string',
    require: true,
  },
  email: {
    type: 'string',
    require: true,
    unique: true,
  },
  password: {
    type: 'string',
    require: true,
  },
  date: {
    type: 'Date',
    default: Date.now,
  },
});

module.exports = mongoose.model('User', UserSchema);
