const Mongoose = require('mongoose');

const LogModel = require('./log');

const options = {
  server: {
    auto_reconnect: true,
    socketOptions: {
      keepAlive: 1,
    },
  },
  useMongoClient: true,
};

const connect = () => {
  Mongoose.Promise = Promise;
  Mongoose.set('debug', true);
  if (!Mongoose.connection.readyState) {
    try {
      Mongoose.connect(process.env.MONGO_URL, options);
    } catch (err) {
      Mongoose.createConnection(process.env.MONGO_URL, options);
    }
  }
};

module.exports = {
  connect,
  LogModel,
};
