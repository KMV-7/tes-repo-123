const express = require('express');
const router = express.Router();
const customerModel = require('../admin/../../database/schemas/customer')
//add check
//add validationError

createCustomer = async (req, res) => {

    //TODO:
    const newCustomer = new customerModel({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      active: req.body.active,
      role: req.body.role,
      size: req.body.size,
      vertical: req.body.vertical,
      tags: [req.body.tags],
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