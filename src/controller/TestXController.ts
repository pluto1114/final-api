import { Body, Controller, Ctx, Delete, Get, Params, Post, Put, Req } from 'koa-ts-controllers';
import * as Boom from '@hapi/Boom';
import { Test } from '../entity/Test'
import { TestExt } from '../ext/TestExt';

const Handlebars = require("handlebars");
const path = require('path')
const fs = require('fs')
const exec = require('child_process').exec;

@Controller('/foo')
class TestXController {

    @Get('/')
    async list() {
        const list = await TestExt.query();
        return list
    }

    

    @Post('/')
    async create(@Body() body){
        const one = new Test();
        Object.assign(one,body)
        one.createAt=new Date()
        return one.save();
    }

    @Put('/:id')
    async replace(@Params('id') id:number,@Body() body){
        delete body.id;
        const one=await Test.findOne({id})
        Object.assign(one,body)
        const ret=one.save()
        return ret
    }

    @Delete('/:id')
    async delete(@Params('id') id:number){
        await Test.delete({id})
        return id
    }
    
    @Get('/:id')
    async one(@Params('id') id:number) {
        return await Test.findOne({id})
    }

    @Get('/handlers')
    async handlers() {
       
        
        exec('node genec',function(){
            console.log('fin')
        })

        return 'result'
    }
}