/*
 * @Todo: 请补充模块描述
 *
 * @Author: weijianghong
 * @Date: 2023-03-30 18:36:08
 *
 * Copyright © 2014-2023 Rabbitpre.com. All Rights Reserved.
 */

import React from "react";
import { createRoot } from "react-dom/client";

/**
 * 渲染子应用，qiankun需要一个入口。此处渲染一个<div id="subapp-viewport" />，子应用会挂载到这个节点上
 */
function Render(props) {
  const { loading } = props;

  return (
    <>
      {loading && <h4 className="subapp-loading">Loading...</h4>}
      <div id="app" />
    </>
  );
}

export default function render({ loading }) {
  const container = document.getElementById("qiankun-app");
  const root = createRoot(container);

  root.render(<Render loading={loading} />);
}
