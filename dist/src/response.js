"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Will return a typed and mocked version of key Express components.
 * mockClear() or clearMockRes() will clear all internal jest functions.
 */
exports.getMockRes = () => {
    const mockJson = jest.fn();
    const mockNext = jest.fn();
    const clearAllMocks = () => {
        mockJson.mockClear();
        mockNext.mockClear();
    };
    return {
        res: {
            json: mockJson
        },
        next: mockNext,
        mockClear: clearAllMocks,
        clearMockRes: clearAllMocks
    };
};
exports.default = exports.getMockRes;
//# sourceMappingURL=response.js.map