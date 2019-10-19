// Libraries
import { Response, NextFunction } from 'express'

/**
 * Will return a typed and mocked version of key Express components.
 * mockClear() will clear all internal jest functions.
 */
export const getMockExpress = <T extends Response>(): {
  res: T
  next: NextFunction
  mockClear: () => void
} => {
  const mockJson = jest.fn()
  const mockNext = jest.fn()

  return {
    res: ({
      json: mockJson
    } as unknown) as T,
    next: mockNext as NextFunction,
    mockClear: (): void => {
      mockJson.mockClear()
      mockNext.mockClear()
    }
  }
}

export default getMockExpress
