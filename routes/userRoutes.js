const express = require('express');
const db = require('../firebase');
const User = require('../models/user');

const router = express.Router();

router.get('/:id', async (req, res) => {
  try {
    const userDoc = await db.collection(User.collection()).doc(req.params.id).get();
    if (!userDoc.exists) {
      return res.status(404).send('User not found');
    }
    res.json(userDoc.data());
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const user = new User(req.body.id, req.body.name, req.body.email);
    await db.collection(User.collection()).doc(user.id).set(user);
    res.status(201).send('User created');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
