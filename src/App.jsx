import Certificates from "./components/Certificates/Certificates";  
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <Skills/>
     <Certificates/>
     <About/>
     <Contact/>

    </div>
  );
}

export default App;
