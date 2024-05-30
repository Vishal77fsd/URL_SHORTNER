import express from "express";
import postRouter from "./routes/url.routes.js";
import bodyParser from "body-parser";
import connectDB from "./db/connectdb.js";
import redirecturlRouter from "./routes/redirect.routes.js";
import cors from "cors";

const app = express();

connectDB();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

// express router
app.use("/api/url", postRouter);
app.use("/api/shorturl", redirecturlRouter);

app.listen(3000, () => {
  console.log("listening on http://localhost:3000");
});
