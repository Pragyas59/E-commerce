import React from 'react';
import './Newsletter.css'

 const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>GET EXCLUSIVE OFFERS ON YOUR EMAIL</h1>
        <p>Subscribe to our newsletter and stay</p>
        <div>
            <input type="email" placeholder='Your email id'/>
            <button>Subscribe Here !!</button>
        </div>
    </div>
  )
}
export default Newsletter;  
