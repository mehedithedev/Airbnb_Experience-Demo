import React from 'react'
import Promo from './Promo.jsx'


const Header = () => {
  return (
    <div className='Header'>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <Promo/>
        </ul>
    </div>
  )
}

export default Header   