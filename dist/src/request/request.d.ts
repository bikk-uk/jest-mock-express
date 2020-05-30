import { Request } from 'express';
import { MockRequest } from './index';
export declare const getMockReq: <T extends Request<import("express-serve-static-core").ParamsDictionary, any, any, import("express-serve-static-core").Query>>(values?: MockRequest) => T;
export default getMockReq;
