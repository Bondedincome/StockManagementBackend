const {body} = require('express-validator');

const createCustomerValidation = [
    body('name').isString().notEmpty(),
    body('email').isEmail().notEmpty(),
    body('phone').optional().isString()];
const updateCustomerValidation = [
    body('name').optional().isString(),
    body('email').optional().isEmail(),
    body('phone').optional().isString()
];
module.exports = {
    createCustomerValidation,
    updateCustomerValidation
};