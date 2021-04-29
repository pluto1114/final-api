"use strict";

/**
 * 处理 success
 *
 * ```js
 * ctx.success({ message: "hello from lin!" })
 * ```
 *
 * ```js
 * ctx.success({ message: "hello from lin!", code: 0 })
 * ```
 *
 * @param app app实例
 */
exports.success = (app) => {
    app.context.success = function (obj) {
        this.type = 'application/json';
     
        let data = {
            code: '0',
            message: obj.message,
            request: `${this.method} ${this.req.url}`
        };
        this.status = success.status;
        this.body = JSON.stringify(data);
    };
};
