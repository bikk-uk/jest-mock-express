// Tested Module
import getMockRes from '../../response/response'

describe('request - Functions from "http - OutgoingMessage"', () => {
  test('res.setTimeout is a mocked function', () => {
    const { res } = getMockRes()

    expect(res.setTimeout).toBeDefined()
    expect(typeof res.setTimeout).toBe('function')
    expect((res.setTimeout as jest.Mock).getMockName()).toBe('setTimeout mock default')
  })

  test('res.setTimeout is chainable', () => {
    const { res } = getMockRes()

    // it returns itself (is chainable)
    expect(res.setTimeout(1000)).toBe(res)
  })

  test('res.setHeader is a mocked function', () => {
    const { res } = getMockRes()

    expect(res.setHeader).toBeDefined()
    expect(typeof res.setHeader).toBe('function')
    expect((res.setHeader as jest.Mock).getMockName()).toBe('setHeader mock default')
  })

  test('res.setHeader is not chainable', () => {
    const { res } = getMockRes()

    // it does not return itself (is not chainable)
    expect(res.setHeader('test', 'test two')).toBeUndefined()
  })

  test('res.getHeader is a mocked function and is not chainable', () => {
    const { res } = getMockRes()

    expect(res.getHeader).toBeDefined()
    expect(typeof res.getHeader).toBe('function')
    expect((res.getHeader as jest.Mock).getMockName()).toBe('getHeader mock default')
  })

  test('res.getHeader is a mocked function and is not chainable', () => {
    const { res } = getMockRes()

    // it does not return itself (is not chainable)
    expect(res.getHeader('test')).toBeUndefined()
  })

  test('res.getHeaders is a mocked function', () => {
    const { res } = getMockRes()

    expect(res.getHeaders).toBeDefined()
    expect(typeof res.getHeaders).toBe('function')
    expect((res.getHeaders as jest.Mock).getMockName()).toBe('getHeaders mock default')
  })

  test('res.getHeaders is not chainable', () => {
    const { res } = getMockRes()

    // it does not return itself (is not chainable)
    expect(res.getHeaders()).toBeUndefined()
  })

  test('res.getHeaderNames is a mocked function', () => {
    const { res } = getMockRes()

    expect(res.getHeaderNames).toBeDefined()
    expect(typeof res.getHeaderNames).toBe('function')
    expect((res.getHeaderNames as jest.Mock).getMockName()).toBe('getHeaderNames mock default')
  })

  test('res.getHeaderNames is not chainable', () => {
    const { res } = getMockRes()

    // it does not return itself (is not chainable)
    expect(res.getHeaderNames()).toBeUndefined()
  })

  test('res.hasHeader is a mocked function', () => {
    const { res } = getMockRes()

    expect(res.hasHeader).toBeDefined()
    expect(typeof res.hasHeader).toBe('function')
    expect((res.hasHeader as jest.Mock).getMockName()).toBe('hasHeader mock default')
  })

  test('res.hasHeader is not chainable', () => {
    const { res } = getMockRes()

    // it does not return itself (is not chainable)
    expect(res.hasHeader('test')).toBeUndefined()
  })

  test('res.removeHeader is a mocked function', () => {
    const { res } = getMockRes()

    expect(res.removeHeader).toBeDefined()
    expect(typeof res.removeHeader).toBe('function')
    expect((res.removeHeader as jest.Mock).getMockName()).toBe('removeHeader mock default')
  })

  test('res.removeHeader is not chainable', () => {
    const { res } = getMockRes()

    // it does not return itself (is not chainable)
    expect(res.removeHeader('test')).toBeUndefined()
  })

  test('res.addTrailers is a mocked function', () => {
    const { res } = getMockRes()

    expect(res.addTrailers).toBeDefined()
    expect(typeof res.addTrailers).toBe('function')
    expect((res.addTrailers as jest.Mock).getMockName()).toBe('addTrailers mock default')
  })

  test('res.addTrailers is not chainable', () => {
    const { res } = getMockRes()

    // it does not return itself (is not chainable)
    expect(res.addTrailers([])).toBeUndefined()
  })

  test('res.flushHeaders is a mocked function', () => {
    const { res } = getMockRes()

    expect(res.flushHeaders).toBeDefined()
    expect(typeof res.flushHeaders).toBe('function')
    expect((res.flushHeaders as jest.Mock).getMockName()).toBe('flushHeaders mock default')
  })

  test('res.flushHeaders is not chainable', () => {
    const { res } = getMockRes()

    // it does not return itself (is not chainable)
    expect(res.flushHeaders()).toBeUndefined()
  })
})
