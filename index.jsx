import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"
import "./server"
import VanDetail from './pages/VanDetail';


function App() {
  return (
    <BrowserRouter>
    
      <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
      
      {/* VanDetail will be rendered if any params  are passed in the URL, this is designed to load the specific clicked van detail page */}

       
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Routes>
      
    
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);