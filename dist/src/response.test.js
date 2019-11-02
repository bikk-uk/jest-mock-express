"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Tested Module
const response_1 = __importDefault(require("./response"));
describe('getMockRes', () => {
    test('returns expected object', () => {
        const testRes = response_1.default();
        // the response contains values for res and next and clear functions
        expect(testRes).toBeInstanceOf(Object);
        expect(Object.keys(testRes).length).toBe(4);
    });
    test('the mock res is provided and contains the expected functions', () => {
        const { res } = response_1.default();
        // res contains the expected functions
        expect(res).toBeTruthy();
        expect(Object.keys(res).length).toBe(1);
        expect(typeof res.json).toBe('function');
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
        res.json();
        // ensure they all report as being called
        expect(next.mock.calls.length).toBe(1);
        expect(res.json.mock.calls.length).toBe(1);
        // clear the mock
        mockClear();
        // ensure they all have been cleared
        expect(next.mock.calls.length).toBe(0);
        expect(res.json.mock.calls.length).toBe(0);
    });
    test('clearMockRes clears all mocks', () => {
        const { res, next, clearMockRes } = response_1.default();
        // call all of the mock functions
        next();
        res.json();
        // ensure they all report as being called
        expect(next.mock.calls.length).toBe(1);
        expect(res.json.mock.calls.length).toBe(1);
        // clear the mock
        clearMockRes();
        // ensure they all have been cleared
        expect(next.mock.calls.length).toBe(0);
        expect(res.json.mock.calls.length).toBe(0);
    });
});
//# sourceMappingURL=response.test.js.map