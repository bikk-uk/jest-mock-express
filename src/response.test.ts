// Tested Module
import getMockRes from './response'

describe('getMockRes', () => {
  test('returns expected object', () => {
    const testRes = getMockRes()

    // the response contains values for res and next and a clear function
    expect(testRes).toBeInstanceOf(Object)
    expect(Object.keys(testRes).length).toBe(3)
  })

  test('the mock res is provided and contains the expected functions', () => {
    const testRes = getMockRes()

    // res contains the expected functions
    expect(testRes.res).toBeTruthy()
    expect(Object.keys(testRes.res).length).toBe(1)
    expect(typeof testRes.res.json).toBe('function')
  })

  test('the mock next function is provided', () => {
    const testRes = getMockRes()

    // next is part of the mock response
    expect(testRes.next).toBeTruthy()
    expect(typeof testRes.next).toBe('function')
  })

  test('the mock clear function is provided', () => {
    const testRes = getMockRes()

    // a mock clear function is part of the mock response
    expect(testRes.mockClear).toBeTruthy()
    expect(typeof testRes.mockClear).toBe('function')
  })
})
