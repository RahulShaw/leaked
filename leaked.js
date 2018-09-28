const commons = require('./commons');

const leaked = (arg) => {
  if (commons.indexOf(arg) === -1) {
    return false;
  }
  return true;
};

module.exports = leaked;
