/**
 * 定时任务
 * @author jianghong.wei
 * @since 2022-08-24 10:55:21
 */

import { ToadScheduler, SimpleIntervalJob, AsyncTask } from 'toad-scheduler';

/**
 * @example 
 * 
 * const schedulerCallback = async (name, time) => {}; // 任务函数，参数由exec方法传入
 * 
 * const scheduler = new InteravlScheduler(5, schedulerCallback);
 * 
 * scheduler.exec(name, time);  // 执行
 * scheduler.kill();  // 终止
 */
export default class InteravlScheduler {
  scheduler: any = null;
  cb: (args: any) => Promise<void> = () => Promise.resolve();
  gap: number = 1;
  name: string = '';

  constructor(gap: number, cb: (args: any) => Promise<void>, name?: string) {
    this.scheduler = new ToadScheduler();
    this.cb = cb;
    this.name = name || '';
    this.gap = gap;
    
  }

  exec(...args: any) {
    this.kill();
    const task = new AsyncTask('simple task', () => this.cb(args), ((err: Error) => console.log('error', err)));
    const job = new SimpleIntervalJob({ seconds: this.gap }, task);
    this.scheduler.addSimpleIntervalJob(job);
  }

  kill() {
    this.scheduler.stop();
  }
}