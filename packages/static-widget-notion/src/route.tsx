import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App'

import WeatherGetter from './widgets/weather/getter'
import WeatherSetter from './widgets/weather/setter'
import WeatherList from './widgets/weather/list'

export default function () {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/widget/notion" element={<App />}>
          {/* /widget/notion */}
          <Route path="" element={<WeatherSetter />}></Route>
          <Route path="weather">
            {/* /widget/notion/weather */}
            <Route path="" element={<WeatherSetter />}></Route>
            {/* /widget/notion/weather/set */}
            <Route path="set" element={<WeatherSetter />}></Route>
            <Route path="list" element={<WeatherList />}></Route>
            <Route path=":id" element={<WeatherGetter />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}