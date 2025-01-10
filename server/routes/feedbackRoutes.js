const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

// Submit feedback for a conference
router.post('/:id/feedback', async (req, res) => {
  try {
    console.log('Request Body:', req.body);
    console.log('Conference ID:', req.params.id);

    const feedback = new Feedback({
      ...req.body,
      conferenceId: req.params.id,
    });

    await feedback.save();
    res.status(201).json(feedback);
  } catch (err) {
    console.error('Error saving feedback:', err.message);
    res.status(500).json({ message: 'Failed to save feedback', error: err.message });
  }
});


// Fetch all feedback for a specific conference
router.get('/:id/feedback', async (req, res) => {
  try {
    const feedback = await Feedback.find({ conferenceId: req.params.id });
    res.status(200).json(feedback);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
