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
        <Route path='/' element={<Home />} />
        <Route index element={<Home />} />
        <Route path={StringList.PANEL_LINK} element={<Panel />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Gateway;
