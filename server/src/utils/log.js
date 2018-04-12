const { LogModel } = require('../models');

const logging = ({ value1, value2, action, result, userAgent }) => {
  const log = new LogModel({
    action,
    value1,
    value2,
    result,
    userAgent,
  });

  log.save();
};

module.exports = {
  logging,
};
