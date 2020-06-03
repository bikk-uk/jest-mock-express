"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Tested Module
const response_1 = __importDefault(require("./response"));
describe('getMockRes', () => {
    test('returns expected object', () => {
        const mockRes = response_1.default();
        // the response contains values for res and next and clear functions
        expect(mockRes).toBeInstanceOf(Object);
        expect(Object.keys(mockRes).length).toBe(4);
    });
    test('the mock res is provided and contains the expected functions', () => {
        const { res } = response_1.default();
        // res contains the expected functions
        expect(res).toBeTruthy();
        expect(Object.keys(res).length).toBe(52);
        // express - Response
        expect(typeof res.status).toBe('function');
        expect(typeof res.sendStatus).toBe('function');
        expect(typeof res.links).toBe('function');
        expect(typeof res.send).toBe('function');
        expect(typeof res.json).toBe('function');
        expect(typeof res.jsonp).toBe('function');
        expect(typeof res.sendFile).toBe('function');
        expect(typeof res.sendfile).toBe('function');
        expect(typeof res.download).toBe('function');
        expect(typeof res.contentType).toBe('function');
        expect(typeof res.type).toBe('function');
        expect(typeof res.format).toBe('function');
        expect(typeof res.attachment).toBe('function');
        expect(typeof res.set).toBe('function');
        expect(typeof res.header).toBe('function');
        expect(typeof res.get).toBe('function');
        expect(typeof res.clearCookie).toBe('function');
        expect(typeof res.cookie).toBe('function');
        expect(typeof res.location).toBe('function');
        expect(typeof res.redirect).toBe('function');
        expect(typeof res.render).toBe('function');
        expect(typeof res.vary).toBe('function');
        expect(typeof res.append).toBe('function');
        // http - ServerResponse
        expect(typeof res.assignSocket).toBe('function');
        expect(typeof res.detachSocket).toBe('function');
        expect(typeof res.writeContinue).toBe('function');
        expect(typeof res.writeHead).toBe('function');
        expect(typeof res.writeProcessing).toBe('function');
        // http - OutgoingMessage
        expect(typeof res.setTimeout).toBe('function');
        expect(typeof res.setHeader).toBe('function');
        expect(typeof res.getHeader).toBe('function');
        expect(typeof res.getHeaders).toBe('function');
        expect(typeof res.getHeaderNames).toBe('function');
        expect(typeof res.hasHeader).toBe('function');
        expect(typeof res.removeHeader).toBe('function');
        expect(typeof res.addTrailers).toBe('function');
        expect(typeof res.flushHeaders).toBe('function');
    });
    test('the mock next function is provided', () => {
        const { next } = response_1.default();
        // next is part of the mock response
        expect(next).toBeTruthy();
        expect(typeof next).toBe('function');
    });
    test('the mock clear function is provided', () => {
        const { mockClear } = response_1.default();
        // a mock clear function is part of the mock response
        expect(mockClear).toBeTruthy();
        expect(typeof mockClear).toBe('function');
    });
    test('the mock clear alias function is provided', () => {
        const { clearMockRes } = response_1.default();
        // a mock clear alias function is part of the mock response
        expect(clearMockRes).toBeTruthy();
        expect(typeof clearMockRes).toBe('function');
    });
    test('mock clear clears all mocks', () => {
        const { res, next, mockClear } = response_1.default();
        // call all of the mock functions
        next();
        callAll(res);
        // ensure they all report as being called
        // express - Response
        expect(next).toBeCalledTimes(1);
        expect(res.status).toBeCalledTimes(1);
        expect(res.sendStatus).toBeCalledTimes(1);
        expect(res.links).toBeCalledTimes(1);
        expect(res.send).toBeCalledTimes(1);
        expect(res.json).toBeCalledTimes(1);
        expect(res.jsonp).toBeCalledTimes(1);
        expect(res.sendFile).toBeCalledTimes(1);
        expect(res.sendfile).toBeCalledTimes(1);
        expect(res.download).toBeCalledTimes(1);
        expect(res.contentType).toBeCalledTimes(1);
        expect(res.type).toBeCalledTimes(1);
        expect(res.format).toBeCalledTimes(1);
        expect(res.attachment).toBeCalledTimes(1);
        expect(res.set).toBeCalledTimes(1);
        expect(res.header).toBeCalledTimes(1);
        expect(res.get).toBeCalledTimes(1);
        expect(res.clearCookie).toBeCalledTimes(1);
        expect(res.cookie).toBeCalledTimes(1);
        expect(res.location).toBeCalledTimes(1);
        expect(res.redirect).toBeCalledTimes(1);
        expect(res.render).toBeCalledTimes(1);
        expect(res.vary).toBeCalledTimes(1);
        expect(res.append).toBeCalledTimes(1);
        // http - ServerResponse
        expect(res.assignSocket).toBeCalledTimes(1);
        expect(res.detachSocket).toBeCalledTimes(1);
        expect(res.writeContinue).toBeCalledTimes(1);
        expect(res.writeHead).toBeCalledTimes(1);
        expect(res.writeProcessing).toBeCalledTimes(1);
        // http - OutgoingMessage
        expect(res.setTimeout).toBeCalledTimes(1);
        expect(res.setHeader).toBeCalledTimes(1);
        expect(res.getHeader).toBeCalledTimes(1);
        expect(res.getHeaders).toBeCalledTimes(1);
        expect(res.getHeaderNames).toBeCalledTimes(1);
        expect(res.hasHeader).toBeCalledTimes(1);
        expect(res.removeHeader).toBeCalledTimes(1);
        expect(res.addTrailers).toBeCalledTimes(1);
        expect(res.flushHeaders).toBeCalledTimes(1);
        // clear the mock
        mockClear();
        // ensure they all have been cleared
        // express - Response
        expect(next).not.toBeCalled();
        expect(next).not.toBeCalled();
        expect(res.status).not.toBeCalled();
        expect(res.sendStatus).not.toBeCalled();
        expect(res.links).not.toBeCalled();
        expect(res.send).not.toBeCalled();
        expect(res.json).not.toBeCalled();
        expect(res.jsonp).not.toBeCalled();
        expect(res.sendFile).not.toBeCalled();
        expect(res.sendfile).not.toBeCalled();
        expect(res.download).not.toBeCalled();
        expect(res.contentType).not.toBeCalled();
        expect(res.type).not.toBeCalled();
        expect(res.format).not.toBeCalled();
        expect(res.attachment).not.toBeCalled();
        expect(res.set).not.toBeCalled();
        expect(res.header).not.toBeCalled();
        expect(res.get).not.toBeCalled();
        expect(res.clearCookie).not.toBeCalled();
        expect(res.cookie).not.toBeCalled();
        expect(res.location).not.toBeCalled();
        expect(res.redirect).not.toBeCalled();
        expect(res.render).not.toBeCalled();
        expect(res.vary).not.toBeCalled();
        expect(res.append).not.toBeCalled();
        // http - ServerResponse
        expect(res.assignSocket).not.toBeCalled();
        expect(res.detachSocket).not.toBeCalled();
        expect(res.writeContinue).not.toBeCalled();
        expect(res.writeHead).not.toBeCalled();
        expect(res.writeProcessing).not.toBeCalled();
        // http - OutgoingMessage
        expect(res.setTimeout).not.toBeCalled();
        expect(res.setHeader).not.toBeCalled();
        expect(res.getHeader).not.toBeCalled();
        expect(res.getHeaders).not.toBeCalled();
        expect(res.getHeaderNames).not.toBeCalled();
        expect(res.hasHeader).not.toBeCalled();
        expect(res.removeHeader).not.toBeCalled();
        expect(res.addTrailers).not.toBeCalled();
        expect(res.flushHeaders).not.toBeCalled();
    });
    test('clearMockRes clears all mocks', () => {
        const { res, next, clearMockRes } = response_1.default();
        // call all of the mock functions
        next();
        callAll(res);
        // ensure they all report as being called
        // express - Response
        expect(next).toBeCalledTimes(1);
        expect(res.status).toBeCalledTimes(1);
        expect(res.sendStatus).toBeCalledTimes(1);
        expect(res.links).toBeCalledTimes(1);
        expect(res.send).toBeCalledTimes(1);
        expect(res.json).toBeCalledTimes(1);
        expect(res.jsonp).toBeCalledTimes(1);
        expect(res.sendFile).toBeCalledTimes(1);
        expect(res.sendfile).toBeCalledTimes(1);
        expect(res.download).toBeCalledTimes(1);
        expect(res.contentType).toBeCalledTimes(1);
        expect(res.type).toBeCalledTimes(1);
        expect(res.format).toBeCalledTimes(1);
        expect(res.attachment).toBeCalledTimes(1);
        expect(res.set).toBeCalledTimes(1);
        expect(res.header).toBeCalledTimes(1);
        expect(res.get).toBeCalledTimes(1);
        expect(res.clearCookie).toBeCalledTimes(1);
        expect(res.cookie).toBeCalledTimes(1);
        expect(res.location).toBeCalledTimes(1);
        expect(res.redirect).toBeCalledTimes(1);
        expect(res.render).toBeCalledTimes(1);
        expect(res.vary).toBeCalledTimes(1);
        expect(res.append).toBeCalledTimes(1);
        // http - ServerResponse
        expect(res.assignSocket).toBeCalledTimes(1);
        expect(res.detachSocket).toBeCalledTimes(1);
        expect(res.writeContinue).toBeCalledTimes(1);
        expect(res.writeHead).toBeCalledTimes(1);
        expect(res.writeProcessing).toBeCalledTimes(1);
        // http - OutgoingMessage
        expect(res.setTimeout).toBeCalledTimes(1);
        expect(res.setHeader).toBeCalledTimes(1);
        expect(res.getHeader).toBeCalledTimes(1);
        expect(res.getHeaders).toBeCalledTimes(1);
        expect(res.getHeaderNames).toBeCalledTimes(1);
        expect(res.hasHeader).toBeCalledTimes(1);
        expect(res.removeHeader).toBeCalledTimes(1);
        expect(res.addTrailers).toBeCalledTimes(1);
        expect(res.flushHeaders).toBeCalledTimes(1);
        // clear the mock
        clearMockRes();
        // ensure they all have been cleared
        // express - Response
        expect(next).not.toBeCalled();
        expect(next).not.toBeCalled();
        expect(res.status).not.toBeCalled();
        expect(res.sendStatus).not.toBeCalled();
        expect(res.links).not.toBeCalled();
        expect(res.send).not.toBeCalled();
        expect(res.json).not.toBeCalled();
        expect(res.jsonp).not.toBeCalled();
        expect(res.sendFile).not.toBeCalled();
        expect(res.sendfile).not.toBeCalled();
        expect(res.download).not.toBeCalled();
        expect(res.contentType).not.toBeCalled();
        expect(res.type).not.toBeCalled();
        expect(res.format).not.toBeCalled();
        expect(res.attachment).not.toBeCalled();
        expect(res.set).not.toBeCalled();
        expect(res.header).not.toBeCalled();
        expect(res.get).not.toBeCalled();
        expect(res.clearCookie).not.toBeCalled();
        expect(res.cookie).not.toBeCalled();
        expect(res.location).not.toBeCalled();
        expect(res.redirect).not.toBeCalled();
        expect(res.render).not.toBeCalled();
        expect(res.vary).not.toBeCalled();
        expect(res.append).not.toBeCalled();
        // http - ServerResponse
        expect(res.assignSocket).not.toBeCalled();
        expect(res.detachSocket).not.toBeCalled();
        expect(res.writeContinue).not.toBeCalled();
        expect(res.writeHead).not.toBeCalled();
        expect(res.writeProcessing).not.toBeCalled();
        // http - OutgoingMessage
        expect(res.setTimeout).not.toBeCalled();
        expect(res.setHeader).not.toBeCalled();
        expect(res.getHeader).not.toBeCalled();
        expect(res.getHeaders).not.toBeCalled();
        expect(res.getHeaderNames).not.toBeCalled();
        expect(res.hasHeader).not.toBeCalled();
        expect(res.removeHeader).not.toBeCalled();
        expect(res.addTrailers).not.toBeCalled();
        expect(res.flushHeaders).not.toBeCalled();
    });
});
function callAll(res) {
    // express - Response
    res.status(123);
    res.sendStatus(123);
    res.links({});
    res.send();
    res.json();
    res.jsonp();
    res.sendFile('test');
    res.sendfile('test');
    res.download('test');
    res.contentType('test');
    res.type('test');
    res.format({});
    res.attachment();
    res.set({});
    res.header({});
    res.get('test');
    res.clearCookie('test');
    res.cookie('test', 'test');
    res.location('test');
    res.redirect('test');
    res.render('test');
    res.vary('test');
    res.append('test');
    // http - ServerResponse
    res.assignSocket({});
    res.detachSocket({});
    res.writeContinue();
    res.writeHead(123);
    res.writeProcessing();
    // http - OutgoingMessage
    res.setTimeout(123);
    res.setHeader('test', 'test');
    res.getHeader('test');
    res.getHeaders();
    res.getHeaderNames();
    res.hasHeader('test');
    res.removeHeader('test');
    res.addTrailers([]);
    res.flushHeaders();
}
//# sourceMappingURL=response.test.js.map