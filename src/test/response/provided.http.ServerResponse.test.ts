// Helpers
import { providedNumber, providedString } from '../helpers/provided'

// Tested Module
import getMockRes from '../../response/response'

describe('response - Provided for "http.ServerResponse" (accepts arguments and returns expected values)', () => {
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
})
