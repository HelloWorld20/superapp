import React from "react";
import { Route, HashRouter, Routes } from "react-router-dom";
import App from './App'

import WeatherGetter from './widgets/weather/getter'
import WeatherSetter from './widgets/weather/setter'

export default function () {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<WeatherSetter />}></Route>
          <Route path="weather/set" element={<WeatherSetter />}></Route>
          <Route path="weather/get" element={<WeatherGetter />}></Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}