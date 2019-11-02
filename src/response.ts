// Libraries
import { Response, NextFunction } from 'express'

/**
 * Will return a typed and mocked version of key Express components.
 * mockClear() or clearMockRes() will clear all internal jest functions.
 */
export const getMockRes = <T extends Response>(): {
  res: T
  next: NextFunction
  mockClear: () => void
  clearMockRes: () => void
} => {
  const mockJson = jest.fn()
  const mockNext = jest.fn()

  const clearAllMocks = (): void => {
    mockJson.mockClear()
    mockNext.mockClear()
  }

  return {
    res: ({
      json: mockJson
    } as unknown) as T,
    next: mockNext as NextFunction,
    mockClear: clearAllMocks,
    clearMockRes: clearAllMocks
  }
}

export default getMockRes
