const commons = require('./commons');

const leaked = (arg) => {
  if (commons[arg]) {
    return true;
  }
  return false;
};

module.exports = leaked;
