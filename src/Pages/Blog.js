import React from 'react'
import BlogData from '../Data/BlogData'
import Team from '../Data/Team'
function Blog() {
  return (
    <>
      <section className='container py-5 blog'>
        <h2>Save Money and Travel...</h2>
        <div className='row'>
          {BlogData.map((a)=>(
            <div className='col-lg-4 blogimg py-4'>
            <img src={a.image} alt=''/>
            <h4>{a.title}</h4>
            <span className='d-flex'><p>Demoteam |&nbsp;</p><p>August 17, 2021 |&nbsp; </p><p>No Comments</p></span>
            <p>Praesent, risus adipisicing donec! Cras. Lobortis id aliquip taciti repudiandae porro dolore facere officia! Natoque mollitia ultrices convallis nisl suscipit</p>
            <h6> <a href=''>Continue Reading...</a></h6>
    
          </div>
          ))}
          
        </div>
        <div className='row py-5'>
          <h2 className='teamh3'>Our Team...</h2>
          {Team.map((a)=>(
            <div className='col-lg-4 teamimg'>
            <img src={a.image} alt=''/>
            <h6>{a.name}</h6>
            <p>{a.position}</p>
            <p className='psano'>{a.desc}</p>
        </div>
          ))}
          
        </div>
      </section>
    </>
  )
}

export default Blog
