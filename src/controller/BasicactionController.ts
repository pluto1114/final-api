import { Body, Controller, Ctx, Delete, Flow, Get, Params, Post, Put, Req } from 'koa-ts-controllers';
import * as Boom from '@hapi/Boom';
import { TestExt } from '../ext/TestExt';
import { ipMiddleware } from '../middleware/ipMiddleware';

@Controller('/basicAction')
@Flow([ipMiddleware])
class BasicactionController {

    @Get('/')
    async list() {
        const list = await TestExt.showTables();
        return list
    }

    

    

   
}