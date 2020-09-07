/**
 * Pages Generator
 *
 * @see https://plopjs.com/documentation/#setgenerator
 */

const path = require('path');

const absolutePath = path.join(__dirname, '../../../src/');
const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add an pages for view',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Home',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component, container or pages with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'confirm',
      name: 'wantExactPath',
      default: true,
      message: 'Do you want to use exact path for route?',
    },
    {
      type: 'confirm',
      name: 'wantPrivateRoute',
      default: true,
      message: 'Do you want to use PrivateRoute for protected route?',
    },
  ],
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  actions: data => {
    const actions = [
      {
        type: 'add',
        path: `${absolutePath}/pages/{{properCase name}}/index.tsx`,
        templateFile: `${absolutePath}/generators/pages/index.tsx.hbs`,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${absolutePath}/pages/{{properCase name}}/__tests__/index.test.tsx`,
        templateFile: `${absolutePath}/generators/pages/test.tsx.hbs`,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${absolutePath}/pages/{{properCase name}}/interface.ts`,
        templateFile: `${absolutePath}/generators/pages/interfaces.ts.hbs`,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${absolutePath}/pages/{{properCase name}}/styled.tsx`,
        templateFile: `${absolutePath}/generators/pages/styled.tsx.hbs`,
        abortOnFail: true,
      },
      {
        type: 'modify',
        path: `${absolutePath}/containers/App/index.tsx`,
        pattern: `/* DON'T REMOVE THIS LINE - CODE-GENERATOR: PAGES IMPORT */`,
        templateFile: `${absolutePath}/generators/pages/code-gen-import-page.hbs`,
        abortOnFail: true,
      },
    ];

    if (data.wantPrivateRoute) {
      actions.push({
        type: 'modify',
        path: `${absolutePath}/containers/App/index.tsx`,
        pattern: `{/* DON'T REMOVE THIS LINE - CODE-GENERATOR: ROUTE */}`,
        templateFile: `${absolutePath}/generators/pages/code-gen-private-route.hbs`,
        abortOnFail: true,
      });
    }
    if (!data.wantPrivateRoute) {
      actions.push({
        type: 'modify',
        path: `${absolutePath}/containers/App/index.tsx`,
        pattern: `{/* DON'T REMOVE THIS LINE - CODE-GENERATOR: ROUTE */}`,
        templateFile: `${absolutePath}/generators/pages/code-gen-route.hbs`,
        abortOnFail: true,
      });
    }

    return actions;
  },
};
