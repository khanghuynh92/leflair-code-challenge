const Mongoose = require('mongoose');

const schema = new Mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now,
  },
  action: {
    type: String,
    required: true,
    enum: ['addition', 'subtraction', 'multiplication', 'division'],
  },
  value1: {
    type: Number,
    required: true,
  },
  value2: {
    type: Number,
    required: true,
  },
  result: {
    type: Number,
    required: true,
  },
  userAgent: {
    type: String,
  },
});

module.exports = Mongoose.model('Log', schema);
