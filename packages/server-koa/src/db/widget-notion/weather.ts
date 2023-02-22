/**
 * notion天气插件数据库模型
 * @author jianghong.wei
 * @since 2022-08-26 14:46:01
 */

import Mongo from '../../utils/mongodb'

const MODEL = {
  id: String, // 唯一id
  key: String, // 生成的码
  name: String, // 插件名称
  background: String, // 背景颜色
  layout: String, // 布局
  dataColor: String,  // 字体颜色
  width: Number,  // 宽
  height: Number, // 高
  createTime: Date,
  updateTime: Date,
  // 以下都是来自官网，预留，暂不存储
  aqiColor: String, // 空气质量文字颜色
  border: Number,
  province: String,
  city: String,
  county: String,
}

const COLLECTION = 'WEATHER'

const db = new Mongo(COLLECTION, MODEL);

export default {
  find(condition?: any) {
    return db.find(condition)
  },

  insert(value: Record<string, any>) {
    return db.insert(value);
  },

  update(condition: any, value: Record<string, any>) {
    return db.update(condition, value);
  }
}