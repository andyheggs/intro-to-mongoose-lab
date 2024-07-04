/*

Create a **terminal-based** CRM application that will have full CRUD functionality on a single model: **Customer**

*Define the model:
1. Create a new model file and build the customer schema.

*/

//import mongoose into models/Customer.js file:

const mongoose = require('mongoose');

/*
2. the customer model will have the following fields:

name: String
age: Number

*/

//define the schema
const customerSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  age: {
    type: Number,
    required: true
  }
  
});

//  compile our CustomerSchema into a model:
const Customer = mongoose.model('Customer', customerSchema);

//export Customer model, to access its various model methods throughout our application:
module.exports = Customer;