import Joi from "joi";

const OpenAISchema = {
  urlIdentificator: Joi.object().keys({
    id: Joi.string().required(),
  }),
  prompt: Joi.object({
    messages: Joi.array().required(),
  }),
};

export default OpenAISchema;