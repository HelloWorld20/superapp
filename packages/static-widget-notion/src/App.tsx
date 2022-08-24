import React from 'react'
import { Link, Outlet } from "react-router-dom";

export default function App() {
  return <>
    <h1>Notion widget</h1>
    <Outlet />
  </>;
};
