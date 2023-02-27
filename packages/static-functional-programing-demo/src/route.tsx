import React from "react";
import { Route, HashRouter, Routes } from "react-router-dom";
import App from "./App";

import SWR from "./pages/swr";
import Storage from "./pages/localstorage";
import SwrMultiChild from "./pages/swr/multi-child";

export default function () {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/storage" element={<Storage />}></Route>
          <Route path="/swr" element={<SWR />}></Route>
          <Route path="/swr/multi-child" element={<SwrMultiChild />}></Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}
