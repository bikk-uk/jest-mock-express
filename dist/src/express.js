"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Will return a typed and mocked version of key Express components.
 * mockClear() will clear all internal jest functions.
 */
exports.getMockExpress = () => {
    const mockJson = jest.fn();
    const mockNext = jest.fn();
    return {
        res: {
            json: mockJson
        },
        next: mockNext,
        mockClear: () => {
            mockJson.mockClear();
            mockNext.mockClear();
        }
    };
};
exports.default = exports.getMockExpress;
//# sourceMappingURL=express.js.map