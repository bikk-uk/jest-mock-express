// Tested Module
import getMockRes from '../../response/response'

describe('response - Defaults from "express.Express" (accepts no arguments and return default values)', () => {
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
})
