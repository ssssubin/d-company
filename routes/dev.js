const devRouter = require("express").Router();
const platformRouter = require("./platform");

devRouter.get("/", (req, res) => {
  res.send("Welcome to dev-team");
});
devRouter.use("/platform", platformRouter);

module.exports = devRouter;
