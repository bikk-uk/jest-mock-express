// Tested Module
import getMockReq from './request'

describe('getMockReq', () => {
  test('accepts no arguments and return default values', () => {
    const testReq = getMockReq()

    // the request contains values for params, query, and body
    expect(testReq).toBeTruthy()
    expect(testReq).toBeInstanceOf(Object)
    expect(Object.keys(testReq).length).toBe(3)

    // req.params is an empty object
    expect(testReq.params).toBeTruthy()
    expect(testReq.params).toBeInstanceOf(Object)
    expect(Object.keys(testReq.params).length).toBe(0)

    // req.query is an empty object
    expect(testReq.query).toBeTruthy()
    expect(testReq.query).toBeInstanceOf(Object)
    expect(Object.keys(testReq.query).length).toBe(0)

    // req.body is an empty object
    expect(testReq.body).toBeTruthy()
    expect(testReq.body).toBeInstanceOf(Object)
    expect(Object.keys(testReq.body).length).toBe(0)
  })

  test('returns provided params', () => {
    const testReq = getMockReq({ params: { one: 1, two: 2 } })

    // the request contains values for params, query, and body
    expect(testReq).toBeTruthy()
    expect(testReq).toBeInstanceOf(Object)
    expect(Object.keys(testReq).length).toBe(3)

    // req.params has the provided arguments
    expect(testReq.params).toBeTruthy()
    expect(testReq.params).toBeInstanceOf(Object)
    expect(Object.keys(testReq.params).length).toBe(2)
    expect(testReq.params['one']).toBe(1)
    expect(testReq.params['two']).toBe(2)

    // req.query is an empty object
    expect(testReq.query).toBeTruthy()
    expect(testReq.query).toBeInstanceOf(Object)
    expect(Object.keys(testReq.query).length).toBe(0)

    // req.body is an empty object
    expect(testReq.body).toBeTruthy()
    expect(testReq.body).toBeInstanceOf(Object)
    expect(Object.keys(testReq.body).length).toBe(0)
  })

  test('returns provided query', () => {
    const testReq = getMockReq({ query: { three: 'three', four: 'four' } })

    // the request contains values for params, query, and body
    expect(testReq).toBeTruthy()
    expect(testReq).toBeInstanceOf(Object)
    expect(Object.keys(testReq).length).toBe(3)

    // req.params is an empty object
    expect(testReq.params).toBeTruthy()
    expect(testReq.params).toBeInstanceOf(Object)
    expect(Object.keys(testReq.params).length).toBe(0)

    // req.query has the provided arguments
    expect(testReq.query).toBeTruthy()
    expect(testReq.query).toBeInstanceOf(Object)
    expect(Object.keys(testReq.query).length).toBe(2)
    expect(testReq.query['three']).toBe('three')
    expect(testReq.query['four']).toBe('four')

    // req.body is an empty object
    expect(testReq.body).toBeTruthy()
    expect(testReq.body).toBeInstanceOf(Object)
    expect(Object.keys(testReq.body).length).toBe(0)
  })

  test('returns provided body', () => {
    const testReq = getMockReq({ body: { five: { six: 6 }, seven: [8, 9] } })

    // the request contains values for params, query, and body
    expect(testReq).toBeTruthy()
    expect(testReq).toBeInstanceOf(Object)
    expect(Object.keys(testReq).length).toBe(3)

    // req.params is an empty object
    expect(testReq.params).toBeTruthy()
    expect(testReq.params).toBeInstanceOf(Object)
    expect(Object.keys(testReq.params).length).toBe(0)

    // req.query is an empty object
    expect(testReq.query).toBeTruthy()
    expect(testReq.query).toBeInstanceOf(Object)
    expect(Object.keys(testReq.query).length).toBe(0)

    // req.body has the provided arguments
    expect(testReq.body).toBeTruthy()
    expect(testReq.body).toBeInstanceOf(Object)
    expect(Object.keys(testReq.body).length).toBe(2)
    expect(testReq.body['five']).toEqual(expect.objectContaining({ six: 6 }))
    expect(testReq.body['seven']).toEqual(expect.arrayContaining([8, 9]))
  })
})
