const express = require("express");
const app = express();
const devRouter = require("./routes/dev");
const {
  checkIdentification,
  checkLuggage,
  checkRegistered,
} = require("./middlewares");

// 이거는 왜 작성해주는가?
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to d-company");
});

app.use(checkRegistered);
app.use(checkIdentification);
app.use(checkLuggage);
app.use("/dev-team", devRouter);

app.use("/", (err, req, res, next) => {
  if (err) {
    res.json({ message: `죄송하지만 입장하실 수 없습니다. 사유는 ${err}` });
  }
  next();
});
app.listen(5000);
