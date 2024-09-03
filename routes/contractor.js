const express = require('express');
const db = require('../firebase');
const Contractor = require('../models/contractor');

const router = express.Router();

router.get('/:id', async (req, res) => {
  try {
    const contractorDoc = await db.collection(Contractor.collection()).doc(req.params.id).get();
    if (!contractorDoc.exists) {
      return res.status(404).send('Contractor not found');
    }
    res.json(contractorDoc.data());
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const contractor = new Contractor(req.body.id, req.body.name, req.body.email, req.body.specialization);
    await db.collection(Contractor.collection()).doc(contractor.id).set(contractor);
    res.status(201).send('Contractor created');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
