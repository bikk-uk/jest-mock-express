// Types
import { Socket } from 'net'

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

  test('res.assignSocket is a mocked function', () => {
    const { res } = getMockRes()

    expect(res.assignSocket).toBeDefined()
    expect(typeof res.assignSocket).toBe('function')
    expect((res.assignSocket as jest.Mock).getMockName()).toBe('assignSocket mock default')
  })

  test('res.assignSocket is not chainable', () => {
    const { res } = getMockRes()

    // it does not return itself (is not chainable)
    const socket = new Socket()
    expect(res.assignSocket(socket)).toBeUndefined()
  })

  test('res.detachSocket is a mocked function', () => {
    const { res } = getMockRes()

    expect(res.detachSocket).toBeDefined()
    expect(typeof res.detachSocket).toBe('function')
    expect((res.detachSocket as jest.Mock).getMockName()).toBe('detachSocket mock default')
  })

  test('res.detachSocket is not chainable', () => {
    const { res } = getMockRes()

    // it does not return itself (is not chainable)
    const socket = new Socket()
    expect(res.detachSocket(socket)).toBeUndefined()
  })

  test('res.writeContinue is a mocked function', () => {
    const { res } = getMockRes()

    expect(res.writeContinue).toBeDefined()
    expect(typeof res.writeContinue).toBe('function')
    expect((res.writeContinue as jest.Mock).getMockName()).toBe('writeContinue mock default')
  })

  test('res.writeContinue is not chainable', () => {
    const { res } = getMockRes()

    // it does not return itself (is not chainable)
    expect(res.writeContinue()).toBeUndefined()
  })

  test('res.writeHead is a mocked function', () => {
    const { res } = getMockRes()

    expect(res.writeHead).toBeDefined()
    expect(typeof res.writeHead).toBe('function')
    expect((res.writeHead as jest.Mock).getMockName()).toBe('writeHead mock default')
  })

  test('res.writeHead is chainable', () => {
    const { res } = getMockRes()

    // it returns itself (is chainable)
    expect(res.writeHead(200)).toBe(res)
  })

  test('res.writeProcessing is a mocked function and is not chainable', () => {
    const { res } = getMockRes()

    expect(res.writeProcessing).toBeDefined()
    expect(typeof res.writeProcessing).toBe('function')
    expect((res.writeProcessing as jest.Mock).getMockName()).toBe('writeProcessing mock default')
  })

  test('res.writeProcessing is a mocked function and is not chainable', () => {
    const { res } = getMockRes()

    // it does not return itself (is not chainable)
    expect(res.writeProcessing()).toBeUndefined()
  })
})
