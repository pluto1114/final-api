"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const Router = require("koa-router");
const koa_ts_controllers_1 = require("koa-ts-controllers");
const app = new Koa();
const router = new Router();
(async () => {
    await koa_ts_controllers_1.bootstrapControllers(app, {
        router: router,
        basePath: '/api',
        versions: [1],
        controllers: [
            __dirname + '/controllers/**/*'
        ]
    });
    app.use(router.routes());
    app.listen(3000);
})();
console.log('Server is runing !!');
//# sourceMappingURL=app.js.map