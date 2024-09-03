const express = require('express');
const db = require('../firebase');
const Customer = require('../models/customer');

const router = express.Router();

router.get('/:id', async (req, res) => {
  try {
    const customerDoc = await db.collection(Customer.collection()).doc(req.params.id).get();
    if (!customerDoc.exists) {
      return res.status(404).send('Customer not found');
    }
    res.json(customerDoc.data());
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const customer = new Customer(req.body.id, req.body.name, req.body.email, req.body.contactNumber);
    await db.collection(Customer.collection()).doc(customer.id).set(customer);
    res.status(201).send('Customer created');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
