const express = require('express');
const db = require('../config/firebaseConfig');
const User = require('../models/userModel');
const UserController = require("../controllers/userController");
const { validateUser, handleValidationErrors } = require('../validators/userValidator');

const router = express.Router();

router.get('/', UserController.getAllUsers);

router.get('/:id', UserController.getUserById);

router.post('/', validateUser, handleValidationErrors, UserController.createUser);

module.exports = router;
