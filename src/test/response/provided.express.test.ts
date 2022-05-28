// Helpers
import { providedBoolean, providedObject, providedString } from '../helpers/provided'

// Tested Module
import getMockRes from '../../response/response'

describe('response - Provided for "express.Express" (accepts arguments and returns expected values)', () => {
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
})
