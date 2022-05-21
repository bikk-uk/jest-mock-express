// Tested Module
import getMockRes from '../../response/response'

describe('response - Defaults (accepts no arguments and return default values)', () => {
  test('res.headersSent is a boolean', () => {
    const { res } = getMockRes()

    expect(res.headersSent).toBeDefined()
    expect(res.headersSent).toBe(false)
  })

  test('res.locals is an empty object', () => {
    const { res } = getMockRes()

    expect(res.locals).toBeDefined()
    expect(res.locals).toBeInstanceOf(Object)
    expect(Object.keys(res.locals).length).toBe(0)
  })

  test('res.charset is an empty string', () => {
    const { res } = getMockRes()

    expect(res.charset).toBeDefined()
    expect(res.charset).toBe('')
  })

  test('res.app is an empty object', () => {
    const { res } = getMockRes()

    expect(res.app).toBeDefined()
    expect(res.app).toBeInstanceOf(Object)
    expect(Object.keys(res.app).length).toBe(0)
  })

  test('res.req is an empty object', () => {
    const { res } = getMockRes()

    expect(res.req).toBeDefined()
    expect(res.req).toBeInstanceOf(Object)
    expect(res.req).toEqual({})
  })

  test('res.statusCode is a number', () => {
    const { res } = getMockRes()

    expect(res.statusCode).toBeDefined()
    expect(res.statusCode).toEqual(0)
  })

  test('res.statusMessage is an empty string', () => {
    const { res } = getMockRes()

    expect(res.statusMessage).toBeDefined()
    expect(res.statusMessage).toEqual('')
  })

  test('res.upgrading is a boolean', () => {
    const { res } = getMockRes()

    expect(res.upgrading).toBeDefined()
    expect(res.upgrading).toEqual(false)
  })

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
