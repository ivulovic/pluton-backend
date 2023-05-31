import router from "express-promise-router";

import OpenAIController from "../controllers/openai.controller";
import RouteHelper from "../helpers/route.helper";
import openAIMiddleware from "../middlewares/openai.middleware";
import openaiSchema from "../schemas/openai.schema";

const { validateBody } = RouteHelper;

const r = router();

r.use(openAIMiddleware);

r.route("/")
  .post([validateBody(openaiSchema.prompt)], OpenAIController.prompt);

export default r;
