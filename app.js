//const username = prompt('What is your name? ');

//console.log(`Your name is ${username}`);

/*
Make the DB connection

Initialize Mongoose and MongoDB Connection:

1. Set up Mongoose in your application.

2. Ensure you have a .env file for your MongoDB URI and a .gitignore file to avoid pushing sensitive data to GitHub.
*/
//import Customer model:
const Customer = require('./models/Customer.js');

// Load variables .env file into process.env
const dotenv = require('dotenv');

dotenv.config();

// Mongoose library for MongoDB
const mongoose = require('mongoose');

// Library for user input
const prompt = require('prompt-sync')();

//access MongoDB URI stored in the .env file.
const connect = async () => {

  await mongoose.connect(process.env.MONGODB_URI);

  console.log('Database connected');

  await runQueries ();

  await mongoose.disconnect ();

  console.log('database disconnected');

  process.exit();

};  

const runQueries = async () => {

  console.log('Queries running');

  //  Create a customer
  await createCustomer();
};


//build func to handle Customer model:
const createCustomer = async () => {

  const name = prompt('Customer name: ');

  const age = prompt('Customer age: ');
  
  const customerData = {

    name: name,

    age: age,
    
  };

  try {

    const customer = await Customer.create(customerData);

    console.log('Customer created:', customer);

  } catch (error) {

    console.error('Error creating customer:', error);
  }
};

connect();
