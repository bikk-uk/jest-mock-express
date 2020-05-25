import { Response, NextFunction } from 'express';
/**
 * Will return a typed and mocked version of key Express components.
 * mockClear() or clearMockRes() will clear all internal jest functions.
 */
export declare const getMockRes: () => {
    res: Response;
    next: NextFunction;
    mockClear: () => void;
    clearMockRes: () => void;
};
export default getMockRes;
