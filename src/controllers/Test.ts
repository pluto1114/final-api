import {Controller, Get} from 'koa-ts-controllers';
import * as Boom from '@hapi/Boom';
@Controller('/foo')
class TestController {
    
    @Get('/')
    async sayWorld() {
        throw Boom.notFound('用户不存在', '这是错误的详细描述');
        return 'Hello Test xxxx!';
    }
  
}