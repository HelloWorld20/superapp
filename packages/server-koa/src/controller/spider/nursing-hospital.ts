import * as Router from "@koa/router";
import axios from 'axios';
import config from '../../config'
import InteravlScheduler from '../../utils/interval-scheduler';
import RES from '../../utils/service-error'

const router = new Router();

const cid = config.get('pushserver.cid')

const URL = 'https://mp.mhealth100.com/gateway/registration/appointment/schedule/find?branchCode=101222001&deptId=3080004&deptName=%25E5%2585%258D%25E8%25B4%25B9%25E5%25A9%259A%25E5%2589%258D%25E5%25AD%2595%25E5%2589%258D%25E4%25BC%2598%25E7%2594%259F%25E5%2592%25A8%25E8%25AF%25A2&deptType=&ajaxConfig=true'

const ERROR_MESSAGE = 'Request failed with status code 401'


const schedulerCallback = async ([cookie, startDate, endDate]: any) => {
  const res = await axios({
    method: 'get',
    url: `${URL}&startDate=${startDate}&endDate=${endDate}`,
    headers: { cookie }
  }).then(res => res.data).catch((err) => {

    if (err.message === ERROR_MESSAGE) {
      sendMessageExpire();
    }

    scheduler.kill();
    throw RES.GENERAL.SERVER_ERROR;
  })

  const matchedInfo = walkRestCount(res);

  if (matchedInfo.length > 0) {
    // 消息推送
    sendMessageSuccess(matchedInfo)
    scheduler.kill();
  }
}

const scheduler = new InteravlScheduler(5, schedulerCallback)


router.post("/", async (ctx, next) => {
  const { cookie, startDate, endDate } = ctx.request.body as Record<string, any>

  scheduler.exec(cookie, startDate, endDate);

  ctx.body = '已启动'

  await next();
});

router.get("/kill", async (ctx, next) => {
  scheduler.kill();
  ctx.body = "process killed";
  await next();
});

function walkRestCount(raw: Record<string, any>): any[] {
  const scheduleInfos = raw.data[0].scheduleInfos;
  const matchedInfo: any[] = [];
  scheduleInfos.forEach((info: any) => {
    if (info.regTotalCount !== "0") {
      matchedInfo.push(info);
    }
  })
  return matchedInfo;
}

function sendMessageSuccess(info: any[]) {
  const prefix = '已爬取到福田妇幼保健院婚检有预约号，'
  const count = `共有${info.length}段合适的时间有号：`;

  let detail = '分别是'

  info.forEach(inf => {
    detail += `${inf.regDate}${inf.shiftName}${inf.weekName},有${inf.regTotalCount}个号`
  })

  console.log(count + detail);

  const msg = prefix + count + detail
  sendMessage(msg);
}

function sendMessageExpire() {
  const msg = 'cookie已过期，请重新传cookie'
  sendMessage(msg);
}

function sendMessage(msg: string) {
  console.log('%c [ sendMessage ]-95', 'font-size:13px; background:pink; color:#bf2c9f;', msg)

  console.log('process env', process.env)
  if (process.env.NODE_ENV !== 'development') {
    axios({
      url: `https://jianghong.site/server/push?text=${encodeURIComponent(msg)}&cid=${cid}`,
      method: 'get'
    })
  }
}

export default router;

