import React from 'react'
import {GrLocation} from 'react-icons/gr';
import {BsTelephoneInboundFill} from 'react-icons/bs';

function Footer() {
  return (
    <>
      <ul>
      <li className='address'>
      <GrLocation/>
       8836 Cherry Road
       Sterling, VA 20164.</li>
      <li className='phone'>
      <BsTelephoneInboundFill />
       845-322-2383</li>
      </ul>
    </>
  )
}

export default Footer