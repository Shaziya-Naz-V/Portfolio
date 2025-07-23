import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
       <Route path="/About" element={<About/>}/>
       <Route path="/Skills" element={<Skills/>}/>
        <Route path="/Contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
