/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

const fs = require('fs');
const path = require('path');

const components = fs.readdirSync(path.join(path.join(__dirname, '../../components/')));
const containers = fs.readdirSync(path.join(path.join(__dirname, '../../containers/')));
const pages = fs.readdirSync(path.join(path.join(__dirname, '../../pages/')));
const folders = [...components, ...containers, ...pages];

const componentExists = comp => {
  return folders.indexOf(comp) >= 0;
};

module.exports = componentExists;
