// Helpers
import { providedBoolean, providedObject } from '../helpers/provided'

// Tested Module
import getMockRes from '../../response/response'

describe('response - Provided for "http.OutgoingMessage" (accepts arguments and returns expected values)', () => {
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
})
