import * as Router from "@koa/router";

const router = new Router();

router.post('/set', async (ctx, next) => {
  console.log(ctx.body);
  ctx.status = 200;
  ctx.body = { data: 'ok' }
  await next();
})

router.get('/', async (ctx, next) => {
  console.log(ctx.body);
  ctx.status = 200;
  ctx.body = { data: 'ok' }
  await next();
})

export default router;