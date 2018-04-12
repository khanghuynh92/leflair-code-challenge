const { OK, BAD_REQUEST } = require('http-status-codes');

const { errorValidation } = require('./../utils/httpError');
const { logging } = require('../utils/log');
const { ADDITION, SUBTRACTION, MULTIPLICATION, DIVISION } = require('./constants');

const validate = (req, res, next) => {
  req.checkBody('value1', 'Value 1 is required').notEmpty();
  req.checkBody('value2', 'Value 2 is required').notEmpty();

  if (req.validationErrors()) {
    return res.send(BAD_REQUEST, errorValidation(req.validationErrors()));
  }

  req.body.value1 = +req.body.value1;
  req.body.value2 = +req.body.value2;

  return next();
};


const add = (req, res) => {
  const { value1, value2 } = req.body;
  const result = value1 + value2;

  res.send({
    code: OK,
    result,
  });

  logging({
    value1,
    value2,
    result,
    action: ADDITION,
    userAgent: req.headers['user-agent'],
  });
};

const minus = (req, res) => {
  const { value1, value2 } = req.body;
  const result = value1 - value2;

  res.send({
    code: OK,
    result,
  });

  logging({
    value1,
    value2,
    result,
    action: SUBTRACTION,
    userAgent: req.headers['user-agent'],
  });
};

const multiply = (req, res) => {
  const { value1, value2 } = req.body;
  const result = value1 * value2;

  res.send({
    code: OK,
    result,
  });

  logging({
    value1,
    value2,
    result,
    action: MULTIPLICATION,
    userAgent: req.headers['user-agent'],
  });
};

const divide = (req, res) => {
  const { value1, value2 } = req.body;
  const result = value1 / value2;

  res.send({
    code: OK,
    result,
  });

  logging({
    value1,
    value2,
    result,
    action: DIVISION,
    userAgent: req.headers['user-agent'],
  });
};

module.exports = {
  validate,
  add,
  minus,
  multiply,
  divide,
};
