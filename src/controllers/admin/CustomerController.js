const express = require('express');
const router = express.Router();
const customerModel = require('../admin/../../database/schemas/customer')
//add check
//add validationError

createCustomer = async (req, res) => {

  const { name, email, password, active, role, size, vertical, tags } = req.body;

    //TODO:
    const newCustomer = new customerModel({
      name: name.toLowerCase(), ///toLowerCase() will be in the express validation
      email: email,
      password: password,
      active: active,
      role: role,
      size: size,
      vertical: vertical,
      tags: [tags],
    });
    savedCustomer = await newCustomer.save();
    res.send(savedCustomer)
  };

  patchCustomer = async (req, res) => {
  
    //TODO:
  };

  getCustomer = async (req, res) => {
  
    //TODO:   
  };

getAllCustomers = async (req, res) => {
  
    //TODO:
    res.send({message: 'hello from get all customers API'})
  
    
  };

deleteCustomer = async (req, res) => {

    //TODO:  
  };

  module.exports = { createCustomer, patchCustomer, getCustomer, getAllCustomers, deleteCustomer };