// Libraries
import { Response, NextFunction } from 'express'

/**
 * Will return a typed and mocked version of key Express components.
 * mockClear() or clearMockRes() will clear all internal jest functions.
 */
export const getMockRes = (): {
  res: Response
  next: NextFunction
  mockClear: () => void
  clearMockRes: () => void
} => {
  const next = jest.fn()
  const response = {
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
    headersSent: false,
    app: {},
    req: {},
  }

  // for the function that are chainable, return the response
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

  /**
   * these are not required to be chainable
   * - get
   * - render
   * - sendFile
   * - sendfile
   * - download
   * - redirect
   */

  const clearAllMocks = (): void => {
    next.mockClear()
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
  }

  return {
    res: (response as unknown) as Response,
    next: next as NextFunction,
    mockClear: clearAllMocks,
    clearMockRes: clearAllMocks,
  }
}

export default getMockRes
