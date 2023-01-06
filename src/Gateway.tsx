import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TopBar from './TopBar';
import Home from './Home';
import Panel from './Panel';
import { StringList } from './StringList';

const Gateway = () => {
  return (
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/panel" element={<Panel />} />
        </Routes>
      </BrowserRouter>
  );
};

export default Gateway;
