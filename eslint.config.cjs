const { fixupConfigRules, fixupPluginRules } = require('@eslint/compat');
const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');
const vitest = require('eslint-plugin-vitest');
const baseConfig = require('@lazycuh/eslint-config-base');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
module.exports = [
  ...baseConfig,

  ...fixupConfigRules(compat.extends('plugin:vitest/legacy-recommended')).map(config => ({
    ...config,
    files: ['*.ts', '*.tsx'],
    plugins: {
      vitest: fixupPluginRules(vitest)
    },
    rules: {
      'vitest/expect-expect': [
        'error',
        {
          assertFunctionNames: [
            'expect',
            'request.*.expect',
            'request.**.expect',
            'request.*.expect*',
            'get(*).expect',
            'post(*).expect',
            'put(*).expect',
            'delete(*).expect',
            'sendGetRequest(*).expect',
            'sendGetRequest(*).*.expect',
            'sendPostRequest(*).expect',
            'sendPostRequest(*).*.expect',
            'sendPutRequest(*).expect',
            'sendPutRequest(*).*.expect',
            'sendDeleteRequest(*).expect',
            'sendDeleteRequest(*).*.expect'
          ]
        }
      ],
      'vitest/no-conditional-expect': 'error',
      'vitest/no-conditional-in-test': 'error',
      'vitest/no-conditional-tests': 'error',
      'vitest/no-disabled-tests': 'error',
      'vitest/no-done-callback': 'error',
      'vitest/no-focused-tests': [
        'error',
        {
          fixable: false
        }
      ],
      'vitest/no-identical-title': 'error',
      'vitest/prefer-called-with': 'error',
      'vitest/prefer-equality-matcher': 'error',
      'vitest/prefer-hooks-on-top': 'error',
      'vitest/prefer-mock-promise-shorthand': 'error',
      'vitest/prefer-spy-on': 'error',
      'vitest/prefer-to-contain': 'error',
      'vitest/prefer-to-have-length': 'error',
      'vitest/require-to-throw-message': 'error',
      'vitest/require-top-level-describe': 'error',
      'vitest/valid-title': [
        'error',
        {
          ignoreTypeOfDescribeName: true
        }
      ]
    }
  }))
];
