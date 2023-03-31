import React from 'react'
import EverestData from '../Data/EverestData'
function Everest() {
  return (
    <section className='container namche'>
      <h3>Explore Everest Base Camp Trek</h3>
      <div className='row py-3'>
        <div className='col-lg-8 '>
          <img className='w-100 img-fluid' src='Images/everest.jpeg' alt=''/>
          <div className='d-flex justify-content-between py-3 arrange'>
          <div className='arrangement '>
            <span className='d-flex gap-2'><i class="bi bi-geo-fill"></i> <p> Starts at: Lukla</p></span>
            <span className='d-flex gap-2'><i class="bi bi-geo-alt"></i> <p> Trek Region: Everest</p></span>
            <span className='d-flex gap-2'><i class="bi bi-alarm"></i> <p>  Duration: 14 days</p></span>
            <span className='d-flex gap-2'><i class="bi bi-image-alt"></i> <p> Max Altitude: 5,545 m/ 18,192 ft</p></span>
            
          </div>
          <div className='arrangement '>
            <span className='d-flex gap-2'><i class="bi bi-flag-fill "></i> <p>  Ends at: Lukla</p></span>
            <span className='d-flex gap-2'><i class="bi bi-airplane-fill"></i> <p> Transport: Flight</p></span>
            <span className='d-flex gap-2'><i class="bi bi-bar-chart-fill"></i> <p> Trip Grade: Strenuous</p></span>
            <span className='d-flex gap-2'><i class="bi bi-bank2"></i> <p>  Accommodation: Teahouse</p></span>
            
          </div>
          
          </div>
        </div>
        <div className='col-lg-4'>
          <h5>A Typical Day on the EBC Trek</h5>
          <p>
While the scenery and mountain views may change daily, some things do not.  For example, each day on the trek starts and ends similarly:-</p>
<p>
We start our day early, at around 6 or 7 am, when we all meet for breakfast in the teahouse (lodge) dining room.  Breakfast is ordered the night before so the teahouse owner can have it ready for us on time. After breakfast, prepare your duffel bag, which the porter will carry.  He will set off at his own pace.  All you need to carry is a day pack with what you think you might require for the day, such as a water bottle, sunscreen, snacks, etc. </p>
<p>
Then start hiking with your guide.  The way will be familiar because your guide will have explained the day’s highlights the night before.  We continue walking until the lunch stop on the trail. This will most likely be at a small settlement.  After lunch, follow the trail until the overnight teahouse.</p>
<p>
At the teahouse, it’s time to choose the items off the menu for dinner before relaxing with other travelers or writing your diary.  The guide will explain the route and landscape for the next day during or after dinner.  Don’t forget to order breakfast before heading off to bed.</p>
        </div>
        
      </div>
      <div className='row'>
      <div className='col-lg-6'>
        <h4>Everest Base Camp Trek Itinerary</h4>
        <table className='table'>
    <thead>
        <tr>
            <th>Days</th>
            <th>Destination</th>
            <th>Altitude</th>
            <th>Time</th>
        </tr>
    </thead>
    <tbody>
        {EverestData.map((a)=>(
             <tr>
             <td>{a.day}</td>
             <td>{a.destiantion}</td>
             <td>{a.altitude}</td>
             <td>{a.time}</td>
         </tr>
        ))}
       
       
    </tbody>
        </table>
        </div>
        <div className='col-lg-6 ebc'>
        <h4>Important Notes for EBC Trek</h4>
        <ul>
          <li>Flights to the Everest Region now depart from Ramchhap airport due to congestion at the Kathmandu airport.  Ramchhap is several hours’ drive from Kathmandu, so we leave Kathmandu at 1 am to reach there for the early morning flights.  There are no day or evening flights due to the high winds in the mountains in the afternoons.  </li>
          <li>Flights can be delayed or canceled due to bad weather.  We recommend you build in a 2 or 3-night contingency plan.  That means do not book your international flight for Tuesday if your planned flight from Lukla is on Monday.  Best to book it on  Thursday or Friday. </li>
          <li>If you wish to take a helicopter flight from Kathmandu to Lukla, there will be an additional charge of around $250 to $300.</li>
          <li>There is no additional fee for the package rate for solo travellers.  However, if you are travelling alone and wish for a single room, please add on the single supplement during checkout. </li>
          <li>Porters can only carry 20kg.  So please pack lightly.  We will provide you with a bag/duffle bag that is easy for porters to carry.</li>
          <li>Airlines have a weight limit of 15kg per person.  Any excess can be paid at the airline counter at the airport.  Note that this is only possible if the flight is not overweight already.  Again, please pack lightly.</li>
          <li>Please provide us with a copy of your passport at the booking stage, as we require this for domestic flight booking.</li>
          <li>Meals on the trek are included in the price.  This does not include hot or cold drinks, alcohol, or extra snacks.  In Kathmandu, breakfast is included, but not lunch or dinner.
          There are extra expenses for hot showers ($3 to $5) and charging your battery ($1 to $3).</li>
          <li>You can buy a wifi card in Lukla or Namche Bazaar http://everestlink.com.np/  for $25.  10 or 20 GB of data are provided for use over 30 days in the Everest Region.  We cannot guarantee the wifi quality – it will depend on the weather and location. </li>
          <li>Weather can change dramatically and quickly in the mountains, so please bear with us if there are delays.  Please follow the advice of your guide if he needs to change the itinerary in any way due to the weather. </li>
          <li>Drones are not permitted unless you have a special permit to fly them in the Everest Region.  This is because there are many unscheduled helicopter flights in the sky.  It is tricky to obtain permission, so leave it home unless you need a drone. </li>
          <li>Remember your insurance! 
            Most of all – enjoy your amazing adventure!</li>
          
          
        </ul>          
        </div>
        </div>
    </section>
  )
}

export default Everest
