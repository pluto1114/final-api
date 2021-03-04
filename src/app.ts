import * as Koa from 'koa'
import * as Router from 'koa-router'
import {bootstrapControllers} from 'koa-ts-controllers';
import * as Boom from '@hapi/Boom';

const app = new Koa();
const router = new Router();

(async () => {
    await bootstrapControllers(app, {
        router: router,
        basePath: '/api',
        versions:[1],
        controllers: [
            __dirname + '/controllers/**/*'
        ],
        errorHandler: async (err: any, ctx: Koa.BaseContext) => {
            let status = 500;
            let body: any = {
                "statusCode": 500,
                "error": "Internal Server error",
                "message": err.message
            };

            ctx.status = status;
            ctx.body = body;
        }
    });

    
    app.use( router.routes() );
    
    app.listen(3000);
})()
// router.all('/*', async ctx => {
//     throw Boom.notFound();
// });
console.log('Server is runing !!')