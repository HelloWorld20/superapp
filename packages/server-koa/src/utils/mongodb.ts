/**
 * mongodb 管理
 * @author jianghong.wei
 * @since 2022-08-26 14:52:01
 */

import config from '../config';
import mongoose, { Model, Document, Schema, FilterQuery, SchemaDefinition } from 'mongoose'

type Condition = FilterQuery<Document<any, any, any>>;

const mongoConf: Record<string, any> = config.get('mongo');

// mongoose.connect('mongodb://用户名:密码@127.0.0.1:27017/数据库名称')
const DB_URL = (function () {
  if (mongoConf.user && mongoConf.password) {
    return `mongodb://${mongoConf.user}:${encodeURIComponent(mongoConf.password)}@${mongoConf.host}:${mongoConf.port}/${mongoConf.dbname}`;
  } else {
    return `mongodb://${mongoConf.host}:${mongoConf.port}/${mongoConf.dbname}`;
  }
})();

export default class Mongo {
  constructor(collection: string, model: SchemaDefinition) {
    if (this.isConnected) return;

    if (process.env.NODE_ENV === 'development') {
      mongoose.set('debug', true);
    }

    /** 连接 */
    mongoose.connect(DB_URL)

    const db = mongoose.connection
    db.on('error', console.error.bind(console, '连接错误:'));
    db.once('open', () => {
      this.isConnected = true;
      console.log("Mongoose 连接成功 " + DB_URL);
      const schema = new Schema(model);
      this.model = mongoose.model<Document<any, any, any>>(collection, schema);
    })
  }

  private isConnected = false;

  private model: Model<Document, {}> | null = null;

  /**
   * 插入一个
   * @param condition 
   * @returns 
   */
  find(condition: Condition = {}) {
    if (!this.model) return this.__throw_not_ready_error__();

    return this.model.find(condition, { _id: 0, __v: 0 });
  }
  /**
   * 插入一条记录
   * @param value 
   * @returns 
   */
  insert(value: Record<string, any>) {
    if (!this.model) return this.__throw_not_ready_error__();
    this.model.insertMany(value)
  }
  /**
   * 更新一条记录
   * @param condition 
   * @param value 
   * @returns 
   */
  update(condition: Condition, value: Record<string, any>) {
    if (!this.model) return this.__throw_not_ready_error__();
    this.model.updateOne(condition, value)
  }
  /**
   * 删除所有匹配记录
   * @param condition 
   * @returns 
   */
  del(condition: Condition) {
    if (!this.model) return this.__throw_not_ready_error__();
    this.model.remove(condition);
  }
  /**
   * 获取model对象
   * @returns 
   */
  getModel() {
    return this.model;
  }

  private __throw_not_ready_error__() {
    throw new Error('model not found, maybe mongodb was not connected');
  }
}

