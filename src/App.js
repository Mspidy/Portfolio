
import './App.css';
import About from './components/About/about';
import Contact from './components/Footer/contact';
import Header from './components/Header/Header';
import Skills from './components/Skills/skill';
import Subject from './components/starproject/subject';


function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Skills/>
      <Subject/>
      <Contact/>
    </div>
  );
}

export default App;
