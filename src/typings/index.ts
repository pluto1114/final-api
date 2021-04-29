declare module 'koa' {
    export interface Context {
      setResponse(data: object, status: string, msg?: string, code?: number): void;
    }
  }
  
  /**
   * 正常发送响应时使用此函数
   */
  export function setResponse(data: object,
                              status: string = 'OK',
                              msg: string = 'OK',
                              code: number = 200) {
    this.status = code;
    const time = new Date();
    this.body = { status, msg, time, data: data || {} };
  }