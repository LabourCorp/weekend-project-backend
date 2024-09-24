const express = require('express');
const LabourController = require('../controllers/labourController');
const { validateLabour, handleValidationErrors } = require('../validators/labourValidator');
const router = express.Router();

// POST route to create a new user
router.post('/', validateLabour, handleValidationErrors, LabourController.createLabour);

router.get('/', LabourController.getallLabour);

router.get('/:id', LabourController.getLabourById);

module.exports = router;
