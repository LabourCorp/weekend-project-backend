const { check, validationResult } = require('express-validator');

// Validation rules
const validateUser = [
    check('firstName')
        .notEmpty()
        .withMessage('First name is required')
        .isLength({ min: 3 })
        .withMessage('First name must be at least 3 characters long'),

    check('lastName')
        .notEmpty()
        .withMessage('Last name is required')
        .isLength({ min: 3 })
        .withMessage('Last name must be at least 3 characters long'),

    check('email')
        .notEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Please provide a valid email address'),

    check('role')
        .notEmpty()
        .withMessage('Email is required')
];

// Middleware to check for validation errors
const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            status: "failure",
            message: errors.array()[0].msg
        });
    }
    next();
};

module.exports = {
    validateUser,
    handleValidationErrors
};