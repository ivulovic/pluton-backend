import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import openAIRoutes from "./server/routes/openai.routes";

const app = express();

const port = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use(cookieParser());


app.use("/api/ai", openAIRoutes);

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})  

export const plutonApi = app;