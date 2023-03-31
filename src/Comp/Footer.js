import React from 'react'

function Footer() {
  return (
    <footer>
    <div className='container d-flex justify-content-between py-3 my-4'>
      <div className='row'>
      <div className='col-lg-3'>
      <div className='abouttravel'>
      <h6>ABOUT TRAVEL</h6>
      <p>Lorem ipsum dolor sit amet,consectetur <br/>adipiscing elit.Ut elit tellus, luctus nec<br/> ullamcorper mattis, pulvinar<br/> dapibus leo.</p>
      <div className='award d-flex gap-3'>
        <img src='https://demo.bosathemes.com/html/travele/assets/images/logo6.png'/>
        <img src='https://demo.bosathemes.com/html/travele/assets/images/logo2.png'/>
      </div>
      </div>
      </div>
      <div className='col-lg-3'>
      <div className='contactinfo'>
        <h6>CONTACT INFORMATION</h6>
          <p className='border-bottom'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href=''><i class="bi bi-telephone-fill fs-5">&nbsp;</i>+01 (977) 2599 12 </a> <br/>
          <a href=''> <i class="bi bi-envelope fs-5"></i> &nbsp;company@domain.com</a>  <br/>
          <a href=''> <i class="bi bi-geo-alt-fill fs-5">&nbsp; </i>3146 Koontz, California</a>
      </div>
      </div>
      <div className='col-lg-3'>
      <div className='latestpost'>
        <h6>LATEST POST</h6>
         <a href=''>Life is a beautiful journey not a destination</a> <br/>
         <span>August 17, 2021 No Comments</span> <br/>
         <a href=''>Take only memories, leave only footprints</a>
      </div>
      </div>
      <div className='col-lg-3'>
      <div className='subscribe'>
        <h6>SUBSCRIBE US</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
       <form className='form'>
         <input className='email' type="text" id="Email" name="Email" value="" placeholder='Email'/><br/>
         <input  className="submit"type="submit" value="Submit"/>
      </form>
      <div className='socialicon py-2 fs-5'>
     <a href=''><i class="bi bi-facebook px-2"></i></a> 
     <a href=''> <i class="bi bi-instagram px-2"></i></a> 
     <a href=''> <i class="bi bi-whatsapp px-2"></i></a> 
      </div>
      </div>
      </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer
