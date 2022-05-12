import Koa from 'koa';
import Router from 'koa-router';
import koaStatic from 'koa-static';
import koaBody from 'koa-body';
import { config } from './config';
import { PORT } from './constants';

const app = new Koa();

app.use(koaBody());

const router = new Router();

router.get('/api', async (ctx, next) => {
  ctx.body = { message: 'Hello World' };
  await next();
});

router.post('/api/save', async (ctx, next) => {
  console.log('save:', ctx.request.body);
  // ...储存到数据库
  ctx.body = { message: 'Save data successful', receivedData: ctx.request.body };
  await next();
});

app.use(router.routes());
app.use(router.allowedMethods());

app.use(koaStatic(config.staticFilePath));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
