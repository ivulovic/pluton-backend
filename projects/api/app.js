import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import openAIRoutes from "./server/routes/openai.routes";
import streamRoutes from "./server/routes/stream.routes";

const app = express();

const port = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api/ai", openAIRoutes);
app.use("/api/stream", streamRoutes);

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})  

export const plutonApi = app;