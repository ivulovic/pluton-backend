import { Configuration, OpenAIApi } from "openai";
import Config from "../config" ;

const { OPENAI_ORGANIZATION, OPENAI_API_KEY } = Config;

const OpenAIController = {
  prompt: async (req, res) => {
    const configuration = new Configuration({
      organization: OPENAI_ORGANIZATION,
      apiKey: OPENAI_API_KEY,
    });
    const OpenAI = new OpenAIApi(configuration);
   try{
    // const response = await OpenAI.createCompletion({
    //   // model: "gpt-3.5-turbo",
    //   model: "text-davinci-003",
    //   prompt: "Hello world",
    // });
    // const response = await OpenAI.createChatCompletion({
    //   model: "gpt-3.5-turbo",
    //   messages: [
    //     // {"role": "system", "content": "You are a helpful assistant."},
    //     // {"role": "user", "content": "Who won the world series in 2020?"},
    //     {"role": "user", "content": 'Translate the following Serbian text to French: "Ja sam jedan sjajan decko!"'}

    //   ],
    // });
    const response = await OpenAI.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: req.value.body.messages
    });
    res.status(200).send(response.data.choices[0]);
   } catch(e){
    console.log('error', e);
    res.status(200).send({});
   }
  },
};

export default OpenAIController;