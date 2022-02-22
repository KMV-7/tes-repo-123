const express = require('express');
const router = express.Router();
const customerModel = require('../admin/../../database/schemas/customer')
//add check
//add validationError

createCustomer = async (req, res) => {

  const { name, email, password, active, role, size, vertical, tags } = req.body;

    //TODO:
    const newCustomer = new customerModel({
      name: name,
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


  getAllCustomers = async (req, res) => {
    allCustomers = await customerModel.find()
    res.json(allCustomers)
 };


  module.exports = { createCustomer, getAllCustomers };