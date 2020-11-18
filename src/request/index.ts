// Types
import { MediaType } from 'express-serve-static-core'

interface MockIncomingMessage {
  aborted?: boolean
  httpVersion?: string
  httpVersionMajor?: number
  httpVersionMinor?: number
  complete?: boolean
  connection?: any
  socket?: any
  headers?: any
  rawHeaders?: string[]
  trailers?: { [key: string]: string | undefined }
  rawTrailers?: string[]
  setTimeout?: any
  statusCode?: number
  statusMessage?: string
  destroy?: any
}

export interface MockRequest extends MockIncomingMessage {
  params?: any
  query?: any
  body?: any
  cookies?: any
  method?: string
  protocol?: string
  secure?: boolean
  ip?: string
  ips?: string[]
  subdomains?: string[]
  path?: string
  hostname?: string
  host?: string
  fresh?: boolean
  stale?: boolean
  xhr?: boolean
  route?: any
  signedCookies?: any
  originalUrl?: string
  url?: string
  baseUrl?: string
  accepted?: MediaType[]
  get?: any
  header?: any
  accepts?: any
  acceptsCharsets?: any
  acceptsEncodings?: any
  acceptsLanguages?: any
  range?: any
  param?: any
  is?: any
  app?: any
  res?: any
  next?: any
  // allow custom properties to be provided
  [key: string]: any
}
