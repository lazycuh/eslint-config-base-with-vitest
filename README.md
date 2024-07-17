# eslint-config-base-with-vitest [![](https://circleci.com/gh/lazycuh/eslint-config-base-with-vitest.svg?style=svg&logo=appveyor)](https://app.circleci.com/pipelines/github/lazycuh/eslint-config-base-with-vitest?branch=main)

[Base ESLint rules](https://github.com/lazycuh/eslint-config-base) with support for linting Vitest test files.

## ESLint compatibility

| This library | ESLint |
| ------------ | ------ |
| 2.x.x        | ^9     |
| 1.x.x        | ^8     |

## Installation

- `npm`
  ```
  npm i -S @lazycuh/eslint-config-base-with-vitest
  ```
- `pnpm`
  ```
  pnpm i -S @lazycuh/eslint-config-base-with-vitest
  ```
- `yarn`

  ```
  yarn add @lazycuh/eslint-config-base-with-vitest
  ```

### ESLint 9

`eslint.config.js` file

```js
import baseConfig from '@lazycuh/eslint-config-base-with-vitest';

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...baseConfig.map(config => ({
    ...config,

    files: ['src/**/*.ts'], // Only lint Typescript files under `src` directory.

    rules: {
      ...config.rules
      // Your rule overrides go here
    }
  }))
];
```

_If your `package.json` file has `"type": "module"`, you can change the above `require` and `module.exports` to `import` and `export default` respectively_.

### ESLint 8

`.eslintrc.json` file

```json
{
  "$schema": "https://json.schemastore.org/eslintrc.json",
  "root": true,
  "ignorePatterns": ["!**/*"],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  // It's recommended to use an override to not globally change your ESLint configuration.
  "overrides": [
    {
      "files": ["*.ts"],
      "extends": ["@lazycuh/eslint-config-base-with-vitest"],
      "rules": {
        // Your rule overrides go here
      }
    }
  ]
}
```
