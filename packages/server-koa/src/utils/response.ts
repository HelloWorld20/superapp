/**
 * 返回消息对象封装
 * @author jianghong.wei
 * @since 2022-09-14 17:27:11
 */

import { Context } from 'koa'

export function json(ctx: Context, data?: any) {
  ctx.state = 200;
  ctx.body = { data, success: true, msg: 'ok' }
}

export function success(ctx: Context) {
  ctx.state = 200;
  ctx.body = { success: true, msg: 'ok' }
}

