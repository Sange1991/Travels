import React from 'react'

function Banner() {
  return (
    <div className='container py-5 d-flex justify-content-between '>
      <div className='row'>
        <h3 className='notched'>Top Notched Destination</h3>
        <div className='col-lg-3 left-img-up'>
          <div className='langtang'>
          <button className='btn btn-primary'>Read More</button>
            <img className='w-100 img-fluid imglang' src='./Images/langtang.jpg' alt=''/>
           <div className='heading6'>
            <h6>Kyangjin Valley</h6>
            <i class="bi bi-star-fill"></i>&nbsp;
            <i class="bi bi-star-fill"></i>&nbsp;
            <i class="bi bi-star-fill"></i>&nbsp;
            <i class="bi bi-star-fill"></i>&nbsp;
            <i class="bi bi-star-fill"></i>&nbsp;
            </div>
          </div>
        </div>
        <div className='col-lg-3 left-img-down'>
        <div className='annapurna'>
          <button className='btn btn-primary'>Read More</button>
            <img className='w-100 img-fluid imgann' src='./Images/annapurna.jpg' alt=''/>
           <div className='heading5'>
            <h6 >Annapurna</h6>
            <i class="bi bi-star-fill"></i>&nbsp;
            <i class="bi bi-star-fill"></i>&nbsp;
            <i class="bi bi-star-fill"></i>&nbsp;
            <i class="bi bi-star-fill"></i>&nbsp;
            <i class="bi bi-star-fill"></i>&nbsp;
            </div>
          </div>
        </div>
        <div className='col-lg-6 right-img'>
        <div className='mustang'>
          <button className='btn btn-primary btnn'>Read More</button>
            <img className='w-100 img-fluid imgmust' src='./Images/mustang1.jpg' alt=''/>
            <div className='heading4'>
            <h6>Mustang</h6>
            <i class="bi bi-star-fill"></i>&nbsp;
            <i class="bi bi-star-fill"></i>&nbsp;
            <i class="bi bi-star-fill"></i>&nbsp;
            <i class="bi bi-star-fill"></i>&nbsp;
            <i class="bi bi-star-fill"></i>&nbsp;
            </div>
          </div>
          <div className='everest'>
          <button className='btn btn-primary'>Read More</button>
            <img className='w-100 img-fluid imgnam' src='./Images/namche.jpg' alt=''/>
           <div className='heading3'>
            <h6>Namche BAzar</h6>
            <i class="bi bi-star-fill"></i>&nbsp;
            <i class="bi bi-star-fill"></i>&nbsp;
            <i class="bi bi-star-fill"></i>&nbsp;
            <i class="bi bi-star-fill"></i>&nbsp;
            <i class="bi bi-star-fill"></i>&nbsp;
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
