import React from "react";
import { Route, HashRouter, Routes } from "react-router-dom";
import App from "./App";

import SWR from "./pages/swr";

export default function () {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<SWR />}></Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}
