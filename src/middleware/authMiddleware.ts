import { Context } from "koa";

import {passportApp} from "../app"


export const authMiddleware = async (ctx:Context, next) => {
    ctx.state.something = 'hahaha';
    console.log('authMiddleware',passportApp)

    // await next();
    await passportApp.authenticate('jwt', { session: false })(ctx,next)
  };