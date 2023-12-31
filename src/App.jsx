import { useState } from 'react';
import	'./app.css';

import { Menu } from './Componentes/Header/Menu/Menu';
import { AfterHeader } from './Componentes/Main/AfterHeader/AfterHeader';
import { Skills } from './Componentes/Main/Skills/Skills';
import { Projects } from './Componentes/Main/Projects/Projects';
import { Sobre } from './Componentes/Main/Sobre/Sobre';

function App() {

  return (
    <div className='containerAll'>
      <header>
        <Menu/>
      </header>
      <main>
        <AfterHeader/>
        <Skills/>
        <Projects/>
        <Sobre/>
      </main>
      <footer>
      </footer>
    </div>
  );
};

export default App;
