'use strict';

module.exports = {
  root: true,
  plugins: ['eslint-plugin', 'node'],
  extends: [
    'eslint:recommended',
    'plugin:eslint-plugin/all',
    'plugin:node/recommended',
  ],
  rules: {
    // TODO: enable
    'eslint-plugin/prefer-message-ids': 'off',
    'eslint-plugin/prefer-placeholders': 'off',
    'eslint-plugin/require-meta-docs-description': 'off',
    'eslint-plugin/require-meta-type': 'off',

    'eslint-plugin/require-meta-docs-url': [
      'error',
      {
        pattern:
          'https://github.com/OkCupid/eslint-plugin-i18n-lingui/blob/main/docs/rules/{{name}}.md',
      },
    ],
  }
};
