const Koa = require('koa')
const app = new Koa()
const APP_PROT = require('./config/config.default')
app.use((ctx,next)=>{
    ctx.body = 'hello world'
})
app.listen(APP_PROT,(ctx,next)=>{
   console.log(`server is run in http://localhost:${APP_PROT}`);
})