import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TopBar from './TopBar';
import Home from './Home';
import Ontology from './Ontology';
import Switch from './Switch';
import Pricing from './Pricing';

import { StringList } from './StringList';

const Gateway = () => {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route index element={<Home />} />
        <Route path={StringList.ONTOLOGY_LINK} element={<Ontology />} />
        <Route path={StringList.SWITCH_LINK} element={<Switch />} />
        <Route path={StringList.PRICING_LINK} element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Gateway;
