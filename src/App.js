import { Navbar } from "./components/Navbar";
import { Information } from "./components/Information";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";

import { useState } from "react";

function App() { 
  const [dark, setDark] = useState(true); 

  return (
    <div className={dark ? 'dark' : ''}>
      <main className='px-5 bg-platinum-500
        dark:bg-darkjunglegreen-500
        md:px-10 
        lg:px-16 
        xl:px-20 
        2xl:px-40 
        3xl:px-52 
        4xl:px-60 
        5xl:px-96'>
        <Navbar dark={dark} setDark={setDark} />
        <Information dark={dark} />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

export default App;
