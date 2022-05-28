// Tested Module
import getMockRes from '../../response/response'

describe('response for "http.ServerResponse" - Defaults (accepts no arguments and return default values)', () => {
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
})
