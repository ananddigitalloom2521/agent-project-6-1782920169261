const express = require('express');
const router = express.Router();
const requestsRouter = require('./requests');
const usersRouter = require('./users');
router.use('/requests', requestsRouter);
router.use('/users', usersRouter);
module.exports = router;