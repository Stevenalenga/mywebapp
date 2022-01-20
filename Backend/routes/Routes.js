import App from "./App";

const express = require("express");

const router = express.Router();
const signUp = require("../SignUp/models/SignUpModel");

router.post("/signup", (request, response) => {
  const signUpUser = new signUp({
    fullName: request.body.fullName,
    userName: request.body.userName,
    email: request.body.email,
    password: request.body.password,
  });
  signUpUser
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});

router.get("/home", () => {
  return { App };
});

module.exports = router;
