import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './componets/Layout';
import Layout2 from './componets/Layout2';
import Home from './componets/Home';
import Condicionals from './componets/Condicionals';


import N1 from './P1/Level1';
import N2 from './P1/Level2';
import N3 from './P1/Level3';
import N4 from './P1/Level4';
import N5 from './P1/Level5';
import N6 from './P1/Level6';
import N7 from './P1/Level7';
import N8 from './P1/Level8';
import N9 from './P1/Level9';
import N10 from './P1/Level10';

import N11 from './P2/Level11';
import N12 from './P2/Level12';
import N13 from './P2/Level13';
import N14 from './P2/Level14';
import N15 from './P2/Level15';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="condicionals" element={<Condicionals />} />
     
      </Route>

      <Route path="/" element={<Layout2 />}>
        <Route path="condicionals" element={<Condicionals />} />
      </Route>

        <Route path="level1" element={<N1 />} />
        <Route path="level2" element={<N2 />} />
        <Route path="level3" element={<N3 />} />
        <Route path="level4" element={<N4 />} />
        <Route path="level5" element={<N5 />} />
        <Route path="level6" element={<N6 />} />
        <Route path="level7" element={<N7 />} />
        <Route path="level8" element={<N8 />} />
        <Route path="level9" element={<N9 />} />
        <Route path="level10" element={<N10 />} />
        
        <Route path="level11" element={<N11 />} />
        <Route path="level12" element={<N12 />} />
        <Route path="level13" element={<N13 />} />
        <Route path="level14" element={<N14 />} />
        <Route path="level15" element={<N15 />} />
       
    </Routes>
  );
}

export default App;
