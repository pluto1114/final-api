import { Body, Controller, Ctx, Delete, Get, Params, Post, Put, Req } from 'koa-ts-controllers';
import * as Boom from '@hapi/Boom';
import { {{capitalName}} } from '../entity/{{capitalName}}'

@Controller('/{{name}}')
class {{capitalName}}Controller {

    @Get('/')
    async list() {
        const list = await {{capitalName}}.find();
        return list
    }

    

    @Post('/')
    async create(@Body() body){
        const one = new {{capitalName}}();
        Object.assign(one,body)
        one.createAt=new Date()
        return one.save();
    }

    @Put('/:id')
    async replace(@Params('id') id:number,@Body() body){
        delete body.id;
        const one=await {{capitalName}}.findOne({id})
        Object.assign(one,body)
        const ret=one.save()
        return ret
    }

    @Delete('/:id')
    async delete(@Params('id') id:number){
        await {{capitalName}}.delete({id})
        return id
    }
    

    @Get('/:id')
    async one(@Params('id') id:number) {
        return await {{capitalName}}.findOne({id})
    }
}