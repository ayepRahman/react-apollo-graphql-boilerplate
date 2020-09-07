/**
 * Component Generator
 *
 * @see https://plopjs.com/documentation/#setgenerator
 */

const path = require('path');

const absolutePath = path.join(__dirname, '../../../src/');
const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add an unconnected component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component, container or pages with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
  ],
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  actions: () => {
    const actions = [
      {
        type: 'add',
        path: `${absolutePath}/components/{{properCase name}}/index.tsx`,
        templateFile: `${absolutePath}/generators/component/index.tsx.hbs`,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${absolutePath}/components/{{properCase name}}/__tests__/index.test.tsx`,
        templateFile: `${absolutePath}/generators/component/test.tsx.hbs`,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${absolutePath}/components/{{properCase name}}/interface.ts`,
        templateFile: `${absolutePath}/generators/component/interfaces.ts.hbs`,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${absolutePath}/components/{{properCase name}}/styled.tsx`,
        templateFile: `${absolutePath}/generators/component/styled.tsx.hbs`,
        abortOnFail: true,
      },
    ];

    return actions;
  },
};
