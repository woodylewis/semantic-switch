import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TopBar from './TopBar';
import Home from './Home';

const Gateway = () => {
  return (
    <div>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Gateway;
