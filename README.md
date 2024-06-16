# eslint-config-base-with-vitest [![](https://circleci.com/gh/babybeet/eslint-config-base-with-vitest.svg?style=svg&logo=appveyor)](https://app.circleci.com/pipelines/github/babybeet/eslint-config-base-with-vitest?branch=main)

[Base ESLint rules](https://github.com/babybeet/eslint-config-base) with support for linting Jest test files.

## Installation

- `npm`
  ```
  npm i -S @babybeet/eslint-config-base-with-vitest
  ```
- `pnpm`
  ```
  pnpm i -S @babybeet/eslint-config-base-with-vitest
  ```
- `yarn`

  ```
  yarn add @babybeet/eslint-config-base-with-vitest
  ```

## Setting up

In your `.eslintrc.json` file, add the followings:

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
      "extends": ["@babybeet/eslint-config-base-with-vitest"],
      "rules": {
        // Add your own rule overrides if desired.
      }
    }
  ]
}
```
