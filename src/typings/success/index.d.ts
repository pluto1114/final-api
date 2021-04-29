import * as Application from 'koa';
/**
 * 处理 success
 *
 * ```js
 * ctx.success({ message: "hello from lin!" })
 * ```
 *
 * ```js
 * ctx.success({ message: "hello from lin!", code: 0 })
 * ```
 *
 * @param app app实例
 */
declare const success: (app: Application) => void;
declare module "success" {
    export default success;
}
