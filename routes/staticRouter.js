const express = require("express");
const { restrictToLoggedInUserOnly } = require("../middlewares/auth")
const homeRoute = express.Router();

homeRoute.get("/", (req, res) => {
  console.log("Hemlo from home page");
  return res.render("home-page");
});

homeRoute.get("/login", (req, res) => {
  return res.render("logIn-page");
});

homeRoute.get("/register", (req, res) => {
  return res.render("register-page");
});

homeRoute.get("/app", restrictToLoggedInUserOnly, (req, res) => {
  return res.render("application-page");
});

module.exports = homeRoute;
