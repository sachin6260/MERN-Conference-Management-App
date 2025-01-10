const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');
const Conference = require('../models/Conference');  // Import the Conference model

// Register a user for a conference
router.post('/:id/register', async (req, res) => {
  try {
    // Validate conference ID
    const conference = await Conference.findById(req.params.id);
    if (!conference) {
      return res.status(404).json({ message: 'Conference not found' });
    }

    // Ensure required fields are present
    const { userName, email } = req.body;
    if (!userName || !email) {
      return res.status(400).json({ message: 'Name and email are required' });
    }

    // Create new registration
    const registration = new Registration({
      userName,
      email,
      conferenceId: req.params.id,
    });

    // Save registration to the database
    await registration.save();
    res.status(201).json(registration);
  } catch (err) {
    console.error('Error registering user:', err);  // Log the error
    res.status(500).json({ message: err.message });
  }
});

// View all registrations for a specific conference
router.get('/:id/registrations', async (req, res) => {
  try {
    const registrations = await Registration.find({ conferenceId: req.params.id });
    res.status(200).json(registrations);
  } catch (err) {
    console.error('Error fetching registrations:', err);  // Log error
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
