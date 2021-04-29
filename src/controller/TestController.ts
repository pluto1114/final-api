import { Body, Controller, Ctx, Delete, Flow, Get, Params, Patch, Post, Put, Req, Res } from 'koa-ts-controllers';
import * as Boom from '@hapi/Boom';
import { Test } from '../entity/Test'
import { TestExt } from '../ext/TestExt';
import {authMiddleware} from '../middleware/authMiddleware'
import { Resp } from '../util/Resp';
const passport = require('koa-passport');

@Controller('/test')
// @Flow([authMiddleware])
class TestController {

    @Get('/')
    async list(@Ctx() ctx) {
        const list = await Test.find();
        return list
    }

    

    @Post('/')
    async create(@Body() body,@Ctx() ctx){
        const one = new Test();
        Object.assign(one,body)
        one['createAt']==undefined && (one['createAt']=new Date())
        const ret=one.save();

        ctx.set('location','/test/'+(await ret).id)
        return ret
    }

    @Patch('/:id')
    async update(@Params('id') id,@Body() body,@Ctx() ctx){
        const one=await Test.findOne(id)
        if(one){
            Object.assign(one,body)
            one['updateAt']==undefined && (one['updateAt']=new Date())
            one.save()
            return ctx.success({message:'The action finished'})
        }
        
        
    }

    @Put('/:id')
    async replace(@Params('id') id,@Body() body,@Ctx() ctx){
        let one=await Test.findOne(id)
        if(one){
            one=new Test()
            Object.assign(one,body)
            one['updateAt']==undefined && (one['updateAt']=new Date())
            one.save()
            return ctx.success({message:'The action finished'})
        }
        
        
    }

    @Delete('/:id')
    async delete(@Params('id') id,@Ctx() ctx){
        let one=await Test.findOne(id)
        if(one){
            await Test.delete({id})
            return ctx.success({message:'The action finished'})
        }
        
    }
    
    @Get('/custom-query')
    async customQuery(){
        const list=await TestExt.findWithUser(1)
        return list
    }

    @Get('/:id')
    async one(@Params('id') id) {
        const one=await Test.findOne(id)
        if(one){
            return one
        }
    }

    
}