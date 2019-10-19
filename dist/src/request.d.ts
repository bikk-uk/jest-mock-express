import { Request } from 'express';
export declare const getMockReq: <T extends Request>(values?: {
    params?: any;
    query?: any;
    body?: any;
} | undefined) => T;
export default getMockReq;
