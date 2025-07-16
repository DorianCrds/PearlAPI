const Joi = require('joi');

const createUserSchema = Joi.object({
    firstname: Joi.string().min(2).max(100).required(),
    lastname: Joi.string().min(2).max(100).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    roleId: Joi.number().valid(1, 2, 3).optional()
});

const updateUserSchema = Joi.object({
    firstname: Joi.string().min(2).max(100).optional(),
    lastname: Joi.string().min(2).max(100).optional(),
    email: Joi.string().email().optional(),
    password: Joi.string().min(6).optional(),
    roleId: Joi.number().valid(1, 2, 3).optional()
});


module.exports = { createUserSchema, updateUserSchema };
