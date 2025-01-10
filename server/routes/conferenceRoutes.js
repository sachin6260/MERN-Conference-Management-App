const express = require('express');
const router = express.Router();
const Conference = require('../models/Conference');

router.post("/", async (req, res) => {
  const { name, description } = req.body;

  // Check if required fields are provided
  if (!name || !description) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newConference = new Conference({ name, description });
    await newConference.save();
    res.status(201).json(newConference); // Send back the created conference
  } catch (err) {
    console.error("Error saving conference:", err);
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
});


// Fetch all conferences
router.get('/', async (req, res) => {
  try {
    const conferences = await Conference.find();
    res.status(200).json(conferences);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch conferences. Please try again." });
  }
});

module.exports = router;


// Update a conference
router.put('/:id', async (req, res) => {
  try {
    const updatedConference = await Conference.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedConference);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a conference
router.delete('/:id', async (req, res) => {
  try {
    await Conference.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Conference deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
