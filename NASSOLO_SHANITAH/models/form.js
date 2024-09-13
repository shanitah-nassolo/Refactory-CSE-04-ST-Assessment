
const mongoose = require('mongoose');
const passengerSchema = new mongoose.Schema({
    fullName: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      required: true
    },
    dateOfBirth: {
      type: Date,
      required: true
    },
    nationality: {
      type: String,
      required: true
    }
  });
  
  const contactSchema = new mongoose.Schema({
    phoneNumber: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true
    },
    poBox: {
      type: String
    },
    emergencyPhone: {
      type: String,
      required: true
    }
  });
  
  const flightSchema = new mongoose.Schema({
    passportNumber: {
      type: String,
      required: true
    },
    visaDocument: {
      type: String,
      required: true
    },
    departureCity: {
      type: String,
      required: true
    },
    destinationCity: {
      type: String,
      required: true
    }
  });
  
  const formSchema = new mongoose.Schema({
    passenger: passengerSchema,
    contact: contactSchema,
    flight: flightSchema
  });
  
  const Form = mongoose.model('Form', formSchema);
  