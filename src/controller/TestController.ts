import { Body, Controller, Ctx, Delete, Get, Params, Patch, Post, Put, Req, Res } from 'koa-ts-controllers';
import * as Boom from '@hapi/Boom';
import { Test } from '../entity/Test'
import { TestExt } from '../ext/TestExt';

@Controller('/test')
class TestController {

    @Get('/')
    async list() {
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
    async update(@Params('id') id,@Body() body){
        const one=await Test.findOne(id)
        if(one){
            Object.assign(one,body)
            one['updateAt']==undefined && (one['updateAt']=new Date())
            return one.save()
        }
        
        
    }

    @Put('/:id')
    async replace(@Params('id') id,@Body() body){
        let one=await Test.findOne(id)
        if(one){
            one=new Test()
            Object.assign(one,body)
            one['updateAt']==undefined && (one['updateAt']=new Date())
            return one.save()
        }
        
        
    }

    @Delete('/:id')
    async delete(@Params('id') id){
        let one=await Test.findOne(id)
        if(one){
            await Test.delete({id})
            return one
        }
        
    }
    
    @Get('/custom-query')
    async customQuery(){
        const list=await TestExt.findWithUser(1)
        // const list=await Test.query('select t1.*,u.age from test t1 join user u on t1.user_id=u.id where u.id=1')
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