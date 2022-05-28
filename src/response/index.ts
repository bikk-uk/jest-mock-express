// Types
import type { ServerResponse, OutgoingMessage, IncomingMessage } from 'http'
import type { Response } from 'express'

interface HttpOutgoingMessage {
  req?: Partial<IncomingMessage>
  chunkedEncoding?: OutgoingMessage['chunkedEncoding']
  shouldKeepAlive?: OutgoingMessage['shouldKeepAlive']
  useChunkedEncodingByDefault?: OutgoingMessage['useChunkedEncodingByDefault']
  sendDate?: OutgoingMessage['sendDate']
  finished?: OutgoingMessage['finished']
  headersSent?: OutgoingMessage['headersSent']
  connection?: Partial<OutgoingMessage['connection']>
  socket?: Partial<OutgoingMessage['socket']>
  setTimeout?: jest.Mock
  setHeader?: jest.Mock
  getHeader?: jest.Mock
  getHeaders?: jest.Mock
  getHeaderNames?: jest.Mock
  hasHeader?: jest.Mock
  removeHeader?: jest.Mock
  addTrailers?: jest.Mock
  flushHeaders?: jest.Mock

  upgrading?: boolean
}

interface HttpServerResponse extends HttpOutgoingMessage {
  statusCode?: ServerResponse['statusCode']
  statusMessage?: ServerResponse['statusMessage']
  assignSocket?: jest.Mock
  detachSocket?: jest.Mock
  writeContinue?: jest.Mock
  writeHead?: jest.Mock
  writeProcessing?: jest.Mock
}

export interface MockResponse extends HttpServerResponse {
  status?: jest.Mock
  sendStatus?: jest.Mock
  links?: jest.Mock
  send?: jest.Mock
  json?: jest.Mock
  jsonp?: jest.Mock
  sendFile?: jest.Mock
  sendfile?: jest.Mock
  download?: jest.Mock
  contentType?: jest.Mock
  type?: jest.Mock
  format?: jest.Mock
  attachment?: jest.Mock
  set?: jest.Mock
  header?: jest.Mock
  headersSent?: Response['headersSent']
  get?: jest.Mock
  clearCookie?: jest.Mock
  cookie?: jest.Mock
  location?: jest.Mock
  redirect?: jest.Mock
  render?: jest.Mock
  locals?: Partial<Response['locals']>
  charset?: Response['charset']
  vary?: jest.Mock
  app?: Partial<Response['app']>
  append?: jest.Mock
  req?: Partial<Response['req']>

  // allow custom properties to be provided
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}
