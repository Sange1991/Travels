import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import About from '../Pages/About';
import Travel from '../Pages/Travel';
import Blog from '../Pages/Blog';
import Contact from '../Pages/Contact';
import Hero from './Hero';
import Banner from "./Banner"
import Annapurna from '../Destination/Annapurna';
import Everest from '../Destination/Everest';
import Langtang from '../Destination/Langtang';
import Mustang from '../Destination/Mustang';

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
  <div className="container-fluid ">
    <Link className="navbar-brand" to="/"><img className='logo' src='./Images/logo.svg ' alt='nav bar'/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About Us</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/travel" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Travel
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/annapurna">Annapurna Trek</Link></li>
            <li><Link className="dropdown-item" to="/everest">Everest Trek</Link></li>
            <li><Link className="dropdown-item" to="/langtang">Langtang Trek</Link></li>
            <li><Link className="dropdown-item" to="/mustang">Mustang Trek</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/blog">Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn  search" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/annapurna" element={<Annapurna/>} />
        <Route path="/everest" element={<Everest/>} />
        <Route path="/langtang" element={<Langtang/>} />
        <Route path="/mustang" element={<Mustang/>} />
        
        
      </Routes>
    </div>
  )
}

export default Header
