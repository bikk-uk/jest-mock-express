// Tested Module
import getMockRes from '../../response/response'

describe('response - GitHub Issues', () => {
  test('issue #32', () => {
    const statusCode = 404
    const { res } = getMockRes()

    res.status(statusCode).end()

    // status is called
    expect(res.status).toBeCalledTimes(1)
    expect(res.status).toBeCalledWith(statusCode)
    // chained end is called
    expect(res.end).toBeCalledTimes(1)
    expect(res.end).toBeCalledWith()
  })
})
