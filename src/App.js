import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Program from './pages/program';
import Contact from './pages/contact';
import OurCourses from './pages/ourCourses';
import OutSourcing from './pages/outSourcing';
import CoWorkingSpace from "./pages/coWorkingSpace";



function App() {
  
  return (
    <>
    <BrowserRouter >
    <Routes>

      
      <Route path ="/" element ={<Home />} />
      <Route path ="/about" element ={<About />} />
      <Route path ="/programs" element ={<Program />} />
      <Route path ="/contact" element ={<Contact />} />
      <Route path="/ourcourses" element ={<OurCourses />} />
      <Route path="/outsourcing" element ={<OutSourcing />} />
      <Route path="/coworkingspace" element ={<CoWorkingSpace />} />

  
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
