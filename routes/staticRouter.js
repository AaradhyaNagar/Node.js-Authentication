const express = require("express");
const homeRoute = express.Router();
const appRoute = express.Router();

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

appRoute.get("/", (req, res) => {
  return res.render("application-page");
});

module.exports = { homeRoute, appRoute };
