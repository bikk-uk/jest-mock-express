// Helpers
import { callAllFunctions } from '../helpers/response'

// Tested Module
import getMockRes from '../../response/response'

export const DEFAULT_RES_KEY_LENGTH = 53

describe('response - General', () => {
  test('the mock res is provided and contains the expected functions', () => {
    const { res } = getMockRes()

    // res contains the expected functions
    expect(res).toBeDefined()
    expect(Object.keys(res).length).toBe(DEFAULT_RES_KEY_LENGTH)
  })
})

describe('response - returns the expected object', () => {
  test('it contains the correct amount of properties', () => {
    const mockRes = getMockRes()

    // the response contains values for res and next and clear functions
    expect(mockRes).toBeInstanceOf(Object)
    expect(Object.keys(mockRes).length).toBe(4)
  })

  test('the res object is provided', () => {
    const mockRes = getMockRes()

    expect(mockRes.res).toBeDefined()
    expect(mockRes.res).toBeInstanceOf(Object)
  })

  test('the mock next function is provided', () => {
    const { next } = getMockRes()

    expect(next).toBeDefined()
    expect(typeof next).toBe('function')
  })

  test('the mock next function can be called', () => {
    const { next } = getMockRes()

    next()

    expect(next).toBeCalledTimes(1)
  })

  test('the mock clear function is provided', () => {
    const { mockClear } = getMockRes()

    expect(mockClear).toBeDefined()
    expect(typeof mockClear).toBe('function')
  })

  test('the mock clear alias function is provided', () => {
    const { clearMockRes } = getMockRes()

    expect(clearMockRes).toBeDefined()
    expect(typeof clearMockRes).toBe('function')
  })
})

describe('response - the mock functions can be cleared', () => {
  test('mock clear clears all mocks', () => {
    const { res, next, mockClear } = getMockRes()

    // call all of the mock functions
    next()
    callAllFunctions(res)

    // ensure they all report as being called

    // express.Response
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

    // http. ServerResponse
    expect(res.end as jest.Mock).toBeCalledTimes(1)
    expect(res.assignSocket as jest.Mock).toBeCalledTimes(1)
    expect(res.detachSocket as jest.Mock).toBeCalledTimes(1)
    expect(res.writeContinue as jest.Mock).toBeCalledTimes(1)
    expect(res.writeHead as jest.Mock).toBeCalledTimes(1)
    expect(res.writeProcessing as jest.Mock).toBeCalledTimes(1)

    // http.OutgoingMessage
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

    // express.Response
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

    // http.ServerResponse
    expect(res.end as jest.Mock).not.toBeCalled()
    expect(res.assignSocket as jest.Mock).not.toBeCalled()
    expect(res.detachSocket as jest.Mock).not.toBeCalled()
    expect(res.writeContinue as jest.Mock).not.toBeCalled()
    expect(res.writeHead as jest.Mock).not.toBeCalled()
    expect(res.writeProcessing as jest.Mock).not.toBeCalled()

    // http.OutgoingMessage
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
    callAllFunctions(res)

    // ensure they all report as being called

    // express.Response
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

    // http.ServerResponse
    expect(res.end as jest.Mock).toBeCalledTimes(1)
    expect(res.assignSocket as jest.Mock).toBeCalledTimes(1)
    expect(res.detachSocket as jest.Mock).toBeCalledTimes(1)
    expect(res.writeContinue as jest.Mock).toBeCalledTimes(1)
    expect(res.writeHead as jest.Mock).toBeCalledTimes(1)
    expect(res.writeProcessing as jest.Mock).toBeCalledTimes(1)

    // http.OutgoingMessage
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

    // express.Response
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

    // http.ServerResponse
    expect(res.end as jest.Mock).not.toBeCalled()
    expect(res.assignSocket as jest.Mock).not.toBeCalled()
    expect(res.detachSocket as jest.Mock).not.toBeCalled()
    expect(res.writeContinue as jest.Mock).not.toBeCalled()
    expect(res.writeHead as jest.Mock).not.toBeCalled()
    expect(res.writeProcessing as jest.Mock).not.toBeCalled()

    // http.OutgoingMessage
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
})
