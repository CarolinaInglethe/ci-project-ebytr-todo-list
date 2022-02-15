const Joi = require('joi');

const validateTask = Joi.object({
  name: Joi.string().required().messages({
    required: '"name" is required',
  }),
  status: Joi.string().required().messages({
    required: '"status" is required',
  }),
});

module.exports = {
  validateTask,
};
