const express = require('express');
const router = express.Router();
const usermodel = require('../models/users');
router.get('/', async (req, res) => {
  try {
    const users = await usermodel.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching users' });
  }
});
module.exports = router;