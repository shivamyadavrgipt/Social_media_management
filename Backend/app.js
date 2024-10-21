import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "./utils/cron.js";

const app = express();

app.use(
  cors({
    origin: '*', // Allows requests from any origin
  })
);

app.use(express.json({ limit: "1000kb" }));
app.use(express.urlencoded({ extended: true, limit: "1000kb" }));

app.use(express.static("public"));

app.use(cookieParser());

import loginroutes from "./routes/user.route.js";
import postroutes from "./routes/post.route.js";

app.use('/api/users', loginroutes);
app.use('/api/posts', postroutes);

export { app };
