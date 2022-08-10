import React from 'react';
import {GrLocation} from 'react-icons/gr';
import {BsTelephoneInboundFill} from 'react-icons/bs';

function Footer() {
  return (
    <>
      <ul className='footer'>
      <li className='address'>
      <GrLocation/>
      47 Harrison Drive
      Hampton, VA 23666.</li>
      <li className='phone'>
      <BsTelephoneInboundFill />
      845-322-2383</li>
      </ul>
    </>
  )
}

export default Footer