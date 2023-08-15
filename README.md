<div align="center"><h1>Typescript React Native Starter</h1></div>
<br/>
<div align="center">A highly scalable foundation with a focus on best pratices and simplicity to start your React Native project in seconds.</div>
<br/>
<div align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License" />
  </a>
  <a href="https://codecov.io/gh/NewBieBR/typescript-react-native-starter">
    <img src="https://img.shields.io/codecov/c/github/NewBieBR/typescript-react-native-starter.svg?style=popout" alt="Codecov Coverage" />
  </a>
  <a href="./CONTRIBUTING.md">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome" />
  </a>
</div>

## Quick Start

See below

## Features

- **Typescript**

  - [Typescript](https://github.com/microsoft/TypeScript) based: enhance code quality, understandability and scability with `Interface oriented development`

- **Flux State management**

  - [Context API](https://react.dev/reference/react/createContext): predictable state container

- **Navigation**

  - [React Navigation](https://github.com/react-navigation/react-navigation): easy-to-use navigation solution based on Javascript

- **Unit testing**
  - Unit tests with [Jest](https://github.com/facebook/jest), [Enzyme](https://github.com/airbnb/enzyme) and [react-native-testing-library](https://github.com/callstack/react-native-testing-library)
- - [Codecov](https://codecov.io/): coverage report

- **CI/CD**

  - Run linting pre-commit and unit testing pre-push with [husky](https://github.com/typicode/husky)'s hooks

- **Linting**
  - Eslint configured for React Native
  - VSCode Prettier compatible

## Installation

- Clone this repo

  ```
  git clone git@github.com:soardigital/klozr-delivery-mobile.git <PROJECT_NAME>

  ```

  ```
  cd <PROJECT_NAME>
  ```

- Execute the installtion script
  ```
    yarn setup <PROJECT_NAME>
  ```
  > The script will rename, delete README, CODE_OF_CONDUCT, CONTRIBUTING and LICENSE'

## Manual Installation

- Clone this repo

  ```
  git clone git@github.com:fxcosta/react-native-typescript-template.git <PROJECT_NAME>
  ```

  ```
  cd <PROJECT_NAME>
  ```

- Install dependencies
  ```
  yarn
  ```
- Rename the project

  ```
  yarn run rename <PROJECT_NAME>
  ```

- Migrate to AndroidX to [support React Native 0.60](https://facebook.github.io/react-native/blog/2019/07/03/version-60#androidx-support)

- Update pods

  ```
  cd ios && pod install
  ```

- Remove .git

  ```
  rm -rf .git
  ```
