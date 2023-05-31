import Secret from './secret';

const Config = {
  OPENAI_API_KEY: process.env.OPENAI_API_KEY === "production" ? process.env.OPENAI_API_KEY : Secret.OPENAI_API_KEY,
  OPENAI_ORGANIZATION: process.env.OPENAI_ORGANIZATION === "production" ? process.env.OPENAI_ORGANIZATION : Secret.OPENAI_ORGANIZATION,
};

export default Config;