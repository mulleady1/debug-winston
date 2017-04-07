var winston = require('winston');
var debug = require('debug');

var LOG_FILE = process.env.LOG_FILE;
var writeToLog = LOG_FILE !== undefined;

if (writeToLog) {
  winston.configure({
    transports: [
      new (winston.transports.File)({ filename: LOG_FILE })
    ]
  });
}

module.exports = function(ns) {
  return function(msg) {
    if (writeToLog) {
      winston.info(ns + ' ' + msg);
    } else {
      debug(ns)(msg);
    }
  };
};
