"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMockReq = (values) => ({
    params: (values && values.params) || {},
    query: (values && values.query) || {},
    body: (values && values.body) || {}
});
exports.default = exports.getMockReq;
//# sourceMappingURL=request.js.map