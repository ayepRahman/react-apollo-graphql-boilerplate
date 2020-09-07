/**
 * Apollo Generator
 *
 * @see https://plopjs.com/documentation/#setgenerator
 */

const path = require('path');

const absolutePath = path.join(__dirname, '../../../src/');
const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add Apollo Client State resolvers',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'user',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value) ? 'A file with this name already exists' : true;
        }
        return 'The name is required';
      },
    },
    {
      type: 'confirm',
      name: 'wantQuery',
      default: true,
      message: 'Do you want to add query resolver?',
    },
    {
      type: 'confirm',
      name: 'wantMutation',
      default: true,
      message: 'Do you want to add mutation resolver?',
    },
  ],
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  actions: data => {
    const actions = [];

    if (data.wantQuery || data.wantMutation) {
      actions.push({
        type: 'add',
        path: `${absolutePath}/apollo/gql/{{camelCase name}}.ts`,
        templateFile: `${absolutePath}/generators/apollo/gql.ts.hbs`,
        abortOnFail: true,
      });
    }

    if (data.wantQuery) {
      actions.push({
        type: 'add',
        path: `${absolutePath}/apollo/resolvers/queries/{{camelCase name}}.ts`,
        templateFile: `${absolutePath}/generators/apollo/resolver-query.ts.hbs`,
        abortOnFail: true,
      });
      actions.push({
        type: 'modify',
        path: `${absolutePath}/apollo/resolvers/queries/index.ts`,
        pattern: `/* DON'T REMOVE THIS LINE - CODE-GENERATOR: APOLLO RESOLVER QUERY IMPORT */`,
        templateFile: `${absolutePath}/generators/apollo/code-gen-query-import.hbs`,
        abortOnFail: true,
      });
      actions.push({
        type: 'modify',
        path: `${absolutePath}/apollo/resolvers/queries/index.ts`,
        pattern: `/* DON'T REMOVE THIS LINE - CODE-GENERATOR: APOLLO RESOLVER QUERY SET */`,
        templateFile: `${absolutePath}/generators/apollo/code-gen-query-set.hbs`,
        abortOnFail: true,
      });
    }

    if (data.wantMutation) {
      actions.push({
        type: 'add',
        path: `${absolutePath}/apollo/resolvers/mutations/{{camelCase name}}.ts`,
        templateFile: `${absolutePath}/generators/apollo/resolver-mutation.ts.hbs`,
        abortOnFail: true,
      });
      actions.push({
        type: 'modify',
        path: `${absolutePath}/apollo/resolvers/mutations/index.ts`,
        pattern: `/* DON'T REMOVE THIS LINE - CODE-GENERATOR: APOLLO RESOLVER MUTATION IMPORT */`,
        templateFile: `${absolutePath}/generators/apollo/code-gen-mutation-import.hbs`,
        abortOnFail: true,
      });
      actions.push({
        type: 'modify',
        path: `${absolutePath}/apollo/resolvers/mutations/index.ts`,
        pattern: `/* DON'T REMOVE THIS LINE - CODE-GENERATOR: APOLLO RESOLVER MUTATION SET */`,
        templateFile: `${absolutePath}/generators/apollo/code-gen-mutation-set.hbs`,
        abortOnFail: true,
      });
    }

    return actions;
  },
};
