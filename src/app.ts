import * as Koa from 'koa'
import * as Router from 'koa-router'
import {bootstrapControllers} from 'koa-ts-controllers';
import * as Boom from '@hapi/Boom';
import "reflect-metadata";
import {createConnection} from "typeorm";
const koaBody = require('koa-body');
const passport = require('koa-passport');

const app = new Koa();
const router = new Router();

console.time('compiling');
(async () => {
    await bootstrapControllers(app, {
        router: router,
        basePath: '/api',
        versions:[1],
        controllers: [
            __dirname + '/controller/**/*'
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

    app.use(koaBody());
    app.use(passport.initialize())
    app.use(passport.session()) 
    require('./config/passport')(passport);
    app.use( router.routes() );
    app.listen(3000);

    console.log('Server is runing !! Wait database to connect...')

    await createConnection()

    console.log('database connection finished!!')
})()
// router.all('/*', async ctx => {
//     throw Boom.notFound();
// });
console.timeEnd('compiling');