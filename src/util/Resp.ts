import { Context } from "koa"

export class Resp{
    static async success(obj,ctx:Context) {
        if(ctx){
           return {
                code:'0',
                message:obj.message||'message',
                request:ctx.method+' '+ctx.url
            } 
        }else{
            return {
                code:'0',
                message:obj.message||'message'
            }
        }
        
    }
    
}