import { Body, Controller, Ctx, Delete, Get, Params, Post, Put, Req } from 'koa-ts-controllers';
import * as Boom from '@hapi/Boom';
import { Comp } from '../entity/Comp'

@Controller('/comp')
class CompController {

    @Get('/')
    async list() {
        const list = await Comp.find();
        return list
    }

    

    @Post('/')
    async create(@Body() body){
        const one = new Comp();
        Object.assign(one,body)
        one['createAt']==undefined && (one['createAt']=new Date())
        return one.save();
    }

    @Put('/:id')
    async replace(@Params('id') id:number,@Body() body){
        delete body.id;
        const one=await Comp.findOne({id})
        Object.assign(one,body)
        const ret=one.save()
        return ret
    }

    @Delete('/:id')
    async delete(@Params('id') id:number){
        await Comp.delete({id})
        return id
    }
    

    @Get('/:id')
    async one(@Params('id') id:number) {
        return await Comp.findOne({id})
    }
}