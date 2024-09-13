
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose'); 

// Create a new form
router.post('/create', async (req, res) => {
  try {
    const form = new Form({
      passenger: {
        fullName: req.body.passenger.fullName,
        gender: req.body.passenger.gender,
        dateOfBirth: req.body.passenger.dateOfBirth,
        nationality: req.body.passenger.nationality
      },
      contact: {
        phoneNumber: req.body.contact.phoneNumber,
        emailAddress: req.body.contact.emailAddress,
        poBox: req.body.contact.poBox,
        emergencyPhone: req.body.contact.emergencyPhone
      },
      flight: {
        passportNumber: req.body.flight.passportNumber,
        visaDocument: req.body.flight.visaDocument,
        departureCity: req.body.flight.departureCity,
        destinationCity: req.body.flight.destinationCity
      }
    });
    await form.save();
    res.send('Form created successfully!');
  } catch (err) {
    res.status(500).send('Error creating form');
  }
});

// Get all forms
router.get('/all', async (req, res) => {
  try {
    const forms = await Form.find();
    res.json(forms);
  } catch (err) {
    res.status(500).send('Error getting forms');
  }
});

// Get a form by ID
router.get('/:id', async (req, res) => {
  try {
    const form = await Form.findById((req.params.id));
    if (!form) {
      res.status(404).send('Form not found');
    } else {
      res.json(form);
    }
  } catch (err) {
    res.status(500).send('Error getting form');
  }
});


router.patch('/:id', async (req, res) => {
  try {
    const form = await Form.findByIdAndUpdate((req.params.id), req.body, { new: true });
    if (!form) {
      res.status(404).send('Form not found');
    } else {
      res.json(form);
    }
  } catch (err) {
    res.status(500).send('Error updating form');
  }
});


router.delete('/:id', async (req, res) => {
  try {
    await Form.findByIdAndDelete((req.params.id));
    res.send('Form deleted successfully!');
  } catch (err) {
    res.status(500).send('Error deleting form');
  }
});

module.exports = router;
