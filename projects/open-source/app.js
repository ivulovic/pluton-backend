import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import openSourceRoutes from "./server/routes/open-source.routes";

const app = express();

const port = process.env.PORT || 5002;

app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api/v1/open-source", openSourceRoutes);

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})  

export const plutonOpenSource = app;