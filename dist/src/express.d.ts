import { Response, NextFunction } from 'express';
/**
 * Will return a typed and mocked version of key Express components.
 * mockClear() will clear all internal jest functions.
 */
export declare const getMockExpress: <T extends Response>() => {
    res: T;
    next: NextFunction;
    mockClear: () => void;
};
export default getMockExpress;
