const express = require("express");
const routes = express();
const port = process.env.PORT || 7000;
const bodyParser = require("body-parser");
const cors = require("cors");
routes.use(bodyParser.json());
routes.use(bodyParser.urlencoded({ extended: false }));
routes.use(cors());
const UserHandler = require("./handlers/UserHandler.js");
routes.post("/Users", (req, res) => UserHandler.createUser(req, res));
routes.get("/users/userID", (req, res) =>
  UserHandler.getUsersByUserId(req, res)
);
routes.listen(port, () => {
  console.log("served started at the port");
});
