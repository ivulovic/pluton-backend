import Joi from "joi";

const OpenAISchema = {
  urlIdentificator: Joi.object().keys({
    id: Joi.string().required(),
  }),
  prompt: Joi.object({
    messages: Joi.array().required(),
    deviceId: Joi.string().required(),
  }),
};

export default OpenAISchema;