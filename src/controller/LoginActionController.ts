import { Body, Controller, Ctx, Delete, Flow, Get, Params, Patch, Post, Put, Req, Res } from 'koa-ts-controllers';
const jwt = require('jsonwebtoken');
const config = require('../config/default');
@Controller('/loginAction')
class LoginActionController {

   
    

    @Post('/')
    async login(@Body() body,@Ctx() ctx){
        const payload = {
            email:'xiongmao1114@163.com'
        };
        //生成token
        const token = jwt.sign(payload, config.secretKey, {
            expiresIn: 3600
        });

        ctx.append('X-AuthToken',token);
        return token
    }

   
    
}