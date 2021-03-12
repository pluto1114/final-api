const Koa = require('koa');
const koaBody = require('koa-body');
const app = new Koa();
app.use(koaBody());
    // app.use( router.routes() );
    app.use(ctx => {
        if(ctx.request){
            console.log(ctx.request.body)
        }else{
            console.log('nobody')
        }
        ctx.body = `Request Body: ${JSON.stringify(ctx.request.body)}`;
      });


function parsePostData(ctx){
    return  new Promise((resolve,reject)=>{
        try {
            let postdata = '';
            ctx.req.addListener('data',(data)=>{
                postdata += data;
            });
            ctx.req.on("end",function(){
                resolve(postdata);
            })
        } catch (error) {
            reject(error);
        }
    });
}

function parseQueryStr(queryStr){
    let queryData = {};
    let queryList = queryStr.split('&');
    console.log(queryList.entries())
    for(let [index,queryStr] of queryList.entries()){
        let itemArr = queryStr.split("=");
        queryData[itemArr[0]] = decodeURIComponent(itemArr[1]); //转码
    }
    return queryData;
}

app.listen(3000,()=>{
    console.log("app starting ...")
});
