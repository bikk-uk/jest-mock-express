export interface MockResponse {
  headersSent?: boolean
  charset?: string
  req?: any
  app?: any
  locals?: any
  statusCode?: number
  statusMessage?: string
  upgrading?: boolean
  chunkedEncoding?: boolean
  shouldKeepAlive?: boolean
  useChunkedEncodingByDefault?: boolean
  sendDate?: boolean
  finished?: boolean
  connection?: any
  socket?: any
  // allow custom properties to be provided
  [key: string]: any
}
