import React from 'react'
import AnnapurnaData from '../Data/AnnapurnaData'
import Carouselimg from '../Data/Carouselimg'
function Annapurna() {
  return (
    <div className='annapurna'>
      <div className='container py-3'>
        <h3>Annapurna Base Camp Trek</h3>
        <img  className="w-100 img-fluid" src='./Images/annapurna1.jpg' alt=''/>
        <div className='col-lg-12 trip py-3 d-flex justify-content-between annapurnadiv'>
            <div className='d-flex gap-2'>
            <i class="bi bi-calendar-fill fs-2"></i>
            <span>
                <h6>Trip Duration</h6>
                <p>6 Days</p>
            </span>
            </div>
            <div className='d-flex gap-2'>
            <i class="bi bi-speedometer fs-2"></i>
            <span>
                <h6>Difficulty Level</h6>
                <p>Easy-Moderate</p>
            </span>
            </div>
            <div className='d-flex gap-2'>
            <i class="bi bi-image-alt fs-2"></i>
            <span>
                <h6>Max Altitude</h6>
                <p>4130 m.</p>
            </span>
            </div>
            <div className='d-flex gap-2'>
            <i class="bi bi-cloud-lightning-rain fs-2"></i>
            <span>
                <h6>Best Season</h6>
                <p>March-May & Sep- Nov</p>
            </span>
            </div>
        </div>
        <div className='row py-5 overview'>
        <div className='col-lg-8'>
        <h4>OVERVIEW</h4>
        <p>Trek to Annapurna base camp is an extraordinary adventure into the glacial heart of the western Himalayas. We'll come face-to-face with the 10th highest mountain in the world, Mt. Annapurna 8091m.</p>
        <h5>ANNAPURNA BASE CAMP TREK HIGHLIGHTS </h5>
        <ul>
            <li>Enjoy a scenic drive through Nepal’s rural countryside between the capital city of Kathmandu and the adventure hub of Pokhara.</li>
            <li>Take in the sights and sounds of beautiful Pokhara, where the towering Himalayas can be seen reflected in the crystalline waters of Lake Phewa.</li>
            <li>Relish a sublime view of the sun setting over a panorama of spectacular mountains, including Annapurna, Machapuchare, Gangapurna, and more.</li>
            <li>Reward yourself with a relaxing soak at the natural hot springs at Jhinu Danda.</li>
            <li>Explore the fascinating cultural traditions of the hospitable Gurung and Magar people.</li>
        </ul>
        <p>This trek is also known as the Annapurna Sanctuary trek; Trail Follows winding trails along forested slopes and treks alongside rushing rivers of surpassing beauty as we approach Annapurna Base Camp on this uniquely accessible six-day itinerary.</p>
        <p>
It's an incredible combination of diverse cultures and nature. This trip is more than just a trek that we will never forget.</p>
<p>
Annapurna Base camp trekking ABC is one of the most popular hikes in the world. It's truly a trip of a lifetime experience.</p>
<p>
Do you want to enjoy the thrills of this epic Annapurna trek without devoting weeks upon weeks to the experience? Ourpopular six-day ABC trek itinerary might be just what you're looking for.</p>
<p>
This authentic Himalayan trekking package is the perfect introduction to the natural splendor of Nepal, taking you across an extraordinary range of landscapes over the course of just six days.</p>
<p>
You'll stand in the shadow of some of the highest mountains on the planet, including skyscraping giants like Gangapurna (7,455 meters), Machapuchare (6,993 meters), and Himalchuli (7,893 meters).</p>
<p>
All told, the Annapurna massif is comprised of six distinct peaks reaching higher than 7,000 meters. The mighty Annapurna I clocks in at 8,091 meters, earning it the title of the 10th-highest mountain in the world, and you'll have front-row tickets to see it for yourself.</p>
<p>
But there’s more to the Annapurna Base Camp Trek than the spectacular scenery alone. This route is often renowned as the best trek in the country when it comes to cultural diversity and the opportunity to become acquainted with Nepali people from a variety of ethnic backgrounds.</p>
<p>
The mountain communities here in the Annapurna region are populated by Gurung and Magar villages and we'll visit a number of monasteries, temples, and shrines that are critically important to their primarily Buddhist faith.</p>
<p>
Our trail will also lead us through the Annapurna Conservation Area, where we'll have the chance to spot rare animals like the red panda and Himalayan monal against a backdrop of lush greenery and shaded forest.</p>

<p>And all the while, craggy peaks, and graceful summits soar over our heads to catch the ethereal quality of light which can only be found here in the rarefied atmosphere of the Himalayas.</p>
<p>
Best of all, our short comfortable ABC hike allows you to savor the spirit of adventure without worrying about all the little details. Alpine Ramble Treks will welcome you upon arrival in Kathmandu or Pokhara and arrange all of your necessary transportation, accommodations, meals, and trekking permits.</p>
<p>
From the little village of Nayapul to Annapurna Base Camp itself, one of our friendly guides will be with you each step of the way to identify the correct route, assist you with any difficult patches of hiking, and share colorful stories about this region of Nepal.</p>
<p>
We've proudly operated trekking and adventure tours in the Himalayas for years, and each of our guides is a consummate professional and a friend waiting to be made.</p>
</div>
<div className='col-lg-4 py-3'>
    {Carouselimg.slice(0,4).map((a)=>(
        <img className=' img-fluid w-100' src={a.img} alt=''/>
    ))}
    
    <h5>Itinerary</h5>
<table className='table'>
    <thead>
        <tr>
            <th>Days</th>
            <th>Destination</th>
        </tr>
    </thead>
    <tbody>
        {AnnapurnaData.map((a)=>(
             <tr>
             <td>{a.day}</td>
             <td>{a.destination}</td>
         </tr>
        ))}
       
      
    </tbody>
</table>
</div>
</div>
</div>
    </div>
  )
}

export default Annapurna
