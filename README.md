# @jest-mock/express

A lightweight Jest mock for unit testing Express

[![Build Status](https://travis-ci.org/bikk-uk/jest-mock-express.svg?branch=master)](https://travis-ci.org/bikk-uk/jest-mock-express)
[![Coverage Status](https://coveralls.io/repos/github/bikk-uk/jest-mock-express/badge.svg?branch=master)](https://coveralls.io/github/bikk-uk/jest-mock-express?branch=master)

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
const mockReq = getMockReq()
```

To create mock requests with values you can just provide them to the function in any order and all are optional. The advantage of this is that it ensures all of the other properties are also provided with default values.

```typescript
// an example GET request to retrieve an entity
const mockReq = getMockReq({ params: { id: '123' } })
```

```typescript
// an example PUT request to update a person
const mockReq = getMockReq({
  params: { id: 564 },
  body: { firstname: 'James', lastname: 'Smith', age: 34 }
})
```

### `getMockRes`

`getMockRes` will provided a mocked `res` that will provided jest mock functions for all common requirements.

```typescript
const mockRes = getMockRes()
```

All of the returned mocked functions can be cleared with a single call to `mockClear`.

```typescript
beforeEach(() => {
  mockRes.mockClear()
})
```

It will also provide a mocked `next` function as that is commonly used and will also be cleared as part of `mockClear`.

```typescript
const mockRes = getMockRes()

test('will respond with the entity from the service', async () => {
  // generate a mock request with getMockReq (above)
  const mockReq = getMockReq({ params: { id: '123' } })

  await myController.get(mockReq, mockRes.res, mockRes.next)

  expect(mockRes.res.json).toHaveBeenCalledWith({
    message: expect.any(String),
    entity: theExpectedEntity
  })
  expect(mockRes.next).toHaveBeenCalledWith()
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

Runs the tests in watch mode.

### `yarn lint`

Runs the linter over the project.
