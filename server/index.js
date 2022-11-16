const express = require("express");
const { Server } = require("socket.io");
var cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const pool = require("./model/user_model")
const login = require("./routes/login");
const session = require("express-session");
require("dotenv").config();
const app = express();
const SignUp = require("./routes/signup");
const server = require("http").createServer(app);

// var corsOptions = {
//   origin: "http://localhost:3001"
// };

const io = new Server(server, {
    cors: {
      origin: "http://localhost:3001",
      credentials: "true",
    },
  });
app.use(cors())

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

app.use(
    session({
      secret: process.env.COOKIE_SECRET,
      credentials: true,
      name: "sid",
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: process.env.ENVIRONMENT === "production" ? "true" : "auto",
        httpOnly: true,
        expires: 1000 * 60 * 60 * 24 * 7,
        sameSite: process.env.ENVIRONMENT === "production" ? "none" : "lax",
      },
    })
  );
  app.use("/auth", login);
  app.use("/signup", SignUp);

// set port, listen for requests
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});