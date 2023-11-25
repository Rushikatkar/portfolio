import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Maincomponent from './components/Maincomponent';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  
  return (
  <>
        <Navbar/>
        <Maincomponent/>
        <Skills/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>

  </>
  );
}

export default App;
