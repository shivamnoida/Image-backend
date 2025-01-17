const express = require("express");
const imageRouter = require("./routes/imageRouter.js");
const authRouter = require("./routes/authRouter.js");
const jwt = require("jsonwebtoken");
const cors = require("cors");
require('dotenv').config()

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.use("/api/v1/auth", authRouter);

// app.use((req, res, next) => {
//   let token;
//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer ")
//   ) {
//     token = req.headers.authorization.split(" ")[1];
//     }
//     try {
//         jwt.verify(token, process.env.SECRET_KEY);
//     next();
//   } catch (err) {
//       return res.status(401).json({
//       status: "fail",
//       message: "Login required",
//       });
//   }
// });
    app.use("/api/v1/", imageRouter);

module.exports = app;
