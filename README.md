# @jest-mock/express

A lightweight Jest mock for unit testing Express

[![Build Status](https://travis-ci.org/bikk-uk/jest-mock-express.svg?branch=master)](https://travis-ci.org/bikk-uk/jest-mock-express)
[![Coverage Status](https://coveralls.io/repos/github/bikk-uk/jest-mock-express/badge.svg?branch=master)](https://coveralls.io/github/bikk-uk/jest-mock-express?branch=master)
![GitHub package.json version](https://img.shields.io/github/package-json/v/bikk-uk/jest-mock-express?label=github)
![npm](https://img.shields.io/npm/v/@jest-mock/express)
![NPM](https://img.shields.io/npm/l/@jest-mock/express)

## Getting Started

Installation:

`yarn add --dev @jest-mock/express`

`npm install --save-dev @jest-mock/express`

Importing:

```typescript
import { getMockReq, getMockRes } from '@jest-mock/express'
```

## Usage

### `getMockReq`

`getMockReq` is intended to mock the `req` object as easily as possible. In its simplest form you can call it with no arguments to return a standard `req` with no values.

```typescript
const req = getMockReq()
```

To create mock requests with values you can just provide them to the function in any order and all are optional. The advantage of this is that it ensures all of the other properties are not undefined.

```typescript
// an example GET request to retrieve an entity
const req = getMockReq({ params: { id: '123' } })
```

```typescript
// an example PUT request to update a person
const req = getMockReq({
  params: { id: 564 },
  body: { firstname: 'James', lastname: 'Smith', age: 34 }
})
```

### `getMockRes`

`getMockRes` will provide a mocked `res` object that will contain mock functions for common use cases.

```typescript
const { res, next, clearMockRes } = getMockRes()
```

All of the returned mock functions can be cleared with a single call to `mockClear`. An alias is also provided called `clearMockRes`.

```typescript
const { res, next, clearMockRes } = getMockRes()

beforeEach(() => {
  clearMockRes()
})
```

It will also provide a mock `next` function for convenience, that will also be cleared as part of `mockClear`/`clearMockRes`.

```typescript
const { res, next } = getMockRes()

test('will respond with the entity from the service', async () => {
  // generate a mock request
  const req = getMockReq({ params: { id: 'abc-def' } })

  // provide the mock res and next to check against
  await myController.get(req, res, next)

  expect(res.json).toHaveBeenCalledWith(
    expect.objectContaining({
      id: 'abc-def'
    })
  )
  expect(next).toBeCalled()
})
```

## Available Scripts

In the project directory, you can run:

### `yarn build`

Transpiles the TypeScript source to the `dist` folder.

### `yarn clean`

Clears the `dist` folder.

### `yarn test`

Runs the tests and produces the coverage output.

### `yarn test-watch`

Runs the tests in watch mode, will not test the dist output folder.

### `test-watch-all`

Runs the tests in watch mode, will test both the TypeScript and generated JavaScript.

### `yarn lint`

Runs the linter over the project.
