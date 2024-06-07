const express = require("express");
const path = require("path");
const app = express();
const connectMongoDB = require("./connection");
const cookieParser = require("cookie-parser");
const PORT = 8001;
const { restrictToLoggedInUserOnly } = require("./middlewares/auth");
const homeRoute = require("./routes/staticRouter");
const { registerRoute, logInRoute } = require("./routes/user");

connectMongoDB("mongodb://localhost:27017/userAuthentication").then(() =>
  console.log("MongoDB connected")
);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.static("stylesheets"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", homeRoute);

app.use("/login", logInRoute);
app.use("/register", registerRoute);

app.listen(PORT, () => console.log("Hemlo from server at PORT :", PORT));
