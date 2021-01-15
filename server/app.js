const express = require("express");
const bodyParser = require("body-parser");
const postRouter = require("./modules/post/post.router");
const userRouter = require("./modules/user/user.router");
const userRouter = require("./modules/motelDetail/motelDetail.router");
const mongoose = require("mongoose");
const config = require("./config");
const cors = require("cors");

mongoose.connect(config.mongoConnectionString);
const PORT = process.env.PORT || 6969;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/", express.static("../client"));
app.use("/api/post", postRouter);
app.use("/api/user", userRouter);
app.use("/api/motelDetail", userRouter);

app.listen(PORT, function () {
  console.log(`Server is listening on ${PORT}`);
});
