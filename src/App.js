import { Navbar } from "./components/Navbar";
import { Information } from "./components/Information";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";

function App() {  
  return (
    <main className='px-5 md:px-10 lg:px-16 xl:px-20 2xl:px-40 3xl:px-52 4xl:px-60 5xl:px-96'>
      <Navbar />
      <Information />
      <Skills />
      <Projects />
    </main>
  );
}

export default App;
