// Tested Module
import getMockRes from '../../response/response'

describe('response - Functions from "http.ServerResponse"', () => {
  test('res.end is a mocked function', () => {
    const { res } = getMockRes()

    expect(res.end).toBeDefined()
    expect(typeof res.end).toBe('function')
    expect((res.end as jest.Mock).getMockName()).toBe('end mock default')
  })

  test('res.end is not chainable', () => {
    const { res } = getMockRes()

    // it does not return itself (is not chainable)
    expect(res.end()).toBeUndefined()
  })
})
