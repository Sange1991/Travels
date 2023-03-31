import React from 'react'
import Logo from '../Data/Logo'
function About() {
  return (
  <>
    <section className='container'>
    <div className='row py-3 '>
      <h4 className='gallery'>Our Tour Gallery...</h4>
    <div className='col-lg-6'>
      <h1 className='agency'>HELLO. OUR AGENCY<br/> HAS BEEN  PRESENT <br/>BEST IN THE MARKET</h1>
    </div>
    <div className='col-lg-6'>
      <p className='descpa'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Placeat nostrud natus tempora justo. Laboriosam, eget mus nostrud natus tempora.

Lorem ipsum dolor sit amet, consec tetur adipiscing eliting dolor sit amet. Placeat nostrud natus tempora justo nostrud natus tempora.</p>
    </div>
    <div className='col-lg-12 d-flex py-5 mainitem'>
      <div className='price d-flex gap-2 '>
      <i class="bi bi-currency-dollar fs-1"></i>
      <span>
        <h6>AFFORDABLE PRICE</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </span>
      </div>
      <div className='destination  d-flex gap-2'>
      <i class="bi bi-image-alt fs-1"></i>
      <span>
        <h6>BEST DESTINATION</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </span>
      </div>
      <div className='service d-flex gap-2'>
      <i class="bi bi-person-hearts fs-1"></i>
      <span>
        <h6>PERSONAL SERVICE</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </span>
      </div>
    </div>

    </div>
    <div class="ratio ratio-21x9">
  <iframe src="https://www.youtube.com/embed/fEErySYqItI" title="YouTube video" allowfullscreen></iframe>
</div>
    </section>
    <section className='associate'>
      <div className='row'>
        <div className='partner col-lg-12 text-center py-3'>
          <h6>OUR ASSOCAITES</h6>
          <h3> PARTNER'S AND CLIENTS</h3>
            <p>Mollit voluptatem perspiciatis convallis  elementum <br/> corporis quo veritatis aliquid blandit,  blandit<br/>  torquent, odit placeat. Adipiscing <br/> repudiandae eius cursus? Nostrum magnis<br/>  maxime curae placeat.</p>
        </div>
        <div className='client ms-5 '>
          <div className='row'>
            {Logo.map((a)=>(
                <div className='col-lg-2'>
                <img src={a.imgage} alt=''/>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default About
