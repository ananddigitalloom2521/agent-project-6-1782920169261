const express = require('express');
const router = express.Router();
const requestModel = require('../models/requests');
router.get('/', async (req, res) => {
  try {
    const requests = await requestModel.find().populate('user_id');
    res.json(requests);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching requests' });
  }
});
router.post('/', async (req, res) => {
  try {
    const request = new requestModel(req.body);
    await request.save();
    res.json(request);
  } catch (err) {
    res.status(500).json({ message: 'Error creating request' });
  }
});
module.exports = router;