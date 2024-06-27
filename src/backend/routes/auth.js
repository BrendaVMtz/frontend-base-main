// backend/routes/auth.js

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

router.post('/register', async (req, res) => {
  try {
    console.log("Received registration request:", req.body);
    const { nombre, email, contrasena } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(contrasena, 10);

    const newUser = new User({ nombre, email, password: hashedPassword });
    await newUser.save();

    console.log("User registered successfully:", newUser);
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
