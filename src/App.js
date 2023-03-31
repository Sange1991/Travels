import React from 'react'
import Header from './Comp/Header'
import "./Sass/style.scss"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Hero from './Comp/Hero'
import Footer from './Comp/Footer'
import About from './Pages/About'
import Banner from './Comp/Banner'
import GoToTop from './Comp/GoToTop'
function App() {
  return (
    <div>
      <Header/>
      <GoToTop/>
      <Footer/>

    </div>
  )
}

export default App
