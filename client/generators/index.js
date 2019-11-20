/**
 * Generators
 * @see https://plopjs.com/documentation/#setgenerator
 */

import componentGenerator from './component/index.js';
import containerGenerator from './container/index.js';

const generators = plop => {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('container', containerGenerator);
  plop.addHelper('curly', (_, open) => (open ? '{' : '}'));
};

export default generators;
