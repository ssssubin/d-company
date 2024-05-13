const platformRouter = require("express").Router();
platformRouter.get("/", (req, res) => {
  res.send("Welcome to platform-dev team");
});

module.exports = platformRouter;
