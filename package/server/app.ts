import Koa from 'koa';
import Router from 'koa-router';
import koaStatic from 'koa-static';
import { config } from './config';
import { PORT } from './constants';

const app = new Koa();

const router = new Router();

router.get('/api', async (ctx, next) => {
  ctx.body = { message: 'Hello World' };
  await next();
});

app.use(router.routes());
app.use(router.allowedMethods());

app.use(koaStatic(config.staticFilePath));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
