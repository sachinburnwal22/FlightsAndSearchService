const express = require("express");
const { PORT } = require("./config/serverConfig");
const { City } = require("./models/index");
const bodyParser = require("body-parser");
const setupAndStartServer = async () => {
  //create the express object
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
    City.create({
      name: "New Delhi",
    });
  });
};

setupAndStartServer();
