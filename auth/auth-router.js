const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// middleware
const mw = require("../middleware/validation.js");

// Auth Model
const Auth = require("../auth/auth-model.js");

router.post("/register", mw.validateBody, async (req, res) => {
  // implement registration
  const newUser = req.body;

  try {
    const hash = bcrypt.hashSync(newUser.password);
    newUser.password = hash;
    const user = await Auth.insertUser(newUser);

    console.log("USER", user);
    if (user) {
      res.status(201).json(user);
    } else {
      res.status(400).json({ message: "Could not complete registration" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server encountered error while trying to register user"
    });
  }
});

router.post("/login", (req, res) => {
  // implement login
});

function generateToken(user) {
  const payload = {
    username: user.username
  };
  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, process.env.JWT_SECRET, options);
}

module.exports = router;
