const authModel = require("../models/auth");

const signUp = async (req, res) => {
  const newUser = new authModel({
    fullName: req.body.fullName,
    email: req.body.email,
    password: req.body.password,
  });

  if (!req.body.fullName) {
    res.status(400).json({ message: "full name missing" });
    return;
  } else if (!req.body.email) {
    res.status(400).json({ message: "Email is missing" });
    return;
  } else if (!req.body.password) {
    res.status(400).json({ message: "password is missing" });
    return;
  }

  try {
    const userCreated = await newUser.save();
  } catch (error) {
    res.status(401).json({ error });
    return;
  }

  res.status(201).json({ message: "signed up successfully" });
};

const signIn = async (req, res) => {
  const user = await authModel.findOne({
    email: req.body.email,
  });

  if (!user) {
    res.status(401).json({ message: "email not found" });
    return;
  } else if (user.password != req.body.password) {
    res.status(401).json({ message: "Incorrect password" });
    return;
  }

  res.status(201).json({ message: "successfully logged in" });
};

module.exports = { signIn, signUp };
