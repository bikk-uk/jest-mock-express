// Tested Module
import getMockRes from './response'

describe('getMockRes', () => {
  test('returns expected object', () => {
    const testRes = getMockRes()

    // the response contains values for res and next and clear functions
    expect(testRes).toBeInstanceOf(Object)
    expect(Object.keys(testRes).length).toBe(4)
  })

  test('the mock res is provided and contains the expected functions', () => {
    const { res } = getMockRes()

    // res contains the expected functions
    expect(res).toBeTruthy()
    expect(Object.keys(res).length).toBe(1)
    expect(typeof res.json).toBe('function')
  })

  test('the mock next function is provided', () => {
    const { next } = getMockRes()

    // next is part of the mock response
    expect(next).toBeTruthy()
    expect(typeof next).toBe('function')
  })

  test('the mock clear function is provided', () => {
    const { mockClear } = getMockRes()

    // a mock clear function is part of the mock response
    expect(mockClear).toBeTruthy()
    expect(typeof mockClear).toBe('function')
  })

  test('the mock clear alias function is provided', () => {
    const { clearMockRes } = getMockRes()

    // a mock clear alias function is part of the mock response
    expect(clearMockRes).toBeTruthy()
    expect(typeof clearMockRes).toBe('function')
  })

  test('mock clear clears all mocks', () => {
    const { res, next, mockClear } = getMockRes()

    // call all of the mock functions
    next()
    res.json()

    // ensure they all report as being called
    expect((next as jest.Mock).mock.calls.length).toBe(1)
    expect((res.json as jest.Mock).mock.calls.length).toBe(1)

    // clear the mock
    mockClear()

    // ensure they all have been cleared
    expect((next as jest.Mock).mock.calls.length).toBe(0)
    expect((res.json as jest.Mock).mock.calls.length).toBe(0)
  })

  test('clearMockRes clears all mocks', () => {
    const { res, next, clearMockRes } = getMockRes()

    // call all of the mock functions
    next()
    res.json()

    // ensure they all report as being called
    expect((next as jest.Mock).mock.calls.length).toBe(1)
    expect((res.json as jest.Mock).mock.calls.length).toBe(1)

    // clear the mock
    clearMockRes()

    // ensure they all have been cleared
    expect((next as jest.Mock).mock.calls.length).toBe(0)
    expect((res.json as jest.Mock).mock.calls.length).toBe(0)
  })
})
