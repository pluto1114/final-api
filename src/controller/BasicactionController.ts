import { Body, Controller, Ctx, Delete, Flow, Get, Params, Post, Put, Req } from 'koa-ts-controllers';
import * as Boom from '@hapi/Boom';
import { TestExt } from '../ext/TestExt';
import { ipMiddleware } from '../middleware/ipMiddleware';

@Controller('/basicAction')
@Flow([ipMiddleware])
class BasicActionController {

    @Get('/')
    async list() {
        const tables = await TestExt.showTables();
        const tableNames=[]
        for (const t of tables) {
            const values=Object.values(t)
            if(values.length>0){
                const value=values[0]+''
                if(!value.startsWith('fa_')){
                    tableNames.push(values[0])
                }
            }
        }
        return tableNames
    }

    

    

   
}