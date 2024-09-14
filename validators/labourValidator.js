const { check, validationResult } = require('express-validator');

// Validation rules
const validateLabour = [
  check('name')
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 3 })
    .withMessage('Name must be at least 3 characters long'),
  
  check('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please provide a valid email address'),

  check('password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long')
];

// Middleware to check for validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    let responseData = {
      status:"failure",
      message:errors.array()[0].msg 
    }
    return res.status(400).json(responseData);
  }
  next();
};

module.exports = {
  validateLabour,
  handleValidationErrors
};
