import * as Router from "@koa/router";
import db from '../../db/widget-notion/weather'
import RES from '../../utils/service-error'
import * as response from '../../utils/response'

const router = new Router();


router.get('/list', async (ctx, next) => {

  let res = await db.find();
  if (!res) throw RES.GENERAL.DB_ERROR;

  res = Array.from(res);

  response.json(ctx, res);
})

router.post('/:id', async (ctx, next) => {
  const { id } = ctx.params;
  const { key } = ctx.request.body as any;

  db.insert({ id, key })

  response.success(ctx)
})

router.get('/:id', async (ctx, next) => {
  const { id } = ctx.params;

  let res = await db.find({ id });
  if (!res) throw RES.GENERAL.DB_ERROR;

  res = Array.from(res);

  if (res.length === 0) throw RES.GENERAL.NOT_FOUND;

  response.json(ctx, res);
})


export default router;