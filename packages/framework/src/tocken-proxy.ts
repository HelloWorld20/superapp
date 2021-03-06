// access_tocken中控服务器
import * as Api from "./api";
// import * as config from "ww-config";
// const { AppId, AppSecret } = config.get("wechat");
const AppId = "wxe6eadfba29db766f";
const AppSecret = "4a98a11e54635e372ffafd17e366f8c9";
class TockenProxy {
  constructor() {
    this.fetchAndSaveTocken();
  }
  private tocken = "";
  private expiresTime = 0;

  fetchTocken() {
    return Api.get("https://api.weixin.qq.com/cgi-bin/token", {
      params: {
        grant_type: "client_credential",
        appid: AppId,
        secret: AppSecret,
      },
    });
  }
  async fetchAndSaveTocken() {
    const { access_token, expires_in }: any = await this.fetchTocken();
    this.tocken = access_token;
    const current = new Date().getTime();
    this.expiresTime = (current + expires_in - 100) * 1000; // 减掉100秒时间
    return { access_token, expires_in };
  }
  isOutDate() {
    return new Date().getTime() > this.expiresTime;
  }
  clearTocken() {
    this.tocken = "";
  }
  async getTocken() {
    if (!this.tocken) {
      const access_token = await this.fetchAndSaveTocken();
      return access_token;
    }
    return this.tocken;
  }
}

export default new TockenProxy();
