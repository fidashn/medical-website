import React from 'react';

function OurServices() {
  return (
    <div className='services-wrapper'>
    <h2>Our Services</h2>
    In our clinic you can:
    <ul className='services'>
    <li>check your blood presure levels</li>
    <img src="" alt="heart-beat" className='heart-beat' />
    <li>check your sugar levels</li>
    <img src="" alt="blood-test"  className='blood-test'/>
    <li>schedule an appointment online</li>
    <img src="" alt="online-appointment"  className='online-appointment'/>
    <li>video chat with your doctor</li>
    <img src="" alt="video-chat"  className='video-chat'/>
    </ul>
    </div>
  )
}

export default OurServices