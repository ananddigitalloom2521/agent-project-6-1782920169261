const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: String,
  role: String
});
const requestSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  start_date: Date,
  end_date: Date,
  status: String
});
const User = mongoose.model('User', userSchema);
const Request = mongoose.model('Request', requestSchema);
module.exports = { User, Request };