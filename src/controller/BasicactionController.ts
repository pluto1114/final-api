import { Body, Controller, Ctx, Delete, Flow, Get, Params, Post, Put, Req } from 'koa-ts-controllers';
import { createConnection } from 'typeorm';

import { TestExt } from '../ext/TestExt';
import { ipMiddleware } from '../middleware/ipMiddleware';
import * as databaseConfig from '../../ormconfig.js'

var execSync = require('child_process').execSync;

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

    
    @Post('/gene')
    async gene(@Body() body){
        const {type,host,port,username,password,database}=databaseConfig
        
        execSync(`npx typeorm-model-generator -h ${host} -d ${database} -p ${port} -u ${username} -x ${password} -e ${type} -o src/entity --noConfig true --ce pascal --cp camel && node geneentity`)

        return 'ok'
    }

    @Post('/genec')
    async genec(@Body() body){
        const {tableName}=body
        // exec(`node genec ${tableName}`)
        const {type,host,port,username,password,database}=databaseConfig
        
        execSync(`node genec ${tableName}`)

        return 'ok'
    }
    

   
}