import { start, registerMicroApps } from "qiankun";

import render from "./render/react-render";

render({ loading: true });

const loader = (loading) => render({ loading });

registerMicroApps([
  {
    name: "apart-radar",
    entry: "//localhost:3000",
    container: "#app",
    activeRule: "/apart-radar",
    loader, // loader貌似可以获取一些状态
  },
]);

start();
