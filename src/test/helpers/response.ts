// Types
import type { Socket } from 'net'
import type { Response } from 'express'

export function callAllFunctions(res: Response) {
  /* express.Response */
  res.status(123)
  res.sendStatus(123)
  res.links({})
  res.send()
  res.json()
  res.jsonp()
  res.sendFile('test')
  res.sendfile('test')
  res.download('test')
  res.contentType('test')
  res.type('test')
  res.format({})
  res.attachment()
  res.set({})
  res.header({})
  res.get('test')
  res.clearCookie('test')
  res.cookie('test', 'test')
  res.location('test')
  res.redirect('test')
  res.render('test')
  res.vary('test')
  res.append('test')

  /* http.ServerResponse */
  res.assignSocket({} as Socket)
  res.detachSocket({} as Socket)
  res.writeContinue()
  res.writeHead(123)
  res.writeProcessing()

  /* http.OutgoingMessage */
  res.setTimeout(123)
  res.setHeader('test', 'test')
  res.getHeader('test')
  res.getHeaders()
  res.getHeaderNames()
  res.hasHeader('test')
  res.removeHeader('test')
  res.addTrailers([])
  res.flushHeaders()

  /* stream.Writable */
  res._write({}, 'test', jest.fn())
  res._writev && res._writev([], jest.fn())
  res._destroy(null, jest.fn())
  res._final(jest.fn())
  res.write({}, jest.fn())
  res.setDefaultEncoding('test')
  res.end()
  res.cork()
  res.uncork()
  res.destroy()
  res.addListener('test', jest.fn())
  res.emit('finish')
  res.on('close', jest.fn())
  res.once('pipe', jest.fn())
  res.prependListener('drain', jest.fn())
  res.prependOnceListener('unpipe', jest.fn())
  res.removeListener('error', jest.fn())
}
