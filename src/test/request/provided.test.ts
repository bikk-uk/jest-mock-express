// Types
import type { Request } from 'express-serve-static-core'

// Helpers
import {
  providedBoolean,
  providedFunction,
  providedMediaTypeArray,
  providedNumber,
  providedObject,
  providedParams,
  providedString,
  providedStringArray,
  providedStringObject,
} from '../helpers/provided'

// Tested Module
import getMockReq from '../../request/request'

describe('request - Provided (accepts arguments and returns expected values)', () => {
  test('req.params can be provided', () => {
    const req = getMockReq({ params: providedParams })

    expect(req.params).toBeDefined()
    expect(req.params).toBe(providedParams)
  })

  test('req.query can be provided', () => {
    const req = getMockReq({ query: providedObject })

    expect(req.query).toBeDefined()
    expect(req.query).toBe(providedObject)
  })

  test('req.body can be provided', () => {
    const req = getMockReq({ body: providedObject })

    expect(req.body).toBeDefined()
    expect(req.body).toBe(providedObject)
  })

  test('req.cookies can be provided', () => {
    const req = getMockReq({ cookies: providedObject })

    expect(req.cookies).toBeDefined()
    expect(req.cookies).toBe(providedObject)
  })

  test('req.method can be provided', () => {
    const req = getMockReq({ method: providedString })

    expect(req.method).toBeDefined()
    expect(req.method).toBe(providedString)
  })

  test('req.protocol can be provided', () => {
    const req = getMockReq({ protocol: providedString })

    expect(req.protocol).toBeDefined()
    expect(req.protocol).toBe(providedString)
  })

  test('req.secure can be provided', () => {
    const req = getMockReq({ secure: providedBoolean })

    expect(req.secure).toBeDefined()
    expect(req.secure).toBe(providedBoolean)
  })

  test('req.ip can be provided', () => {
    const req = getMockReq({ ip: providedString })

    expect(req.ip).toBeDefined()
    expect(req.ip).toBe(providedString)
  })

  test('req.ips can be provided', () => {
    const req = getMockReq({ ips: providedStringArray })

    expect(req.ips).toBeDefined()
    expect(req.ips).toBe(providedStringArray)
  })

  test('req.ips can be provided', () => {
    const req = getMockReq({ subdomains: providedStringArray })

    expect(req.subdomains).toBeDefined()
    expect(req.subdomains).toBe(providedStringArray)
  })

  test('req.path can be provided', () => {
    const req = getMockReq({ path: providedString })

    expect(req.path).toBeDefined()
    expect(req.path).toBe(providedString)
  })

  test('req.hostname can be provided', () => {
    const req = getMockReq({ hostname: providedString })

    expect(req.hostname).toBeDefined()
    expect(req.hostname).toBe(providedString)
  })

  test('req.host can be provided', () => {
    const req = getMockReq({ host: providedString })

    expect(req.host).toBeDefined()
    expect(req.host).toBe(providedString)
  })

  test('req.fresh can be provided', () => {
    const req = getMockReq({ fresh: providedBoolean })

    expect(req.fresh).toBeDefined()
    expect(req.fresh).toBe(providedBoolean)
  })

  test('req.stale can be provided', () => {
    const req = getMockReq({ stale: providedBoolean })

    expect(req.stale).toBeDefined()
    expect(req.stale).toBe(providedBoolean)
  })

  test('req.xhr can be provided', () => {
    const req = getMockReq({ xhr: providedBoolean })

    expect(req.xhr).toBeDefined()
    expect(req.xhr).toBe(providedBoolean)
  })

  test('req.route can be provided', () => {
    const req = getMockReq({ route: providedObject })

    expect(req.route).toBeDefined()
    expect(req.route).toBe(providedObject)
  })

  test('req.signedCookies can be provided', () => {
    const req = getMockReq({ signedCookies: providedObject })

    expect(req.signedCookies).toBeDefined()
    expect(req.signedCookies).toBe(providedObject)
  })

  test('req.originalUrl can be provided', () => {
    const req = getMockReq({ originalUrl: providedString })

    expect(req.originalUrl).toBeDefined()
    expect(req.originalUrl).toBe(providedString)
  })

  test('req.url can be provided', () => {
    const req = getMockReq({ url: providedString })

    expect(req.url).toBeDefined()
    expect(req.url).toBe(providedString)
  })

  test('req.baseUrl can be provided', () => {
    const req = getMockReq({ baseUrl: providedString })

    expect(req.baseUrl).toBeDefined()
    expect(req.baseUrl).toBe(providedString)
  })

  test('req.accepted can be provided', () => {
    const req = getMockReq({ accepted: providedMediaTypeArray })

    expect(req.accepted).toBeDefined()
    expect(req.accepted).toBe(providedMediaTypeArray)
  })

  test('req.get can be provided', () => {
    const req = getMockReq({ get: providedFunction })

    expect(req.get).toBeDefined()
    expect(req.get).toBe(providedFunction)
  })

  test('req.header can be provided', () => {
    const req = getMockReq({ header: providedFunction })

    expect(req.header).toBeDefined()
    expect(req.header).toBe(providedFunction)
  })

  test('req.accepts can be provided', () => {
    const req = getMockReq({ accepts: providedFunction })

    expect(req.accepts).toBeDefined()
    expect(req.accepts).toBe(providedFunction)
  })

  test('req.acceptsCharsets can be provided', () => {
    const req = getMockReq({ acceptsCharsets: providedFunction })

    expect(req.acceptsCharsets).toBeDefined()
    expect(req.acceptsCharsets).toBe(providedFunction)
  })

  test('req.acceptsEncodings can be provided', () => {
    const req = getMockReq({ acceptsEncodings: providedFunction })

    expect(req.acceptsEncodings).toBeDefined()
    expect(req.acceptsEncodings).toBe(providedFunction)
  })

  test('req.acceptsLanguages can be provided', () => {
    const req = getMockReq({ acceptsLanguages: providedFunction })

    expect(req.acceptsLanguages).toBeDefined()
    expect(req.acceptsLanguages).toBe(providedFunction)
  })

  test('req.range can be provided', () => {
    const req = getMockReq({ range: providedFunction })

    expect(req.range).toBeDefined()
    expect(req.range).toBe(providedFunction)
  })

  test('req.param can be provided', () => {
    const req = getMockReq({ param: providedFunction })

    expect(req.param).toBeDefined()
    expect(req.param).toBe(providedFunction)
  })

  test('req.is can be provided', () => {
    const req = getMockReq({ is: providedFunction })

    expect(req.is).toBeDefined()
    expect(req.is).toBe(providedFunction)
  })

  test('req.app can be provided', () => {
    const req = getMockReq({ app: providedObject as unknown as Request['app'] })

    expect(req.app).toBeDefined()
    expect(req.app).toBe(providedObject)
  })

  test('req.res can be provided', () => {
    const req = getMockReq({ res: providedObject as unknown as Request['res'] })

    expect(req.res).toBeDefined()
    expect(req.res).toBe(providedObject)
  })

  test('req.next can be provided', () => {
    const req = getMockReq({ next: providedFunction })

    expect(req.next).toBeDefined()
    expect(req.next).toBe(providedFunction)
  })

  test('req.aborted can be provided', () => {
    const req = getMockReq({ aborted: providedBoolean })

    expect(req.aborted).toBeDefined()
    expect(req.aborted).toBe(providedBoolean)
  })

  test('req.httpVersion can be provided', () => {
    const req = getMockReq({ httpVersion: providedString })

    expect(req.httpVersion).toBeDefined()
    expect(req.httpVersion).toBe(providedString)
  })

  test('req.httpVersionMajor can be provided', () => {
    const req = getMockReq({ httpVersionMajor: providedNumber })

    expect(req.httpVersionMajor).toBeDefined()
    expect(req.httpVersionMajor).toBe(providedNumber)
  })

  test('req.httpVersionMinor can be provided', () => {
    const req = getMockReq({ httpVersionMinor: providedNumber })

    expect(req.httpVersionMinor).toBeDefined()
    expect(req.httpVersionMinor).toBe(providedNumber)
  })

  test('req.complete can be provided', () => {
    const req = getMockReq({ complete: providedBoolean })

    expect(req.complete).toBeDefined()
    expect(req.complete).toBe(providedBoolean)
  })

  test('req.connection can be provided', () => {
    const req = getMockReq({ connection: providedObject as unknown as Request['connection'] })

    expect(req.connection).toBeDefined()
    expect(req.connection).toBe(providedObject)
  })

  test('req.socket can be provided', () => {
    const req = getMockReq({ socket: providedObject as unknown as Request['socket'] })

    expect(req.socket).toBeDefined()
    expect(req.socket).toBe(providedObject)
  })

  test('req.headers can be provided', () => {
    const req = getMockReq({ headers: providedObject as unknown as Request['headers'] })

    expect(req.headers).toBeDefined()
    expect(req.headers).toBe(providedObject)
  })

  test('req.rawHeaders can be provided', () => {
    const req = getMockReq({ rawHeaders: providedStringArray })

    expect(req.rawHeaders).toBeDefined()
    expect(req.rawHeaders).toBe(providedStringArray)
  })

  test('req.trailers can be provided', () => {
    const req = getMockReq({ trailers: providedStringObject })

    expect(req.trailers).toBeDefined()
    expect(req.trailers).toBe(providedStringObject)
  })

  test('req.rawTrailers can be provided', () => {
    const req = getMockReq({ rawTrailers: providedStringArray })

    expect(req.rawTrailers).toBeDefined()
    expect(req.rawTrailers).toBe(providedStringArray)
  })

  test('req.setTimeout can be provided', () => {
    const req = getMockReq({ setTimeout: providedFunction })

    expect(req.setTimeout).toBeDefined()
    expect(req.setTimeout).toBe(providedFunction)
  })

  test('req.statusCode can be provided', () => {
    const req = getMockReq({ statusCode: providedNumber })

    expect(req.statusCode).toBeDefined()
    expect(req.statusCode).toBe(providedNumber)
  })

  test('req.statusMessage can be provided', () => {
    const req = getMockReq({ statusMessage: providedString })

    expect(req.statusMessage).toBeDefined()
    expect(req.statusMessage).toBe(providedString)
  })

  test('req.destroy can be provided', () => {
    const req = getMockReq({ destroy: providedFunction })

    expect(req.destroy).toBeDefined()
    expect(req.destroy).toBe(providedFunction)
  })

  test('req.readable can be provided', () => {
    const req = getMockReq({ readable: providedBoolean })

    expect(req.readable).toBeDefined()
    expect(req.readable).toBe(providedBoolean)
  })

  test('req.readableHighWaterMark can be provided', () => {
    const req = getMockReq({ readableHighWaterMark: providedNumber })

    expect(req.readableHighWaterMark).toBeDefined()
    expect(req.readableHighWaterMark).toBe(providedNumber)
  })

  test('req.readableLength can be provided', () => {
    const req = getMockReq({ readableLength: providedNumber })

    expect(req.readableLength).toBeDefined()
    expect(req.readableLength).toBe(providedNumber)
  })

  test('req.readableObjectMode can be provided', () => {
    const req = getMockReq({ readableObjectMode: providedBoolean })

    expect(req.readableObjectMode).toBeDefined()
    expect(req.readableObjectMode).toBe(providedBoolean)
  })

  test('req.destroyed can be provided', () => {
    const req = getMockReq({ destroyed: providedBoolean })

    expect(req.destroyed).toBeDefined()
    expect(req.destroyed).toBe(providedBoolean)
  })

  test('req.constructor can be provided', () => {
    const req = getMockReq({ constructor: providedFunction })

    expect(req.constructor).toBeDefined()
    expect(req.constructor).toBe(providedFunction)
  })

  test('req._read can be provided', () => {
    const req = getMockReq({ _read: providedFunction })

    expect(req._read).toBeDefined()
    expect(req._read).toBe(providedFunction)
  })

  test('req.read can be provided', () => {
    const req = getMockReq({ read: providedFunction })

    expect(req.read).toBeDefined()
    expect(req.read).toBe(providedFunction)
  })

  test('req.setEncoding can be provided', () => {
    const req = getMockReq({ setEncoding: providedFunction })

    expect(req.setEncoding).toBeDefined()
    expect(req.setEncoding).toBe(providedFunction)
  })

  test('req.pause can be provided', () => {
    const req = getMockReq({ pause: providedFunction })

    expect(req.pause).toBeDefined()
    expect(req.pause).toBe(providedFunction)
  })

  test('req.resume can be provided', () => {
    const req = getMockReq({ resume: providedFunction })

    expect(req.resume).toBeDefined()
    expect(req.resume).toBe(providedFunction)
  })

  test('req.isPaused can be provided', () => {
    const req = getMockReq({ isPaused: providedFunction })

    expect(req.isPaused).toBeDefined()
    expect(req.isPaused).toBe(providedFunction)
  })

  test('req.unpipe can be provided', () => {
    const req = getMockReq({ unpipe: providedFunction })

    expect(req.unpipe).toBeDefined()
    expect(req.unpipe).toBe(providedFunction)
  })

  test('req.unshift can be provided', () => {
    const req = getMockReq({ unshift: providedFunction })

    expect(req.unshift).toBeDefined()
    expect(req.unshift).toBe(providedFunction)
  })

  test('req.wrap can be provided', () => {
    const req = getMockReq({ wrap: providedFunction })

    expect(req.wrap).toBeDefined()
    expect(req.wrap).toBe(providedFunction)
  })

  test('req.push can be provided', () => {
    const req = getMockReq({ push: providedFunction })

    expect(req.push).toBeDefined()
    expect(req.push).toBe(providedFunction)
  })

  test('req._destroy can be provided', () => {
    const req = getMockReq({ _destroy: providedFunction })

    expect(req._destroy).toBeDefined()
    expect(req._destroy).toBe(providedFunction)
  })

  test('req.addListener can be provided', () => {
    const req = getMockReq({ addListener: providedFunction })

    expect(req.addListener).toBeDefined()
    expect(req.addListener).toBe(providedFunction)
  })

  test('req.emit can be provided', () => {
    const req = getMockReq({ emit: providedFunction })

    expect(req.emit).toBeDefined()
    expect(req.emit).toBe(providedFunction)
  })

  test('req.on can be provided', () => {
    const req = getMockReq({ on: providedFunction })

    expect(req.on).toBeDefined()
    expect(req.on).toBe(providedFunction)
  })

  test('req.once can be provided', () => {
    const req = getMockReq({ once: providedFunction })

    expect(req.once).toBeDefined()
    expect(req.once).toBe(providedFunction)
  })

  test('req.prependListener can be provided', () => {
    const req = getMockReq({ prependListener: providedFunction })

    expect(req.prependListener).toBeDefined()
    expect(req.prependListener).toBe(providedFunction)
  })

  test('req.prependOnceListener can be provided', () => {
    const req = getMockReq({ prependOnceListener: providedFunction })

    expect(req.prependOnceListener).toBeDefined()
    expect(req.prependOnceListener).toBe(providedFunction)
  })

  test('req.removeListener can be provided', () => {
    const req = getMockReq({ removeListener: providedFunction })

    expect(req.removeListener).toBeDefined()
    expect(req.removeListener).toBe(providedFunction)
  })

  test('req.destroy can be provided', () => {
    const req = getMockReq({ destroy: providedFunction })

    expect(req.destroy).toBeDefined()
    expect(req.destroy).toBe(providedFunction)
  })

  test('it allows custom properties', () => {
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
})
