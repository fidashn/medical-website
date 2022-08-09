import React from 'react'

function Navbar() {
  return (
      <>
      <ul>
      <li><a class="navbar-logo" href="/">
      <div class="logo-image">
      <img src="" class="img-fluid" alt=''/>
      </div>
      </a></li>
      <div className='nav-items'>
      <li>Our Services</li>
      <li>Our Staff</li>
      <li>Contact Us</li>
      </div>
      <div className='btns-wrapper'>
      <button>Sign Up</button>
      <button>Sign In</button>
      </div>
      </ul>
      </>
  )
}

export default Navbar