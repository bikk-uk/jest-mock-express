// Types
import type { Request } from 'express'

// Tested Module
import getMockReq from './request'

const DEFAULT_REQ_KEY_LENGTH = 49

describe('getMockReq', () => {
  describe('accepts no arguments and return default values', () => {
    test('the request contains values', () => {
      const req = getMockReq()

      expect(req).toBeDefined()
      expect(req).toBeInstanceOf(Object)
      expect(Object.keys(req).length).toBe(DEFAULT_REQ_KEY_LENGTH)
    })

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

      expect(req.method).toBe('')
    })

    test('req.protocol is an empty string', () => {
      const req = getMockReq()

      expect(req.protocol).toBe('')
    })

    test('req.secure is a boolean', () => {
      const req = getMockReq()

      expect(req.secure).toBe(false)
    })

    test('req.ip is an empty string', () => {
      const req = getMockReq()

      expect(req.ip).toBe('')
    })

    test('req.ips is an empty array', () => {
      const req = getMockReq()

      expect(Array.isArray(req.ips)).toBe(true)
      expect(req.ips.length).toBe(0)
    })

    test('req.subdomains is an empty array', () => {
      const req = getMockReq()

      expect(Array.isArray(req.subdomains)).toBe(true)
      expect(req.subdomains.length).toBe(0)
    })

    test('req.path is an empty string', () => {
      const req = getMockReq()

      expect(req.path).toBe('')
    })

    test('req.hostname is an empty string', () => {
      const req = getMockReq()

      expect(req.hostname).toBe('')
    })

    test('req.host is an empty string', () => {
      const req = getMockReq()

      expect(req.host).toBe('')
    })

    test('req.fresh is a boolean', () => {
      const req = getMockReq()

      expect(req.fresh).toBe(false)
    })

    test('req.stale is a boolean', () => {
      const req = getMockReq()

      expect(req.stale).toBe(false)
    })

    test('req.xhr is a boolean', () => {
      const req = getMockReq()

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

      expect(req.originalUrl).toBe('')
    })

    test('req.url is an empty string', () => {
      const req = getMockReq()

      expect(req.url).toBe('')
    })

    test('req.baseUrl is an empty string', () => {
      const req = getMockReq()

      expect(req.baseUrl).toBe('')
    })

    test('req.accepted is an empty array', () => {
      const req = getMockReq()

      expect(Array.isArray(req.accepted)).toBe(true)
      expect(req.accepted.length).toBe(0)
    })

    test('req.get is a mocked function', () => {
      const req = getMockReq()

      expect((req.get as jest.Mock).getMockName()).toBe('get mock default')
    })

    test('req.header is a mocked function', () => {
      const req = getMockReq()

      expect((req.header as jest.Mock).getMockName()).toBe('header mock default')
    })

    test('req.accepts is a mocked function', () => {
      const req = getMockReq()

      expect((req.accepts as jest.Mock).getMockName()).toBe('accepts mock default')
    })

    test('req.acceptsCharsets is a mocked function', () => {
      const req = getMockReq()

      expect((req.acceptsCharsets as jest.Mock).getMockName()).toBe('acceptsCharsets mock default')
    })

    test('req.acceptsEncodings is a mocked function', () => {
      const req = getMockReq()

      expect((req.acceptsEncodings as jest.Mock).getMockName()).toBe('acceptsEncodings mock default')
    })

    test('req.acceptsLanguages is a mocked function', () => {
      const req = getMockReq()

      expect((req.acceptsLanguages as jest.Mock).getMockName()).toBe('acceptsLanguages mock default')
    })

    test('req.range is a mocked function', () => {
      const req = getMockReq()

      expect((req.range as jest.Mock).getMockName()).toBe('range mock default')
    })

    test('req.param is a mocked function', () => {
      const req = getMockReq()

      expect((req.param as jest.Mock).getMockName()).toBe('param mock default')
    })

    test('req.is is a mocked function', () => {
      const req = getMockReq()

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

      expect((req.res as unknown as jest.Mock).getMockName()).toBe('res mock default')
    })

    test('req.next is a mocked function', () => {
      const req = getMockReq()

      expect((req.next as jest.Mock).getMockName()).toBe('next mock default')
    })

    test('req.aborted is a boolean', () => {
      const req = getMockReq()

      expect(req.aborted).toBe(false)
    })

    test('req.httpVersion is an empty string', () => {
      const req = getMockReq()

      expect(req.httpVersion).toBe('')
    })

    test('req.httpVersionMajor is a number', () => {
      const req = getMockReq()

      expect(req.httpVersionMajor).toBe(0)
    })

    test('req.httpVersionMinor is a number', () => {
      const req = getMockReq()

      expect(req.httpVersionMinor).toBe(0)
    })

    test('req.complete is a boolean', () => {
      const req = getMockReq()

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

      expect(Array.isArray(req.rawTrailers)).toBe(true)
      expect(req.rawTrailers.length).toBe(0)
    })

    test('req.setTimeout is a mocked function', () => {
      const req = getMockReq()

      expect((req.setTimeout as jest.Mock).getMockName()).toBe('setTimeout mock default')
    })

    test('req.statusCode is a number', () => {
      const req = getMockReq()

      expect(req.statusCode).toBe(0)
    })

    test('req.statusMessage is an empty string', () => {
      const req = getMockReq()

      expect(req.statusMessage).toBe('')
    })

    test('req.destroy is a mocked function', () => {
      const req = getMockReq()

      expect((req.destroy as jest.Mock).getMockName()).toBe('destroy mock default')
    })
  })

  test('returns provided params', () => {
    const req = getMockReq({ params: { one: 1, two: 2 } })

    // req.params has the provided arguments
    expect(req.params).toBeDefined()
    expect(req.params).toBeInstanceOf(Object)
    expect(Object.keys(req.params).length).toBe(2)
    expect(req.params['one']).toBe(1)
    expect(req.params['two']).toBe(2)
  })

  test('returns provided query', () => {
    const req = getMockReq({ query: { three: 'three', four: 'four' } })

    // req.query has the provided arguments
    expect(req.query).toBeDefined()
    expect(req.query).toBeInstanceOf(Object)
    expect(Object.keys(req.query).length).toBe(2)
    expect(req.query['three']).toBe('three')
    expect(req.query['four']).toBe('four')
  })

  test('returns provided body', () => {
    const req = getMockReq({ body: { five: { six: 6 }, seven: [8, 9] } })

    // req.body has the provided arguments
    expect(req.body).toBeDefined()
    expect(req.body).toBeInstanceOf(Object)
    expect(Object.keys(req.body).length).toBe(2)
    expect(req.body['five']).toEqual(expect.objectContaining({ six: 6 }))
    expect(req.body['seven']).toEqual(expect.arrayContaining([8, 9]))
  })

  test('returns provided headers', () => {
    const req = getMockReq({
      headers: {
        HeaderOne: 'one',
        HeaderTwo: 'two',
        HeaderThree: 'three',
      },
    })

    // req.headers has the provided arguments
    expect(req.headers).toBeDefined()
    expect(req.headers).toBeInstanceOf(Object)
    expect(Object.keys(req.headers).length).toBe(3)
    expect(req.headers['HeaderOne']).toBe('one')
    expect(req.headers['HeaderTwo']).toBe('two')
    expect(req.headers['HeaderThree']).toBe('three')
  })

  test('allows custom properties', () => {
    interface User {
      id: string
      name: string
    }

    interface CustomRequest extends Request {
      user: User
    }

    const mockUser: User = {
      id: '123',
      name: 'Bob',
    }

    const req = getMockReq<CustomRequest>({
      user: mockUser,
      query: {
        id: '123',
        limit: 10,
        page: 2,
      },
    })

    // req.user has the provided arguments
    expect(req.user).toBeDefined()
    expect(req.user).toBe(mockUser)

    // req.query has the provided arguments
    expect(req.query).toBeDefined()
    expect(req.query).toBeInstanceOf(Object)
    expect(Object.keys(req.query).length).toBe(3)
    expect(req.query['id']).toBe('123')
    expect(req.query['limit']).toBe(10)
    expect(req.query['page']).toBe(2)
  })

  test('issue #6', () => {
    enum AppOS {
      Android = 1,
    }

    const req = getMockReq({
      query: {
        os: AppOS.Android,
        sellerId: '12345',
      },
      headers: {
        Authorization: 'token validtoken',
      },
    })

    // req.query has the provided arguments
    expect(req.query).toBeDefined()
    expect(req.query).toBeInstanceOf(Object)
    expect(Object.keys(req.query).length).toBe(2)
    expect(req.query['os']).toBe(AppOS.Android)
    expect(req.query['sellerId']).toBe('12345')

    // req.headers has the provided arguments
    expect(req.headers).toBeDefined()
    expect(req.headers).toBeInstanceOf(Object)
    expect(Object.keys(req.headers).length).toBe(1)
    expect(req.headers['Authorization']).toBe('token validtoken')
  })

  test('issue #27', () => {
    interface CustomRequest extends Request {
      locals: any
      customProperty: string
    }

    const req = getMockReq<CustomRequest>({
      locals: { var: 'hi there' },
      customProperty: 'value',
    })

    // req.locals has the provided arguments
    expect(req.locals).toBeDefined()
    expect(req.locals).toEqual({ var: 'hi there' })

    // req.customProperty has the provided arguments
    expect(req.customProperty).toBeDefined()
    expect(req.customProperty).toEqual('value')
  })
})
