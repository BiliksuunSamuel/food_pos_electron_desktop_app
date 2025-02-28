import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/home';
import { homeRoutes } from '../routes/homeRoutes';

export default function HomeRouter() {
  console.log(homeRoutes);
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        {homeRoutes
          .filter((item) => Boolean(item.route))
          .map((route) => (
            <Route
              key={route.title}
              path={route.route}
              element={<route.Page />}
            />
          ))}
      </Route>
    </Routes>
  );
}
