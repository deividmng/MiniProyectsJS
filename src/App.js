

// import LinkSoon from './componets/comingSoon'

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './componets/Layout';
import Layout2 from './comopents2/Layout';
import Home from './componets/Home';
// import Home2 from '../comopents2/Home2';
import Arrays from './componets/Arrays';
import Loops from './componets/Loops';
import Objects from './componets/Objects';
import HigherFunction from './comopents2/HigherFunction';
import ComingSoon from './componets/comingSoon';

//p1
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
//p2
import N11 from './P2/Level11';
import N12 from './P2/Level12';
import N13 from './P2/Level13';

//P3';


import N14 from './P3/Level14';
import N15 from './P3/Level15';
import N16 from './P3/Level16';

import N17 from './P4/Level17';
import N18 from './P4/Level18';
import N19 from './P4/Level19';


// Part 2 od the proyect 

import N20 from './Level2P5/level1';

// import N20 from './comopents2/Level2P5/level2P1'




function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="condicionals" element={<Arrays />} />
        <Route path="loops" element={<Loops />} />
        <Route path="Objects" element={<Objects />} />
     
      </Route>

        This one is the one  of the side bar
      <Route path="/" element={<Layout2 />}>
       {/* <Route   path="../comopents2/Home2" element={<Home2 />} /> */}
        {/* <Route path="condicionals" element={<Arrays />} /> */}
        <Route path="higher" element={<HigherFunction />} />
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
        <Route path="level16" element={<N16 />} />
       
        <Route path="level17" element={<N17 />} />
        <Route path="level18" element={<N18 />} />
        <Route path="level19" element={<N19 />} />
       
      
        <Route path="level20" element={<N20 />} />
        
        {/* This one is the one to go to coming soon */}
        <Route path="comingSoon" element={<ComingSoon />} />
       
    </Routes>
  );
}

export default App;
