const User = require("../models/User");

exports.register = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password
    });

    if (!user) {
      return res.status(400).json("Invalid credentials");
    }

    res.json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};