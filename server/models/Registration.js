const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  conferenceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Conference',
    required: true,
  },
});

const Registration = mongoose.model('Registration', registrationSchema);
module.exports = Registration;
