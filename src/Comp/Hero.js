import React from 'react'
import { Routes,Route,} from 'react-router-dom'
import Carouselimg from '../Data/Carouselimg'
import Banner from './Banner'
function Hero() {
  return (
    <section className='container-fluid'>
   <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
  {Carouselimg.map((a)=>(
  <div class="carousel-item active" data-bs-interval="10000">
  <img src={a.img} class="d-block w-100" alt="..."/>
  </div>
  ))}
    
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<Routes>
<Route path="" element={<Banner/>} />
</Routes>
</section>


  )
}

export default Hero
