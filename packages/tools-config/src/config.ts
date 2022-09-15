/**
 * 配置读取封装
 * @author jianghong.wei
 * @since 2022-09-15 11:46:58
 */


export default class Config {
  config: Record<string, any> = {};
  constructor(input: string) {
    if (typeof input === "string") {
      this.config = Config.loadJSON(input);
    } else {
      this.config = input;
    }
  }

  static loadJSON(config: string) {
    try {
      const content = JSON.parse(config);
      return JSON.parse(content);
    } catch (error) {
      return {};
    }
  }

  static getInternally(conf: any, key: string) {
    const keys = key.split(".");
    let result = conf;
    for (const k of keys) {
      result = result[k];
      if (result == null) return null;
    }
    return result;
  }

  get(key: string): any {
    return Config.getInternally(this.config, key);
  }
}
