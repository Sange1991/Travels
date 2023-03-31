import React from 'react'
import LangtangData from '../Data/LangtangData'
function Langtang() {
    return (
        <section className='container mt-3'>
            <h3> Explore Langtang Valley</h3>
            <div className='row py-4 '>
                <div className='col-lg-8'>
                    <div className='langtang'>
                        <img className='w-100  h-50 img-fluid' src='./Images/langtang1.jpg' alt='' />
                        <img className="langtangmap img-fluid" src='./Images/langtang2.jpg' alt='' />
                    </div>
                    <p className='text'>The Langtang Valley has long been a favorite trek due to its expansive views, interesting Tamang culture, relatively gentle pace and accessibility from Kathmandu. The 2015 earthquake and subsequent landslide had an enormous effect on the region, but aid and reconstruction have recently reopened this valley to trekking again. Not only is it still a beautiful trek, your visit will also provide vital support for local livelihoods.</p>
                </div>
                <div className='col-lg-4 font'>
                    <h4>Trek Summary</h4>
                    <p>The Langtang trek is a trek with real heart. The Langtang Valley is one of the most beautiful places in Nepal and was once the darling of trekkers seeking stunning landscapes and authentic culture along with heartwarming hospitality in delightful homestay guest houses — all within easy reach of Kathmandu.</p>
                    <p>
                        However, the Langtang Valley is almost devoid of visitors these days as the people of Langtang are continuing to rebuild their lives after the 2015 earthquake. Survivors of the landslides caused by the earthquake were forced to leave the valley, but now they have come back to reclaim their homeland, rebuild their homes and re-establish their farms.</p>
                    <p>rekking in this beautiful valley will support the people of Langtang by providing much-needed income to rebuild in a sustainable and secure way. This is not charity; this is the business end of sustainable travel, where your travel choices can respectfully support local people while preserving their dignity, their culture and their way of life. Be wowed by nature, be humbled by the human spirit and be a part of local solutions when you choose to trek in Langtang.</p>
                </div>
                <div className='col-lg-9 align-item-center'>
                    <h4 className='brief'>Brief itinerary</h4>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Days</th>
                            <th>Destination</th>
                            <th>Overnight</th>
                        </tr>
                    </thead>
                    <tbody>
                        {LangtangData.map((a)=>(
                            <tr>
                            <td>{a.day}</td>
                            <td>{a.destination}</td>
                            <td>{a.overnight}</td>
                        </tr>
                        ))}
                        
                       

                    </tbody>
                </table>
                </div>
            </div>

        </section>

    )
}

export default Langtang
