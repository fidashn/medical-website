import React from 'react'

function ContactUs() {
  return (
    <div className='contactUs-container'>
    <h2 className='contactUs-title'>ContactUs</h2>
    <form action="" className='contactUsForm'>
    Full Name:
    <input type="text" placeholder="Full Name.."/>
    Email:
    <input type="text" placeholder="Email.."/>
    Password:
    <input type="text" placeholder="Password.."/>
  </form>
    </div>
  )
}

export default ContactUs