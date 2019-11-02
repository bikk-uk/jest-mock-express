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
        expect(Object.keys(res).length).toBe(26);
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
        res.status();
        res.sendStatus();
        res.links();
        res.send();
        res.json();
        res.jsonp();
        res.sendFile();
        res.sendfile();
        res.download();
        res.contentType();
        res.type();
        res.format();
        res.attachment();
        res.set();
        res.header();
        res.get();
        res.clearCookie();
        res.cookie();
        res.location();
        res.redirect();
        res.render();
        res.vary();
        res.append();
        // ensure they all report as being called
        expect(next.mock.calls.length).toBe(1);
        expect(res.status.mock.calls.length).toBe(1);
        expect(res.sendStatus.mock.calls.length).toBe(1);
        expect(res.links.mock.calls.length).toBe(1);
        expect(res.send.mock.calls.length).toBe(1);
        expect(res.json.mock.calls.length).toBe(1);
        expect(res.jsonp.mock.calls.length).toBe(1);
        expect(res.sendFile.mock.calls.length).toBe(1);
        expect(res.sendfile.mock.calls.length).toBe(1);
        expect(res.download.mock.calls.length).toBe(1);
        expect(res.contentType.mock.calls.length).toBe(1);
        expect(res.type.mock.calls.length).toBe(1);
        expect(res.format.mock.calls.length).toBe(1);
        expect(res.attachment.mock.calls.length).toBe(1);
        expect(res.set.mock.calls.length).toBe(1);
        expect(res.header.mock.calls.length).toBe(1);
        expect(res.get.mock.calls.length).toBe(1);
        expect(res.clearCookie.mock.calls.length).toBe(1);
        expect(res.cookie.mock.calls.length).toBe(1);
        expect(res.location.mock.calls.length).toBe(1);
        expect(res.redirect.mock.calls.length).toBe(1);
        expect(res.render.mock.calls.length).toBe(1);
        expect(res.vary.mock.calls.length).toBe(1);
        expect(res.append.mock.calls.length).toBe(1);
        // clear the mock
        mockClear();
        // ensure they all have been cleared
        expect(next.mock.calls.length).toBe(0);
        expect(next.mock.calls.length).toBe(0);
        expect(res.status.mock.calls.length).toBe(0);
        expect(res.sendStatus.mock.calls.length).toBe(0);
        expect(res.links.mock.calls.length).toBe(0);
        expect(res.send.mock.calls.length).toBe(0);
        expect(res.json.mock.calls.length).toBe(0);
        expect(res.jsonp.mock.calls.length).toBe(0);
        expect(res.sendFile.mock.calls.length).toBe(0);
        expect(res.sendfile.mock.calls.length).toBe(0);
        expect(res.download.mock.calls.length).toBe(0);
        expect(res.contentType.mock.calls.length).toBe(0);
        expect(res.type.mock.calls.length).toBe(0);
        expect(res.format.mock.calls.length).toBe(0);
        expect(res.attachment.mock.calls.length).toBe(0);
        expect(res.set.mock.calls.length).toBe(0);
        expect(res.header.mock.calls.length).toBe(0);
        expect(res.get.mock.calls.length).toBe(0);
        expect(res.clearCookie.mock.calls.length).toBe(0);
        expect(res.cookie.mock.calls.length).toBe(0);
        expect(res.location.mock.calls.length).toBe(0);
        expect(res.redirect.mock.calls.length).toBe(0);
        expect(res.render.mock.calls.length).toBe(0);
        expect(res.vary.mock.calls.length).toBe(0);
        expect(res.append.mock.calls.length).toBe(0);
    });
    test('clearMockRes clears all mocks', () => {
        const { res, next, clearMockRes } = response_1.default();
        // call all of the mock functions
        next();
        res.status();
        res.sendStatus();
        res.links();
        res.send();
        res.json();
        res.jsonp();
        res.sendFile();
        res.sendfile();
        res.download();
        res.contentType();
        res.type();
        res.format();
        res.attachment();
        res.set();
        res.header();
        res.get();
        res.clearCookie();
        res.cookie();
        res.location();
        res.redirect();
        res.render();
        res.vary();
        res.append();
        // ensure they all report as being called
        expect(next.mock.calls.length).toBe(1);
        expect(res.status.mock.calls.length).toBe(1);
        expect(res.sendStatus.mock.calls.length).toBe(1);
        expect(res.links.mock.calls.length).toBe(1);
        expect(res.send.mock.calls.length).toBe(1);
        expect(res.json.mock.calls.length).toBe(1);
        expect(res.jsonp.mock.calls.length).toBe(1);
        expect(res.sendFile.mock.calls.length).toBe(1);
        expect(res.sendfile.mock.calls.length).toBe(1);
        expect(res.download.mock.calls.length).toBe(1);
        expect(res.contentType.mock.calls.length).toBe(1);
        expect(res.type.mock.calls.length).toBe(1);
        expect(res.format.mock.calls.length).toBe(1);
        expect(res.attachment.mock.calls.length).toBe(1);
        expect(res.set.mock.calls.length).toBe(1);
        expect(res.header.mock.calls.length).toBe(1);
        expect(res.get.mock.calls.length).toBe(1);
        expect(res.clearCookie.mock.calls.length).toBe(1);
        expect(res.cookie.mock.calls.length).toBe(1);
        expect(res.location.mock.calls.length).toBe(1);
        expect(res.redirect.mock.calls.length).toBe(1);
        expect(res.render.mock.calls.length).toBe(1);
        expect(res.vary.mock.calls.length).toBe(1);
        expect(res.append.mock.calls.length).toBe(1);
        // clear the mock
        clearMockRes();
        // ensure they all have been cleared
        expect(next.mock.calls.length).toBe(0);
        expect(next.mock.calls.length).toBe(0);
        expect(res.status.mock.calls.length).toBe(0);
        expect(res.sendStatus.mock.calls.length).toBe(0);
        expect(res.links.mock.calls.length).toBe(0);
        expect(res.send.mock.calls.length).toBe(0);
        expect(res.json.mock.calls.length).toBe(0);
        expect(res.jsonp.mock.calls.length).toBe(0);
        expect(res.sendFile.mock.calls.length).toBe(0);
        expect(res.sendfile.mock.calls.length).toBe(0);
        expect(res.download.mock.calls.length).toBe(0);
        expect(res.contentType.mock.calls.length).toBe(0);
        expect(res.type.mock.calls.length).toBe(0);
        expect(res.format.mock.calls.length).toBe(0);
        expect(res.attachment.mock.calls.length).toBe(0);
        expect(res.set.mock.calls.length).toBe(0);
        expect(res.header.mock.calls.length).toBe(0);
        expect(res.get.mock.calls.length).toBe(0);
        expect(res.clearCookie.mock.calls.length).toBe(0);
        expect(res.cookie.mock.calls.length).toBe(0);
        expect(res.location.mock.calls.length).toBe(0);
        expect(res.redirect.mock.calls.length).toBe(0);
        expect(res.render.mock.calls.length).toBe(0);
        expect(res.vary.mock.calls.length).toBe(0);
        expect(res.append.mock.calls.length).toBe(0);
    });
});
//# sourceMappingURL=response.test.js.map