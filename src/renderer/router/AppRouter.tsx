import React from 'react';
import { HashRouter } from 'react-router-dom';
import HomeRouter from './HomeRouter';

export default function AppRouter() {
  return (
    <HashRouter>
      <HomeRouter />
    </HashRouter>
  );
}
