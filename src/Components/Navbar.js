import React from 'react'

function Navbar() {
  return (
      <>
      <ul className='navbar'>
      <li><a class="navbar-logo" href="/">
      <div class="logo-image">
      <img src="" class="img-fluid" alt=''/>
      </div>
      </a></li>
      <div className='nav-items'>
      <div class="dropdown">
      <button class="dropbtn"><li>Our Services</li></button>
      <div class="dropdown-content">
      <a href="/">Link 1</a>
      <a href="/">Link 2</a>
      <a href="/">Link 3</a>
  </div>
</div>
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