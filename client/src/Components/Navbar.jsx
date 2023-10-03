import React from 'react'
import DoctorsList from './DoctorsList'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
       <nav className={"nav-bar"}> 
        <ul>
        <li className="logo">APPOINTMENT SYSTEM</li>
        <li><Link to={'/'}>HOME</Link></li>
          


        </ul>
      </nav>
       {/* <DoctorsList /> */}

    </div>
  )
}

export default Navbar
