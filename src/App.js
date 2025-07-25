import { useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Aos from 'aos';
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <>
      <Navbar />
      <div className='container'>
        <Home />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;