const Joi = require('joi');

const roleSchema = Joi.object({
    label: Joi.string().min(1).max(100).required(),
});

module.exports = {
    roleSchema,
};
