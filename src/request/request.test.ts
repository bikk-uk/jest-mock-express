// Types
import type { Request } from 'express'

// Tested Module
import getMockReq from './request'

describe('getMockReq', () => {
  test('accepts no arguments and return default values', () => {
    const testReq = getMockReq()

    // the request contains values
    expect(testReq).toBeDefined()
    expect(testReq).toBeInstanceOf(Object)
    expect(Object.keys(testReq).length).toBe(49)

    // req.params is an empty object
    expect(testReq.params).toBeDefined()
    expect(testReq.params).toBeInstanceOf(Object)
    expect(Object.keys(testReq.params).length).toBe(0)

    // req.query is an empty object
    expect(testReq.query).toBeDefined()
    expect(testReq.query).toBeInstanceOf(Object)
    expect(Object.keys(testReq.query).length).toBe(0)

    // req.body is an empty object
    expect(testReq.body).toBeDefined()
    expect(testReq.body).toBeInstanceOf(Object)
    expect(Object.keys(testReq.body).length).toBe(0)

    // req.cookies is an empty object
    expect(testReq.cookies).toBeDefined()
    expect(testReq.cookies).toBeInstanceOf(Object)
    expect(Object.keys(testReq.cookies).length).toBe(0)

    // req.method is an empty string
    expect(testReq.method).toBe('')

    // req.protocol is an empty string
    expect(testReq.protocol).toBe('')

    // req.secure is a boolean
    expect(testReq.secure).toBe(false)

    // req.ip is an empty string
    expect(testReq.ip).toBe('')

    // req.ips is an empty array
    expect(Array.isArray(testReq.ips)).toBe(true)
    expect(testReq.ips.length).toBe(0)

    // req.subdomains is an empty array
    expect(Array.isArray(testReq.subdomains)).toBe(true)
    expect(testReq.subdomains.length).toBe(0)

    // req.path is an empty string
    expect(testReq.path).toBe('')

    // req.hostname is an empty string
    expect(testReq.hostname).toBe('')

    // req.host is an empty string
    expect(testReq.host).toBe('')

    // req.fresh is a boolean
    expect(testReq.fresh).toBe(false)

    // req.stale is a boolean
    expect(testReq.stale).toBe(false)

    // req.xhr is a boolean
    expect(testReq.xhr).toBe(false)

    // req.route is an empty object
    expect(testReq.route).toBeDefined()
    expect(testReq.route).toBeInstanceOf(Object)
    expect(Object.keys(testReq.route).length).toBe(0)

    // req.signedCookies is an empty object
    expect(testReq.signedCookies).toBeDefined()
    expect(testReq.signedCookies).toBeInstanceOf(Object)
    expect(Object.keys(testReq.signedCookies).length).toBe(0)

    // req.originalUrl is an empty string
    expect(testReq.originalUrl).toBe('')

    // req.url is an empty string
    expect(testReq.url).toBe('')

    // req.baseUrl is an empty string
    expect(testReq.baseUrl).toBe('')

    // req.accepted is an empty array
    expect(Array.isArray(testReq.accepted)).toBe(true)
    expect(testReq.accepted.length).toBe(0)

    // req.get is a mocked function
    expect((testReq.get as jest.Mock).getMockName()).toBe('get mock default')

    // req.header is a mocked function
    expect((testReq.header as jest.Mock).getMockName()).toBe('header mock default')

    // req.accepts is a mocked function
    expect((testReq.accepts as jest.Mock).getMockName()).toBe('accepts mock default')

    // req.acceptsCharsets is a mocked function
    expect((testReq.acceptsCharsets as jest.Mock).getMockName()).toBe('acceptsCharsets mock default')

    // req.acceptsEncodings is a mocked function
    expect((testReq.acceptsEncodings as jest.Mock).getMockName()).toBe('acceptsEncodings mock default')

    // req.acceptsLanguages is a mocked function
    expect((testReq.acceptsLanguages as jest.Mock).getMockName()).toBe('acceptsLanguages mock default')

    // req.range is a mocked function
    expect((testReq.range as jest.Mock).getMockName()).toBe('range mock default')

    // req.param is a mocked function
    expect((testReq.param as jest.Mock).getMockName()).toBe('param mock default')

    // req.is is a mocked function
    expect((testReq.is as jest.Mock).getMockName()).toBe('is mock default')

    // req.app is an empty object
    expect(testReq.app).toBeDefined()
    expect(testReq.app).toBeInstanceOf(Object)
    expect(Object.keys(testReq.app).length).toBe(0)

    // req.res is a mocked function
    expect((testReq.res as unknown as jest.Mock).getMockName()).toBe('res mock default')

    // req.next is a mocked function
    expect((testReq.next as jest.Mock).getMockName()).toBe('next mock default')

    // req.aborted is a boolean
    expect(testReq.aborted).toBe(false)

    // req.httpVersion is an empty string
    expect(testReq.httpVersion).toBe('')

    // req.httpVersionMajor is a number
    expect(testReq.httpVersionMajor).toBe(0)

    // req.httpVersionMinor is a number
    expect(testReq.httpVersionMinor).toBe(0)

    // req.complete is a boolean
    expect(testReq.complete).toBe(false)

    // req.connection is an empty object
    expect(testReq.connection).toBeDefined()
    expect(testReq.connection).toBeInstanceOf(Object)
    expect(Object.keys(testReq.connection).length).toBe(0)

    // req.socket is an empty object
    expect(testReq.socket).toBeDefined()
    expect(testReq.socket).toBeInstanceOf(Object)
    expect(Object.keys(testReq.socket).length).toBe(0)

    // req.headers is an empty object
    expect(testReq.headers).toBeDefined()
    expect(testReq.headers).toBeInstanceOf(Object)
    expect(Object.keys(testReq.headers).length).toBe(0)

    // req.rawHeaders is an empty array
    expect(Array.isArray(testReq.rawHeaders)).toBe(true)
    expect(testReq.rawHeaders.length).toBe(0)

    // req.trailers is an empty object
    expect(testReq.trailers).toBeDefined()
    expect(testReq.trailers).toBeInstanceOf(Object)
    expect(Object.keys(testReq.trailers).length).toBe(0)

    // req.rawTrailers is an empty array
    expect(Array.isArray(testReq.rawTrailers)).toBe(true)
    expect(testReq.rawTrailers.length).toBe(0)

    // req.setTimeout is a mocked function
    expect((testReq.setTimeout as jest.Mock).getMockName()).toBe('setTimeout mock default')

    // req.statusCode is a number
    expect(testReq.statusCode).toBe(0)

    // req.statusMessage is an empty string
    expect(testReq.statusMessage).toBe('')

    // req.destroy is a mocked function
    expect((testReq.destroy as jest.Mock).getMockName()).toBe('destroy mock default')
  })

  test('returns provided params', () => {
    const testReq = getMockReq({ params: { one: 1, two: 2 } })

    // req.params has the provided arguments
    expect(testReq.params).toBeDefined()
    expect(testReq.params).toBeInstanceOf(Object)
    expect(Object.keys(testReq.params).length).toBe(2)
    expect(testReq.params['one']).toBe(1)
    expect(testReq.params['two']).toBe(2)
  })

  test('returns provided query', () => {
    const testReq = getMockReq({ query: { three: 'three', four: 'four' } })

    // req.query has the provided arguments
    expect(testReq.query).toBeDefined()
    expect(testReq.query).toBeInstanceOf(Object)
    expect(Object.keys(testReq.query).length).toBe(2)
    expect(testReq.query['three']).toBe('three')
    expect(testReq.query['four']).toBe('four')
  })

  test('returns provided body', () => {
    const testReq = getMockReq({ body: { five: { six: 6 }, seven: [8, 9] } })

    // req.body has the provided arguments
    expect(testReq.body).toBeDefined()
    expect(testReq.body).toBeInstanceOf(Object)
    expect(Object.keys(testReq.body).length).toBe(2)
    expect(testReq.body['five']).toEqual(expect.objectContaining({ six: 6 }))
    expect(testReq.body['seven']).toEqual(expect.arrayContaining([8, 9]))
  })

  test('returns provided headers', () => {
    const testReq = getMockReq({
      headers: {
        HeaderOne: 'one',
        HeaderTwo: 'two',
        HeaderThree: 'three',
      },
    })

    // req.headers has the provided arguments
    expect(testReq.headers).toBeDefined()
    expect(testReq.headers).toBeInstanceOf(Object)
    expect(Object.keys(testReq.headers).length).toBe(3)
    expect(testReq.headers['HeaderOne']).toBe('one')
    expect(testReq.headers['HeaderTwo']).toBe('two')
    expect(testReq.headers['HeaderThree']).toBe('three')
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

    const testReq = getMockReq<CustomRequest>({
      user: mockUser,
      query: {
        id: '123',
        limit: 10,
        page: 2,
      },
    })

    // req.user has the provided arguments
    expect(testReq.user).toBeDefined()
    expect(testReq.user).toBe(mockUser)

    // req.query has the provided arguments
    expect(testReq.query).toBeDefined()
    expect(testReq.query).toBeInstanceOf(Object)
    expect(Object.keys(testReq.query).length).toBe(3)
    expect(testReq.query['id']).toBe('123')
    expect(testReq.query['limit']).toBe(10)
    expect(testReq.query['page']).toBe(2)
  })

  test('issue #6', () => {
    enum AppOS {
      Android = 1,
    }

    const testReq = getMockReq({
      query: {
        os: AppOS.Android,
        sellerId: '12345',
      },
      headers: {
        Authorization: 'token validtoken',
      },
    })

    // req.query has the provided arguments
    expect(testReq.query).toBeDefined()
    expect(testReq.query).toBeInstanceOf(Object)
    expect(Object.keys(testReq.query).length).toBe(2)
    expect(testReq.query['os']).toBe(AppOS.Android)
    expect(testReq.query['sellerId']).toBe('12345')

    // req.headers has the provided arguments
    expect(testReq.headers).toBeDefined()
    expect(testReq.headers).toBeInstanceOf(Object)
    expect(Object.keys(testReq.headers).length).toBe(1)
    expect(testReq.headers['Authorization']).toBe('token validtoken')
  })

  test('issue #27', () => {
    interface CustomRequest extends Request {
      locals: any
      customProperty: string
    }

    const testReq = getMockReq<CustomRequest>({
      locals: { var: 'hi there' },
      customProperty: 'value',
    })

    // req.locals has the provided arguments
    expect(testReq.locals).toBeDefined()
    expect(testReq.locals).toEqual({ var: 'hi there' })

    // req.customProperty has the provided arguments
    expect(testReq.customProperty).toBeDefined()
    expect(testReq.customProperty).toEqual('value')
  })
})
