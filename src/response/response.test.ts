// Types
import type { Socket } from 'net'
import type { Response } from 'express'

// Tested Module
import getMockRes from './response'

const DEFAULT_RES_KEY_LENGTH = 53

describe('getMockRes', () => {
  test('returns expected object', () => {
    const mockRes = getMockRes()
    // the response contains values for res and next and clear functions
    expect(mockRes).toBeInstanceOf(Object)
    expect(Object.keys(mockRes).length).toBe(4)
  })

  test('the mock res is provided and contains the expected functions', () => {
    const { res } = getMockRes()

    // res contains the expected functions
    expect(res).toBeDefined()
    expect(Object.keys(res).length).toBe(DEFAULT_RES_KEY_LENGTH)

    // express - Response
    expect(typeof res.status).toBe('function')
    expect(typeof res.sendStatus).toBe('function')
    expect(typeof res.links).toBe('function')
    expect(typeof res.send).toBe('function')
    expect(typeof res.json).toBe('function')
    expect(typeof res.jsonp).toBe('function')
    expect(typeof res.sendFile).toBe('function')
    expect(typeof res.sendfile).toBe('function')
    expect(typeof res.download).toBe('function')
    expect(typeof res.contentType).toBe('function')
    expect(typeof res.type).toBe('function')
    expect(typeof res.format).toBe('function')
    expect(typeof res.attachment).toBe('function')
    expect(typeof res.set).toBe('function')
    expect(typeof res.header).toBe('function')
    expect(typeof res.get).toBe('function')
    expect(typeof res.clearCookie).toBe('function')
    expect(typeof res.cookie).toBe('function')
    expect(typeof res.location).toBe('function')
    expect(typeof res.redirect).toBe('function')
    expect(typeof res.render).toBe('function')
    expect(typeof res.vary).toBe('function')
    expect(typeof res.append).toBe('function')
    // http - ServerResponse
    expect(typeof res.end).toBe('function')
    expect(typeof res.assignSocket).toBe('function')
    expect(typeof res.detachSocket).toBe('function')
    expect(typeof res.writeContinue).toBe('function')
    expect(typeof res.writeHead).toBe('function')
    expect(typeof res.writeProcessing).toBe('function')
    // http - OutgoingMessage
    expect(typeof res.setTimeout).toBe('function')
    expect(typeof res.setHeader).toBe('function')
    expect(typeof res.getHeader).toBe('function')
    expect(typeof res.getHeaders).toBe('function')
    expect(typeof res.getHeaderNames).toBe('function')
    expect(typeof res.hasHeader).toBe('function')
    expect(typeof res.removeHeader).toBe('function')
    expect(typeof res.addTrailers).toBe('function')
    expect(typeof res.flushHeaders).toBe('function')
  })

  test('provides default for, and allows overrides for headersSent', () => {
    // default value is provided
    const { res: defaultRes } = getMockRes()
    expect(defaultRes.headersSent).toBe(false)

    // allows setting an override value
    const { res } = getMockRes({ headersSent: true })

    // does not change the core res object
    expect(res).toBeDefined()
    expect(Object.keys(res).length).toBe(DEFAULT_RES_KEY_LENGTH)

    expect(res.headersSent).toBe(true)
  })

  test('provides default for, and allows overrides for locals', () => {
    // default value is provided
    const { res: defaultRes } = getMockRes()
    expect(defaultRes.locals).toEqual({})

    // allows setting an override value
    const mockLocals = { one: 1, two: 2 }
    const { res } = getMockRes({ locals: mockLocals })

    // does not change the core res object
    expect(res).toBeDefined()
    expect(Object.keys(res).length).toBe(DEFAULT_RES_KEY_LENGTH)

    expect(res.locals).toBe(mockLocals)
  })

  test('provides default for, and allows overrides for charset', () => {
    // default value is provided
    const { res: defaultRes } = getMockRes()
    expect(defaultRes.charset).toBe('')

    // allows setting an override value
    const { res } = getMockRes({ charset: 'custom' })

    // does not change the core res object
    expect(res).toBeDefined()
    expect(Object.keys(res).length).toBe(DEFAULT_RES_KEY_LENGTH)

    expect(res.charset).toBe('custom')
  })

  test('provides default for, and allows overrides for app', () => {
    // default value is provided
    const { res: defaultRes } = getMockRes()
    expect(defaultRes.app).toEqual({})

    // allows setting an override value
    const mockApp = { one: 1, two: 2 }
    const { res } = getMockRes({ app: mockApp })

    // does not change the core res object
    expect(res).toBeDefined()
    expect(Object.keys(res).length).toBe(DEFAULT_RES_KEY_LENGTH)

    expect(res.app).toBe(mockApp)
  })

  test('provides default for, and allows overrides for req', () => {
    // default value is provided
    const { res: defaultRes } = getMockRes()
    expect(defaultRes.req).toEqual({})

    // allows setting an override value
    const mockReq = { one: 1, two: 2 }
    const { res } = getMockRes({ req: mockReq })

    // does not change the core res object
    expect(res).toBeDefined()
    expect(Object.keys(res).length).toBe(DEFAULT_RES_KEY_LENGTH)

    expect(res.req).toBe(mockReq)
  })

  test('provides default for, and allows overrides for statusCode', () => {
    // default value is provided
    const { res: defaultRes } = getMockRes()
    expect(defaultRes.statusCode).toBe(0)

    // allows setting an override value
    const { res } = getMockRes({ statusCode: 500 })

    // does not change the core res object
    expect(res).toBeDefined()
    expect(Object.keys(res).length).toBe(DEFAULT_RES_KEY_LENGTH)

    expect(res.statusCode).toBe(500)
  })

  test('provides default for, and allows overrides for statusMessage', () => {
    // default value is provided
    const { res: defaultRes } = getMockRes()
    expect(defaultRes.statusMessage).toBe('')

    // allows setting an override value
    const { res } = getMockRes({ statusMessage: 'custom' })

    // does not change the core res object
    expect(res).toBeDefined()
    expect(Object.keys(res).length).toBe(DEFAULT_RES_KEY_LENGTH)

    expect(res.statusMessage).toBe('custom')
  })

  test('provides default for, and allows overrides for upgrading', () => {
    // default value is provided
    const { res: defaultRes } = getMockRes()
    expect(defaultRes.upgrading).toBe(false)

    // allows setting an override value
    const { res } = getMockRes({ upgrading: true })

    // does not change the core res object
    expect(res).toBeDefined()
    expect(Object.keys(res).length).toBe(DEFAULT_RES_KEY_LENGTH)

    expect(res.upgrading).toBe(true)
  })

  test('provides default for, and allows overrides for chunkedEncoding', () => {
    // default value is provided
    const { res: defaultRes } = getMockRes()
    expect(defaultRes.chunkedEncoding).toBe(false)

    // allows setting an override value
    const { res } = getMockRes({ chunkedEncoding: true })

    // does not change the core res object
    expect(res).toBeDefined()
    expect(Object.keys(res).length).toBe(DEFAULT_RES_KEY_LENGTH)

    expect(res.chunkedEncoding).toBe(true)
  })

  test('provides default for, and allows overrides for shouldKeepAlive', () => {
    // default value is provided
    const { res: defaultRes } = getMockRes()
    expect(defaultRes.shouldKeepAlive).toBe(false)

    // allows setting an override value
    const { res } = getMockRes({ shouldKeepAlive: true })

    // does not change the core res object
    expect(res).toBeDefined()
    expect(Object.keys(res).length).toBe(DEFAULT_RES_KEY_LENGTH)

    expect(res.shouldKeepAlive).toBe(true)
  })

  test('provides default for, and allows overrides for useChunkedEncodingByDefault', () => {
    // default value is provided
    const { res: defaultRes } = getMockRes()
    expect(defaultRes.useChunkedEncodingByDefault).toBe(false)

    // allows setting an override value
    const { res } = getMockRes({ useChunkedEncodingByDefault: true })

    // does not change the core res object
    expect(res).toBeDefined()
    expect(Object.keys(res).length).toBe(DEFAULT_RES_KEY_LENGTH)

    expect(res.useChunkedEncodingByDefault).toBe(true)
  })

  test('provides default for, and allows overrides for sendDate', () => {
    // default value is provided
    const { res: defaultRes } = getMockRes()
    expect(defaultRes.sendDate).toBe(false)

    // allows setting an override value
    const { res } = getMockRes({ sendDate: true })

    // does not change the core res object
    expect(res).toBeDefined()
    expect(Object.keys(res).length).toBe(DEFAULT_RES_KEY_LENGTH)

    expect(res.sendDate).toBe(true)
  })

  test('provides default for, and allows overrides for finished', () => {
    // default value is provided
    const { res: defaultRes } = getMockRes()
    expect(defaultRes.finished).toBe(false)

    // allows setting an override value
    const { res } = getMockRes({ finished: true })

    // does not change the core res object
    expect(res).toBeDefined()
    expect(Object.keys(res).length).toBe(DEFAULT_RES_KEY_LENGTH)

    expect(res.finished).toBe(true)
  })

  test('provides default for, and allows overrides for connection', () => {
    // default value is provided
    const { res: defaultRes } = getMockRes()
    expect(defaultRes.connection).toEqual({})

    // allows setting an override value
    const mockConnection = { one: 1, two: 2 }
    const { res } = getMockRes({ connection: mockConnection })

    // does not change the core res object
    expect(res).toBeDefined()
    expect(Object.keys(res).length).toBe(DEFAULT_RES_KEY_LENGTH)

    expect(res.connection).toBe(mockConnection)
  })

  test('provides default for, and allows overrides for socket', () => {
    // default value is provided
    const { res: defaultRes } = getMockRes()
    expect(defaultRes.socket).toEqual({})

    // allows setting an override value
    const mockSocket = { one: 1, two: 2 }
    const { res } = getMockRes({ socket: mockSocket })

    // does not change the core res object
    expect(res).toBeDefined()
    expect(Object.keys(res).length).toBe(DEFAULT_RES_KEY_LENGTH)

    expect(res.socket).toBe(mockSocket)
  })

  test('allows custom properties', () => {
    interface User {
      id: string
      name: string
    }

    interface CustomResponse extends Response {
      user: User
    }

    const mockUser: User = {
      id: '123',
      name: 'Bob',
    }

    // default value is not provided, but is typed
    const { res: defaultRes } = getMockRes<CustomResponse>()
    expect(defaultRes.user).toBeUndefined()

    // allows setting a custom property
    const { res } = getMockRes<CustomResponse>({ sendDate: true, user: mockUser })

    // adds and extra property to the res object
    expect(res).toBeDefined()
    expect(Object.keys(res).length).toBe(DEFAULT_RES_KEY_LENGTH + 1)

    // both properties are available
    expect(res.sendDate).toBe(true)
    expect(res.user).toBe(mockUser)
  })

  test('allows locals to be typed', () => {
    interface CustomResponse extends Response {
      locals: {
        sessionId?: string
        isPremiumUser?: boolean
      }
    }

    const { res } = getMockRes<CustomResponse>({
      locals: {
        sessionId: 'abcdef',
        isPremiumUser: false,
      },
    })

    expect(res.locals).toBeDefined()
    expect(res.locals.sessionId).toBe('abcdef')
    expect(res.locals.isPremiumUser).toBe(false)
  })

  test('the mock next function is provided', () => {
    const { next } = getMockRes()

    // next is part of the mock response
    expect(next).toBeDefined()
    expect(typeof next).toBe('function')
  })

  test('the mock clear function is provided', () => {
    const { mockClear } = getMockRes()

    // a mock clear function is part of the mock response
    expect(mockClear).toBeDefined()
    expect(typeof mockClear).toBe('function')
  })

  test('the mock clear alias function is provided', () => {
    const { clearMockRes } = getMockRes()

    // a mock clear alias function is part of the mock response
    expect(clearMockRes).toBeDefined()
    expect(typeof clearMockRes).toBe('function')
  })

  test('mock clear clears all mocks', () => {
    const { res, next, mockClear } = getMockRes()

    // call all of the mock functions
    next()
    callAll(res)

    // ensure they all report as being called
    // express - Response
    expect(next as jest.Mock).toBeCalledTimes(1)
    expect(res.status as jest.Mock).toBeCalledTimes(1)
    expect(res.sendStatus as jest.Mock).toBeCalledTimes(1)
    expect(res.links as jest.Mock).toBeCalledTimes(1)
    expect(res.send as jest.Mock).toBeCalledTimes(1)
    expect(res.json as jest.Mock).toBeCalledTimes(1)
    expect(res.jsonp as jest.Mock).toBeCalledTimes(1)
    expect(res.sendFile as jest.Mock).toBeCalledTimes(1)
    expect(res.sendfile as jest.Mock).toBeCalledTimes(1)
    expect(res.download as jest.Mock).toBeCalledTimes(1)
    expect(res.contentType as jest.Mock).toBeCalledTimes(1)
    expect(res.type as jest.Mock).toBeCalledTimes(1)
    expect(res.format as jest.Mock).toBeCalledTimes(1)
    expect(res.attachment as jest.Mock).toBeCalledTimes(1)
    expect(res.set as jest.Mock).toBeCalledTimes(1)
    expect(res.header as jest.Mock).toBeCalledTimes(1)
    expect(res.get as jest.Mock).toBeCalledTimes(1)
    expect(res.clearCookie as jest.Mock).toBeCalledTimes(1)
    expect(res.cookie as jest.Mock).toBeCalledTimes(1)
    expect(res.location as jest.Mock).toBeCalledTimes(1)
    expect(res.redirect as jest.Mock).toBeCalledTimes(1)
    expect(res.render as jest.Mock).toBeCalledTimes(1)
    expect(res.vary as jest.Mock).toBeCalledTimes(1)
    expect(res.append as jest.Mock).toBeCalledTimes(1)
    // http - ServerResponse
    expect(res.end as jest.Mock).toBeCalledTimes(1)
    expect(res.assignSocket as jest.Mock).toBeCalledTimes(1)
    expect(res.detachSocket as jest.Mock).toBeCalledTimes(1)
    expect(res.writeContinue as jest.Mock).toBeCalledTimes(1)
    expect(res.writeHead as jest.Mock).toBeCalledTimes(1)
    expect(res.writeProcessing as jest.Mock).toBeCalledTimes(1)
    // http - OutgoingMessage
    expect(res.setTimeout as jest.Mock).toBeCalledTimes(1)
    expect(res.setHeader as jest.Mock).toBeCalledTimes(1)
    expect(res.getHeader as jest.Mock).toBeCalledTimes(1)
    expect(res.getHeaders as jest.Mock).toBeCalledTimes(1)
    expect(res.getHeaderNames as jest.Mock).toBeCalledTimes(1)
    expect(res.hasHeader as jest.Mock).toBeCalledTimes(1)
    expect(res.removeHeader as jest.Mock).toBeCalledTimes(1)
    expect(res.addTrailers as jest.Mock).toBeCalledTimes(1)
    expect(res.flushHeaders as jest.Mock).toBeCalledTimes(1)

    // clear the mock
    mockClear()

    // ensure they all have been cleared
    // express - Response
    expect(next as jest.Mock).not.toBeCalled()
    expect(next as jest.Mock).not.toBeCalled()
    expect(res.status as jest.Mock).not.toBeCalled()
    expect(res.sendStatus as jest.Mock).not.toBeCalled()
    expect(res.links as jest.Mock).not.toBeCalled()
    expect(res.send as jest.Mock).not.toBeCalled()
    expect(res.json as jest.Mock).not.toBeCalled()
    expect(res.jsonp as jest.Mock).not.toBeCalled()
    expect(res.sendFile as jest.Mock).not.toBeCalled()
    expect(res.sendfile as jest.Mock).not.toBeCalled()
    expect(res.download as jest.Mock).not.toBeCalled()
    expect(res.contentType as jest.Mock).not.toBeCalled()
    expect(res.type as jest.Mock).not.toBeCalled()
    expect(res.format as jest.Mock).not.toBeCalled()
    expect(res.attachment as jest.Mock).not.toBeCalled()
    expect(res.set as jest.Mock).not.toBeCalled()
    expect(res.header as jest.Mock).not.toBeCalled()
    expect(res.get as jest.Mock).not.toBeCalled()
    expect(res.clearCookie as jest.Mock).not.toBeCalled()
    expect(res.cookie as jest.Mock).not.toBeCalled()
    expect(res.location as jest.Mock).not.toBeCalled()
    expect(res.redirect as jest.Mock).not.toBeCalled()
    expect(res.render as jest.Mock).not.toBeCalled()
    expect(res.vary as jest.Mock).not.toBeCalled()
    expect(res.append as jest.Mock).not.toBeCalled()
    // http - ServerResponse
    expect(res.end as jest.Mock).not.toBeCalled()
    expect(res.assignSocket as jest.Mock).not.toBeCalled()
    expect(res.detachSocket as jest.Mock).not.toBeCalled()
    expect(res.writeContinue as jest.Mock).not.toBeCalled()
    expect(res.writeHead as jest.Mock).not.toBeCalled()
    expect(res.writeProcessing as jest.Mock).not.toBeCalled()
    // http - OutgoingMessage
    expect(res.setTimeout as jest.Mock).not.toBeCalled()
    expect(res.setHeader as jest.Mock).not.toBeCalled()
    expect(res.getHeader as jest.Mock).not.toBeCalled()
    expect(res.getHeaders as jest.Mock).not.toBeCalled()
    expect(res.getHeaderNames as jest.Mock).not.toBeCalled()
    expect(res.hasHeader as jest.Mock).not.toBeCalled()
    expect(res.removeHeader as jest.Mock).not.toBeCalled()
    expect(res.addTrailers as jest.Mock).not.toBeCalled()
    expect(res.flushHeaders as jest.Mock).not.toBeCalled()
  })

  test('clearMockRes clears all mocks', () => {
    const { res, next, clearMockRes } = getMockRes()

    // call all of the mock functions
    next()
    callAll(res)

    // ensure they all report as being called
    // express - Response
    expect(next as jest.Mock).toBeCalledTimes(1)
    expect(res.status as jest.Mock).toBeCalledTimes(1)
    expect(res.sendStatus as jest.Mock).toBeCalledTimes(1)
    expect(res.links as jest.Mock).toBeCalledTimes(1)
    expect(res.send as jest.Mock).toBeCalledTimes(1)
    expect(res.json as jest.Mock).toBeCalledTimes(1)
    expect(res.jsonp as jest.Mock).toBeCalledTimes(1)
    expect(res.sendFile as jest.Mock).toBeCalledTimes(1)
    expect(res.sendfile as jest.Mock).toBeCalledTimes(1)
    expect(res.download as jest.Mock).toBeCalledTimes(1)
    expect(res.contentType as jest.Mock).toBeCalledTimes(1)
    expect(res.type as jest.Mock).toBeCalledTimes(1)
    expect(res.format as jest.Mock).toBeCalledTimes(1)
    expect(res.attachment as jest.Mock).toBeCalledTimes(1)
    expect(res.set as jest.Mock).toBeCalledTimes(1)
    expect(res.header as jest.Mock).toBeCalledTimes(1)
    expect(res.get as jest.Mock).toBeCalledTimes(1)
    expect(res.clearCookie as jest.Mock).toBeCalledTimes(1)
    expect(res.cookie as jest.Mock).toBeCalledTimes(1)
    expect(res.location as jest.Mock).toBeCalledTimes(1)
    expect(res.redirect as jest.Mock).toBeCalledTimes(1)
    expect(res.render as jest.Mock).toBeCalledTimes(1)
    expect(res.vary as jest.Mock).toBeCalledTimes(1)
    expect(res.append as jest.Mock).toBeCalledTimes(1)
    // http - ServerResponse
    expect(res.end as jest.Mock).toBeCalledTimes(1)
    expect(res.assignSocket as jest.Mock).toBeCalledTimes(1)
    expect(res.detachSocket as jest.Mock).toBeCalledTimes(1)
    expect(res.writeContinue as jest.Mock).toBeCalledTimes(1)
    expect(res.writeHead as jest.Mock).toBeCalledTimes(1)
    expect(res.writeProcessing as jest.Mock).toBeCalledTimes(1)
    // http - OutgoingMessage
    expect(res.setTimeout as jest.Mock).toBeCalledTimes(1)
    expect(res.setHeader as jest.Mock).toBeCalledTimes(1)
    expect(res.getHeader as jest.Mock).toBeCalledTimes(1)
    expect(res.getHeaders as jest.Mock).toBeCalledTimes(1)
    expect(res.getHeaderNames as jest.Mock).toBeCalledTimes(1)
    expect(res.hasHeader as jest.Mock).toBeCalledTimes(1)
    expect(res.removeHeader as jest.Mock).toBeCalledTimes(1)
    expect(res.addTrailers as jest.Mock).toBeCalledTimes(1)
    expect(res.flushHeaders as jest.Mock).toBeCalledTimes(1)

    // clear the mock
    clearMockRes()

    // ensure they all have been cleared
    // express - Response
    expect(next as jest.Mock).not.toBeCalled()
    expect(next as jest.Mock).not.toBeCalled()
    expect(res.status as jest.Mock).not.toBeCalled()
    expect(res.sendStatus as jest.Mock).not.toBeCalled()
    expect(res.links as jest.Mock).not.toBeCalled()
    expect(res.send as jest.Mock).not.toBeCalled()
    expect(res.json as jest.Mock).not.toBeCalled()
    expect(res.jsonp as jest.Mock).not.toBeCalled()
    expect(res.sendFile as jest.Mock).not.toBeCalled()
    expect(res.sendfile as jest.Mock).not.toBeCalled()
    expect(res.download as jest.Mock).not.toBeCalled()
    expect(res.contentType as jest.Mock).not.toBeCalled()
    expect(res.type as jest.Mock).not.toBeCalled()
    expect(res.format as jest.Mock).not.toBeCalled()
    expect(res.attachment as jest.Mock).not.toBeCalled()
    expect(res.set as jest.Mock).not.toBeCalled()
    expect(res.header as jest.Mock).not.toBeCalled()
    expect(res.get as jest.Mock).not.toBeCalled()
    expect(res.clearCookie as jest.Mock).not.toBeCalled()
    expect(res.cookie as jest.Mock).not.toBeCalled()
    expect(res.location as jest.Mock).not.toBeCalled()
    expect(res.redirect as jest.Mock).not.toBeCalled()
    expect(res.render as jest.Mock).not.toBeCalled()
    expect(res.vary as jest.Mock).not.toBeCalled()
    expect(res.append as jest.Mock).not.toBeCalled()
    // http - ServerResponse
    expect(res.end as jest.Mock).not.toBeCalled()
    expect(res.assignSocket as jest.Mock).not.toBeCalled()
    expect(res.detachSocket as jest.Mock).not.toBeCalled()
    expect(res.writeContinue as jest.Mock).not.toBeCalled()
    expect(res.writeHead as jest.Mock).not.toBeCalled()
    expect(res.writeProcessing as jest.Mock).not.toBeCalled()
    // http - OutgoingMessage
    expect(res.setTimeout as jest.Mock).not.toBeCalled()
    expect(res.setHeader as jest.Mock).not.toBeCalled()
    expect(res.getHeader as jest.Mock).not.toBeCalled()
    expect(res.getHeaders as jest.Mock).not.toBeCalled()
    expect(res.getHeaderNames as jest.Mock).not.toBeCalled()
    expect(res.hasHeader as jest.Mock).not.toBeCalled()
    expect(res.removeHeader as jest.Mock).not.toBeCalled()
    expect(res.addTrailers as jest.Mock).not.toBeCalled()
    expect(res.flushHeaders as jest.Mock).not.toBeCalled()
  })

  test('issue #32', () => {
    const statusCode = 404
    const { res } = getMockRes()

    res.status(statusCode).end()

    // status is called
    expect(res.status).toBeCalledTimes(1)
    expect(res.status).toBeCalledWith(statusCode)
    // chained end is called
    expect(res.end).toBeCalledTimes(1)
    expect(res.end).toBeCalledWith()
  })
})

function callAll(res: Response) {
  // express - Response
  res.status(123)
  res.sendStatus(123)
  res.links({})
  res.send()
  res.json()
  res.jsonp()
  res.sendFile('test')
  res.sendfile('test')
  res.download('test')
  res.contentType('test')
  res.type('test')
  res.format({})
  res.attachment()
  res.set({})
  res.header({})
  res.get('test')
  res.clearCookie('test')
  res.cookie('test', 'test')
  res.location('test')
  res.redirect('test')
  res.render('test')
  res.vary('test')
  res.append('test')
  // http - ServerResponse
  res.end()
  res.assignSocket({} as Socket)
  res.detachSocket({} as Socket)
  res.writeContinue()
  res.writeHead(123)
  res.writeProcessing()
  // http - OutgoingMessage
  res.setTimeout(123)
  res.setHeader('test', 'test')
  res.getHeader('test')
  res.getHeaders()
  res.getHeaderNames()
  res.hasHeader('test')
  res.removeHeader('test')
  res.addTrailers([])
  res.flushHeaders()
}
