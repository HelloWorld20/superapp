import React, { useState } from 'react'
import { Link, Outlet } from "react-router-dom";
import { Menu } from "antd";

export default function App() {

  const route = location.hash.slice(2);
  const defaultCurrent = route || "community";

  const [current, setCurrent] = useState<string[]>([defaultCurrent]);
  const handleClick = (e: any) => setCurrent([e.key]);

  return <>
    <Menu
      style={{ display: "flex", justifyContent: "center" }}
      mode="horizontal"
      selectedKeys={current}
      onClick={handleClick}
    >
      <Menu.Item key="community">
        <Link to="community">首页</Link>
      </Menu.Item>
      <Menu.Item key="doubleMap">
        <Link to="doubleMap">全屏地图</Link>
      </Menu.Item>
      <Menu.Item key="apartment">
        <Link to="apartment">户型记录</Link>
      </Menu.Item>
    </Menu>
    <Outlet />
  </>;
};
