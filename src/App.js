import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Program from './pages/program';
import Contact from './pages/contact';
import OurCourses from './pages/ourCourses';
import OutSourcing from './pages/outSourcing';



function App() {
  
  return (
    <>
    <BrowserRouter >
    <Routes>

      
      <Route path ="/" element ={<Home />} />
      <Route path ="/about" element ={<About />} />
      <Route path ="/programs" element ={<Program />} />
      <Route path ="/contact" element ={<Contact />} />
      <Route path="/ourCourses" element ={<OurCourses />} />
      <Route path="/outSourcing" element ={<OutSourcing />} />

  
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
