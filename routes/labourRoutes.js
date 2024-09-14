const express = require('express');
const LabourController = require('../controllers/labourController');
const { validateLabour, handleValidationErrors } = require('../validators/labourValidator');
const router = express.Router();

// POST route to create a new user
router.post('/labours', validateLabour, handleValidationErrors,LabourController.createLabour);

module.exports = router;
