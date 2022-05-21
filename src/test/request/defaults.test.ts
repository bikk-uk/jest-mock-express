// Tested Module
import getMockReq from '../../request/request'

describe('request - Defaults (accepts no arguments and return default values)', () => {
  test('req.params is an empty object', () => {
    const req = getMockReq()

    expect(req.params).toBeDefined()
    expect(req.params).toBeInstanceOf(Object)
    expect(Object.keys(req.params).length).toBe(0)
  })

  test('req.query is an empty object', () => {
    const req = getMockReq()

    expect(req.query).toBeDefined()
    expect(req.query).toBeInstanceOf(Object)
    expect(Object.keys(req.query).length).toBe(0)
  })

  test('req.body is an empty object', () => {
    const req = getMockReq()

    expect(req.body).toBeDefined()
    expect(req.body).toBeInstanceOf(Object)
    expect(Object.keys(req.body).length).toBe(0)
  })

  test('req.cookies is an empty object', () => {
    const req = getMockReq()

    expect(req.cookies).toBeDefined()
    expect(req.cookies).toBeInstanceOf(Object)
    expect(Object.keys(req.cookies).length).toBe(0)
  })

  test('req.method is an empty string', () => {
    const req = getMockReq()

    expect(req.method).toBeDefined()
    expect(req.method).toBe('')
  })

  test('req.protocol is an empty string', () => {
    const req = getMockReq()

    expect(req.protocol).toBeDefined()
    expect(req.protocol).toBe('')
  })

  test('req.secure is a boolean', () => {
    const req = getMockReq()

    expect(req.secure).toBeDefined()
    expect(req.secure).toBe(false)
  })

  test('req.ip is an empty string', () => {
    const req = getMockReq()

    expect(req.ip).toBeDefined()
    expect(req.ip).toBe('')
  })

  test('req.ips is an empty array', () => {
    const req = getMockReq()

    expect(req.ips).toBeDefined()
    expect(Array.isArray(req.ips)).toBe(true)
    expect(req.ips.length).toBe(0)
  })

  test('req.subdomains is an empty array', () => {
    const req = getMockReq()

    expect(req.subdomains).toBeDefined()
    expect(Array.isArray(req.subdomains)).toBe(true)
    expect(req.subdomains.length).toBe(0)
  })

  test('req.path is an empty string', () => {
    const req = getMockReq()

    expect(req.path).toBeDefined()
    expect(req.path).toBe('')
  })

  test('req.hostname is an empty string', () => {
    const req = getMockReq()

    expect(req.hostname).toBeDefined()
    expect(req.hostname).toBe('')
  })

  test('req.host is an empty string', () => {
    const req = getMockReq()

    expect(req.host).toBeDefined()
    expect(req.host).toBe('')
  })

  test('req.fresh is a boolean', () => {
    const req = getMockReq()

    expect(req.fresh).toBeDefined()
    expect(req.fresh).toBe(false)
  })

  test('req.stale is a boolean', () => {
    const req = getMockReq()

    expect(req.stale).toBeDefined()
    expect(req.stale).toBe(false)
  })

  test('req.xhr is a boolean', () => {
    const req = getMockReq()

    expect(req.xhr).toBeDefined()
    expect(req.xhr).toBe(false)
  })

  test('req.route is an empty object', () => {
    const req = getMockReq()

    expect(req.route).toBeDefined()
    expect(req.route).toBeInstanceOf(Object)
    expect(Object.keys(req.route).length).toBe(0)
  })

  test('req.signedCookies is an empty object', () => {
    const req = getMockReq()

    expect(req.signedCookies).toBeDefined()
    expect(req.signedCookies).toBeInstanceOf(Object)
    expect(Object.keys(req.signedCookies).length).toBe(0)
  })

  test('req.originalUrl is an empty string', () => {
    const req = getMockReq()

    expect(req.originalUrl).toBeDefined()
    expect(req.originalUrl).toBe('')
  })

  test('req.url is an empty string', () => {
    const req = getMockReq()

    expect(req.url).toBeDefined()
    expect(req.url).toBe('')
  })

  test('req.baseUrl is an empty string', () => {
    const req = getMockReq()

    expect(req.baseUrl).toBeDefined()
    expect(req.baseUrl).toBe('')
  })

  test('req.accepted is an empty array', () => {
    const req = getMockReq()

    expect(req.accepted).toBeDefined()
    expect(Array.isArray(req.accepted)).toBe(true)
    expect(req.accepted.length).toBe(0)
  })

  test('req.get is a mocked function', () => {
    const req = getMockReq()

    expect(req.get).toBeDefined()
    expect(typeof req.get).toBe('function')
    expect((req.get as jest.Mock).getMockName()).toBe('get mock default')
  })

  test('req.header is a mocked function', () => {
    const req = getMockReq()

    expect(req.header).toBeDefined()
    expect(typeof req.header).toBe('function')
    expect((req.header as jest.Mock).getMockName()).toBe('header mock default')
  })

  test('req.accepts is a mocked function', () => {
    const req = getMockReq()

    expect(req.accepts).toBeDefined()
    expect(typeof req.accepts).toBe('function')
    expect((req.accepts as jest.Mock).getMockName()).toBe('accepts mock default')
  })

  test('req.acceptsCharsets is a mocked function', () => {
    const req = getMockReq()

    expect(req.acceptsCharsets).toBeDefined()
    expect(typeof req.acceptsCharsets).toBe('function')
    expect((req.acceptsCharsets as jest.Mock).getMockName()).toBe('acceptsCharsets mock default')
  })

  test('req.acceptsEncodings is a mocked function', () => {
    const req = getMockReq()

    expect(req.acceptsEncodings).toBeDefined()
    expect(typeof req.acceptsEncodings).toBe('function')
    expect((req.acceptsEncodings as jest.Mock).getMockName()).toBe('acceptsEncodings mock default')
  })

  test('req.acceptsLanguages is a mocked function', () => {
    const req = getMockReq()

    expect(req.acceptsLanguages).toBeDefined()
    expect(typeof req.acceptsLanguages).toBe('function')
    expect((req.acceptsLanguages as jest.Mock).getMockName()).toBe('acceptsLanguages mock default')
  })

  test('req.range is a mocked function', () => {
    const req = getMockReq()

    expect(req.range).toBeDefined()
    expect(typeof req.range).toBe('function')
    expect((req.range as jest.Mock).getMockName()).toBe('range mock default')
  })

  test('req.param is a mocked function', () => {
    const req = getMockReq()

    expect(req.param).toBeDefined()
    expect(typeof req.param).toBe('function')
    expect((req.param as jest.Mock).getMockName()).toBe('param mock default')
  })

  test('req.is is a mocked function', () => {
    const req = getMockReq()

    expect(req.is).toBeDefined()
    expect(typeof req.is).toBe('function')
    expect((req.is as jest.Mock).getMockName()).toBe('is mock default')
  })

  test('req.app is an empty object', () => {
    const req = getMockReq()

    expect(req.app).toBeDefined()
    expect(req.app).toBeInstanceOf(Object)
    expect(Object.keys(req.app).length).toBe(0)
  })

  test('req.res is a mocked function', () => {
    const req = getMockReq()

    expect(req.res).toBeDefined()
    expect(typeof req.res).toBe('function')
    expect((req.res as unknown as jest.Mock).getMockName()).toBe('res mock default')
  })

  test('req.next is a mocked function', () => {
    const req = getMockReq()

    expect(req.next).toBeDefined()
    expect(typeof req.next).toBe('function')
    expect((req.next as jest.Mock).getMockName()).toBe('next mock default')
  })

  test('req.aborted is a boolean', () => {
    const req = getMockReq()

    expect(req.aborted).toBeDefined()
    expect(req.aborted).toBe(false)
  })

  test('req.httpVersion is an empty string', () => {
    const req = getMockReq()

    expect(req.httpVersion).toBeDefined()
    expect(req.httpVersion).toBe('')
  })

  test('req.httpVersionMajor is a number', () => {
    const req = getMockReq()

    expect(req.httpVersionMajor).toBeDefined()
    expect(req.httpVersionMajor).toBe(0)
  })

  test('req.httpVersionMinor is a number', () => {
    const req = getMockReq()

    expect(req.httpVersionMinor).toBeDefined()
    expect(req.httpVersionMinor).toBe(0)
  })

  test('req.complete is a boolean', () => {
    const req = getMockReq()

    expect(req.complete).toBeDefined()
    expect(req.complete).toBe(false)
  })

  test('req.connection is an empty object', () => {
    const req = getMockReq()

    expect(req.connection).toBeDefined()
    expect(req.connection).toBeInstanceOf(Object)
    expect(Object.keys(req.connection).length).toBe(0)
  })

  test('req.socket is an empty object', () => {
    const req = getMockReq()

    expect(req.socket).toBeDefined()
    expect(req.socket).toBeInstanceOf(Object)
    expect(Object.keys(req.socket).length).toBe(0)
  })

  test('req.headers is an empty object', () => {
    const req = getMockReq()

    expect(req.headers).toBeDefined()
    expect(req.headers).toBeInstanceOf(Object)
    expect(Object.keys(req.headers).length).toBe(0)
  })

  test('req.rawHeaders is an empty array', () => {
    const req = getMockReq()

    expect(req.rawHeaders).toBeDefined()
    expect(Array.isArray(req.rawHeaders)).toBe(true)
    expect(req.rawHeaders.length).toBe(0)
  })

  test('req.trailers is an empty object', () => {
    const req = getMockReq()

    expect(req.trailers).toBeDefined()
    expect(req.trailers).toBeInstanceOf(Object)
    expect(Object.keys(req.trailers).length).toBe(0)
  })

  test('req.rawTrailers is an empty array', () => {
    const req = getMockReq()

    expect(req.rawTrailers).toBeDefined()
    expect(Array.isArray(req.rawTrailers)).toBe(true)
    expect(req.rawTrailers.length).toBe(0)
  })

  test('req.setTimeout is a mocked function', () => {
    const req = getMockReq()

    expect(req.setTimeout).toBeDefined()
    expect(typeof req.setTimeout).toBe('function')
    expect((req.setTimeout as jest.Mock).getMockName()).toBe('setTimeout mock default')
  })

  test('req.statusCode is a number', () => {
    const req = getMockReq()

    expect(req.statusCode).toBeDefined()
    expect(req.statusCode).toBe(0)
  })

  test('req.statusMessage is an empty string', () => {
    const req = getMockReq()

    expect(req.statusMessage).toBeDefined()
    expect(req.statusMessage).toBe('')
  })

  test('req.destroy is a mocked function', () => {
    const req = getMockReq()

    expect(req.destroy).toBeDefined()
    expect(typeof req.destroy).toBe('function')
    expect((req.destroy as jest.Mock).getMockName()).toBe('destroy mock default')
  })
})
