import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Blog from './pages/blog';
import Contact from './pages/contact';
import WorkSpace from './pages/workSpace';
import SingleBlog from './pages/singleBlog';



function App() {
  
  return (
    <>
    <BrowserRouter >
    <Routes>

      
      <Route path ="/" element ={<Home />} />
      <Route path ="/about" element ={<About />} />
      <Route path ="/blog" element ={<Blog />} />
      <Route path ="/contact" element ={<Contact />} />
      <Route path="/workSpace" element ={<WorkSpace />} />
      <Route path="/singleBlog" element ={<SingleBlog />} />

  
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
