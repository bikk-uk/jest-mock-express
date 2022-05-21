// Types
import type { Response } from 'express'

// Helpers
import { providedBoolean, providedNumber, providedObject, providedString } from '../helpers/provided'

// Tested Module
import getMockRes from '../../response/response'

describe('response - Provided (accepts arguments and returns expected values)', () => {
  test('res.headersSent can be provided', () => {
    const { res } = getMockRes({ headersSent: providedBoolean })

    expect(res.headersSent).toBeDefined()
    expect(res.headersSent).toBe(providedBoolean)
  })

  test('res.locals can be provided', () => {
    const { res } = getMockRes({ locals: providedObject })

    expect(res.locals).toBeDefined()
    expect(res.locals).toBe(providedObject)
  })

  test('res.charset can be provided', () => {
    const { res } = getMockRes({ charset: providedString })

    expect(res.charset).toBeDefined()
    expect(res.charset).toBe(providedString)
  })

  test('res.app can be provided', () => {
    const { res } = getMockRes({ app: providedObject })

    expect(res.app).toBeDefined()
    expect(res.app).toBe(providedObject)
  })

  test('res.req can be provided', () => {
    const { res } = getMockRes({ req: providedObject })

    expect(res.req).toBeDefined()
    expect(res.req).toBe(providedObject)
  })

  test('res.statusCode can be provided', () => {
    const { res } = getMockRes({ statusCode: providedNumber })

    expect(res.statusCode).toBeDefined()
    expect(res.statusCode).toBe(providedNumber)
  })

  test('res.statusMessage can be provided', () => {
    const { res } = getMockRes({ statusMessage: providedString })

    expect(res.statusMessage).toBeDefined()
    expect(res.statusMessage).toBe(providedString)
  })

  test('res.upgrading can be provided', () => {
    const { res } = getMockRes({ upgrading: providedBoolean })

    expect(res.upgrading).toBeDefined()
    expect(res.upgrading).toBe(providedBoolean)
  })

  test('res.chunkedEncoding can be provided', () => {
    const { res } = getMockRes({ chunkedEncoding: providedBoolean })

    expect(res.chunkedEncoding).toBeDefined()
    expect(res.chunkedEncoding).toBe(providedBoolean)
  })

  test('res.shouldKeepAlive can be provided', () => {
    const { res } = getMockRes({ shouldKeepAlive: providedBoolean })

    expect(res.shouldKeepAlive).toBeDefined()
    expect(res.shouldKeepAlive).toBe(providedBoolean)
  })

  test('res.useChunkedEncodingByDefault can be provided', () => {
    const { res } = getMockRes({ useChunkedEncodingByDefault: providedBoolean })

    expect(res.useChunkedEncodingByDefault).toBeDefined()
    expect(res.useChunkedEncodingByDefault).toBe(providedBoolean)
  })

  test('res.sendDate can be provided', () => {
    const { res } = getMockRes({ sendDate: providedBoolean })

    expect(res.sendDate).toBeDefined()
    expect(res.sendDate).toBe(providedBoolean)
  })

  test('res.finished can be provided', () => {
    const { res } = getMockRes({ finished: providedBoolean })

    expect(res.finished).toBeDefined()
    expect(res.finished).toBe(providedBoolean)
  })

  test('res.connection can be provided', () => {
    const { res } = getMockRes({ connection: providedObject })

    expect(res.connection).toBeDefined()
    expect(res.connection).toBe(providedObject)
  })

  test('res.socket can be provided', () => {
    const { res } = getMockRes({ socket: providedObject })

    expect(res.socket).toBeDefined()
    expect(res.socket).toBe(providedObject)
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
})
