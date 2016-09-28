# React boilerplate

[![Build Status](https://travis-ci.org/jhen0409/react-boilerplate.svg?branch=master)](https://travis-ci.org/jhen0409/react-boilerplate)
[![Dependency Status](https://david-dm.org/jhen0409/react-boilerplate.svg)](https://david-dm.org/jhen0409/react-boilerplate)
[![devDependency Status](https://david-dm.org/jhen0409/react-boilerplate/dev-status.svg)](https://david-dm.org/jhen0409/react-boilerplate?type=dev)

> A react boilerplate with [redux](https://github.com/reactjs/redux) / [redux-observalbe](https://github.com/redux-observable/redux-observable) for personal usage

## Installation

```bash
$ npm i
```

__*Note:*__ requires a node@^6.

## Development

```bash
$ PORT=3000 npm start
```

## Production

```bash
$ npm run build
```

## Test

```bash
# Lint
$ npm run lint

# Test actions, reducers, epics
$ npm test
# Watch file changes
$ npm test -- --watch

# E2E test
$ npm run build
$ npm run test-e2e
```

## License

[MIT](LICENSE.md)
