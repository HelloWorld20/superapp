import * as Router from "@koa/router";
import db from '../../db/widget-notion/weather'
import RES from '../../utils/service-error'
import * as response from '../../utils/response'

const router = new Router();

/** 获取列表 */
router.get('/list', async (ctx, next) => {

  let res = await db.find();
  if (!res) throw RES.GENERAL.DB_ERROR;

  res = Array.from(res);

  response.json(ctx, res);
})

/** 新增 */
router.post('/:id', async (ctx, next) => {
  const { id } = ctx.params;
  const { key } = ctx.request.body as any;

  let res = await db.find({ id })

  if (res) {
    res = Array.from(res);
    if (res.length > 0) {
      throw RES.GENERAL.FORBIDDEN('已存在相同记录')
    }
  }
  const { name, width, height, layout, background, dataColor } = ctx.request.body as any;

  const updateTime = new Date();
  const createTime = updateTime;


  db.insert({ id, key, name, width, height, layout, background, dataColor, createTime, updateTime })

  response.success(ctx)
})

// 获取单个
router.get('/:id', async (ctx, next) => {
  const { id } = ctx.params;

  let res = await db.find({ id });
  if (!res) throw RES.GENERAL.DB_ERROR;

  res = Array.from(res);

  if (res.length === 0) throw RES.GENERAL.NOT_FOUND('未找到记录');

  response.json(ctx, res[0]);
})


export default router;