const { check, validationResult } = require('express-validator');

// Validation rules
const validateLabour = [
  check('isSkilled')
    .isBoolean()
    .withMessage('isSkilled must be a boolean value'),

  check('expertise')
    .isArray({ min: 1 })
    .withMessage('Expertise must be a list of strings')
    .custom((value) => value.every(item => typeof item === 'string'))
    .withMessage('Each expertise item must be a string')
];

// Middleware to check for validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    let responseData = {
      status: "failure",
      message: errors.array()[0].msg
    }
    return res.status(400).json(responseData);
  }
  next();
};

module.exports = {
  validateLabour,
  handleValidationErrors
};
