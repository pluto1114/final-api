import { Context } from "koa";

import {passportApp} from "../app"


export const authMiddleware = async (ctx:Context, next) => {
    ctx.state.something = 'hahaha';
    console.log('authMiddleware',ctx.request.headers)

    // await next();
    await passportApp.authenticate('jwt', { session: false })(ctx,next)
  };