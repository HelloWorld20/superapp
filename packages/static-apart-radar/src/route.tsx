import React from "react";
import { Route, HashRouter, Routes } from "react-router-dom";
import App from './App'

import Community from "./pages/community";
import DoubleMap from "./pages/double-map";
import Apartment from "./pages/apartment";

export default function () {

  return (
    /* HashRouter, 而不是 BrowserRouter.
      HashRouter利用hash切换路由.而BrowserRouter则直接跳转(且没用到history.pushState) */
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="community" element={<Community />}></Route>
          <Route path="/doubleMap" element={<DoubleMap />}></Route>
          <Route path="/apartment" element={<Apartment />}></Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}