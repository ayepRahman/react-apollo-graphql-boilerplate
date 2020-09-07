/**
 * Generators
 * @see https://plopjs.com/documentation/#setgenerator
 */

const componentGenerator = require('./component');
const containerGenerator = require('./container');
const pagesGenerator = require('./pages');
const apolloGenerator = require('./apollo');

module.exports = plop => {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('container', containerGenerator);
  plop.setGenerator('pages', pagesGenerator);
  plop.setGenerator('apollo', apolloGenerator);
  plop.addHelper('curly', (_, open) => (open ? '{' : '}'));
};
