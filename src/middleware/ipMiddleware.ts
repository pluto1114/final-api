import { Context } from "koa";



export const ipMiddleware = async (ctx: Context, next) => {
  const hostname=ctx.request.hostname
  console.log('ipMiddleware', hostname)
  // if('localhost'!==hostname){
  //   throw new Error('The api only accept localhost')
  // }
  await next();

};