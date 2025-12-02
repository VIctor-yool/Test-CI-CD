import Joi from "joi";

export const dogSchema = Joi.object({
  name: Joi.string().min(1).required(),
  breed: Joi.string().min(1).required(),
  age: Joi.number().integer().min(0).required(),
});
