// Libraries
import { Request } from 'express'

export const getMockReq = <T extends Request>(values?: { params?: any; query?: any; body?: any }): T =>
  (({
    params: (values && values.params) || {},
    query: (values && values.query) || {},
    body: (values && values.body) || {}
  } as unknown) as T)

export default getMockReq
