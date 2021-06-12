// Libraries
import { Response, NextFunction } from 'express'

// Types
import type { MockResponse } from './index'

/**
 * Returns a mocked version of key **Express** components, including:
 * - a mocked **Express** `Response`, with mocked functions (chainable) and default values.
 * - a mocked `next()` convenience function.
 * - `mockClear()` to clear all internal **Jest** functions including `next()`
 * - `clearMockRes()` an alias for `mockClear()`
 */
export const getMockRes = <T extends Response>(
  values: MockResponse = {},
): {
  res: T
  next: NextFunction
  mockClear: () => void
  clearMockRes: () => void
} => {
  const next = jest.fn()
  const {
    headersSent = false,
    locals = {},
    charset = '',
    app = {},
    req = {},
    statusCode = 0,
    statusMessage = '',
    upgrading = false,
    chunkedEncoding = false,
    shouldKeepAlive = false,
    useChunkedEncodingByDefault = false,
    sendDate = false,
    finished = false,
    connection = {},
    socket = {},
    ...extraProvidedValues
  } = values
  const response = {
    // express - Response
    status: jest.fn(),
    sendStatus: jest.fn(),
    links: jest.fn(),
    send: jest.fn(),
    json: jest.fn(),
    jsonp: jest.fn(),
    sendFile: jest.fn(),
    sendfile: jest.fn(),
    download: jest.fn(),
    contentType: jest.fn(),
    type: jest.fn(),
    format: jest.fn(),
    attachment: jest.fn(),
    set: jest.fn(),
    header: jest.fn(),
    get: jest.fn(),
    clearCookie: jest.fn(),
    cookie: jest.fn(),
    location: jest.fn(),
    redirect: jest.fn(),
    render: jest.fn(),
    vary: jest.fn(),
    append: jest.fn(),
    headersSent,
    locals,
    charset,
    app,
    req,
    // http - ServerResponse
    end: jest.fn(),
    assignSocket: jest.fn(),
    detachSocket: jest.fn(),
    writeContinue: jest.fn(),
    writeHead: jest.fn(),
    writeProcessing: jest.fn(),
    statusCode,
    statusMessage,
    // http - OutgoingMessage
    setTimeout: jest.fn(),
    setHeader: jest.fn(),
    getHeader: jest.fn(),
    getHeaders: jest.fn(),
    getHeaderNames: jest.fn(),
    hasHeader: jest.fn(),
    removeHeader: jest.fn(),
    addTrailers: jest.fn(),
    flushHeaders: jest.fn(),
    upgrading,
    chunkedEncoding,
    shouldKeepAlive,
    useChunkedEncodingByDefault,
    sendDate,
    finished,
    connection,
    socket,
    // custom values
    ...extraProvidedValues,
  }

  // express - Response - chainable functions
  response.status.mockReturnValue(response)
  response.sendStatus.mockReturnValue(response)
  response.links.mockReturnValue(response)
  response.send.mockReturnValue(response)
  response.json.mockReturnValue(response)
  response.jsonp.mockReturnValue(response)
  response.contentType.mockReturnValue(response)
  response.type.mockReturnValue(response)
  response.format.mockReturnValue(response)
  response.attachment.mockReturnValue(response)
  response.set.mockReturnValue(response)
  response.header.mockReturnValue(response)
  response.clearCookie.mockReturnValue(response)
  response.cookie.mockReturnValue(response)
  response.location.mockReturnValue(response)
  response.vary.mockReturnValue(response)
  response.append.mockReturnValue(response)
  // http - ServerResponse - chainable functions
  response.writeHead.mockReturnValue(response)
  // http - OutgoingMessage - chainable functions
  response.setTimeout.mockReturnValue(response)

  const clearAllMocks = (): void => {
    next.mockClear()
    // express - Response
    response.status.mockClear()
    response.sendStatus.mockClear()
    response.links.mockClear()
    response.send.mockClear()
    response.json.mockClear()
    response.jsonp.mockClear()
    response.sendFile.mockClear()
    response.sendfile.mockClear()
    response.download.mockClear()
    response.contentType.mockClear()
    response.type.mockClear()
    response.format.mockClear()
    response.attachment.mockClear()
    response.set.mockClear()
    response.header.mockClear()
    response.get.mockClear()
    response.clearCookie.mockClear()
    response.cookie.mockClear()
    response.location.mockClear()
    response.redirect.mockClear()
    response.render.mockClear()
    response.vary.mockClear()
    response.append.mockClear()
    // http - ServerResponse
    response.end.mockClear()
    response.assignSocket.mockClear()
    response.detachSocket.mockClear()
    response.writeContinue.mockClear()
    response.writeHead.mockClear()
    response.writeProcessing.mockClear()
    // http - OutgoingMessage
    response.setTimeout.mockClear()
    response.setHeader.mockClear()
    response.getHeader.mockClear()
    response.getHeaders.mockClear()
    response.getHeaderNames.mockClear()
    response.hasHeader.mockClear()
    response.removeHeader.mockClear()
    response.addTrailers.mockClear()
    response.flushHeaders.mockClear()
  }

  return {
    res: response as unknown as T,
    next: next as NextFunction,
    mockClear: clearAllMocks,
    clearMockRes: clearAllMocks,
  }
}

export default getMockRes
