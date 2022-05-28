// Tested Module
import getMockRes from '../../response/response'

describe('response - Defaults for "http.OutgoingMessage" (accepts no arguments and return default values)', () => {
  test('res.chunkedEncoding is a boolean', () => {
    const { res } = getMockRes()

    expect(res.chunkedEncoding).toBeDefined()
    expect(res.chunkedEncoding).toEqual(false)
  })

  test('res.shouldKeepAlive is a boolean', () => {
    const { res } = getMockRes()

    expect(res.shouldKeepAlive).toBeDefined()
    expect(res.shouldKeepAlive).toEqual(false)
  })

  test('res.useChunkedEncodingByDefault is a boolean', () => {
    const { res } = getMockRes()

    expect(res.useChunkedEncodingByDefault).toBeDefined()
    expect(res.useChunkedEncodingByDefault).toEqual(false)
  })

  test('res.sendDate is a boolean', () => {
    const { res } = getMockRes()

    expect(res.sendDate).toBeDefined()
    expect(res.sendDate).toEqual(false)
  })

  test('res.finished is a boolean', () => {
    const { res } = getMockRes()

    expect(res.finished).toBeDefined()
    expect(res.finished).toEqual(false)
  })

  test('res.connection is am empty object', () => {
    const { res } = getMockRes()

    expect(res.connection).toBeDefined()
    expect(res.connection).toBeInstanceOf(Object)
    expect(Object.keys(res.connection).length).toBe(0)
  })

  test('res.socket is am empty object', () => {
    const { res } = getMockRes()

    expect(res.socket).toBeDefined()
    expect(res.socket).toBeInstanceOf(Object)
    expect(Object.keys(res.socket).length).toBe(0)
  })
})
