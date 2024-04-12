import React from 'react'

import { BiCheckCircle } from "react-icons/bi";
import { FaSearch } from 'react-icons/fa';
import { TbAdjustmentsHorizontal } from "react-icons/tb";
// import {  } from "react-icons/io5";
import { MdHelpOutline } from "react-icons/md";
import { IoSettingsOutline, IoApps} from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import "../Css/Navbar.css"


function Navbar({photoURL}) {
  return (
    <nav className='navbar'>

      <div className='logo'> 
      <img src='https://i.pinimg.com/564x/f5/49/9f/f5499f238b73bb370ff9c05024a50066.jpg' alt='googleDriveImage'/>
      <span>Drive</span>
      </div>

      <div className='navbar_searchInput'> 
      <FaSearch  style={{ color: 'grey', fontSize: '20px' }}/>
      <input type="text" placeholder='Search in Drive'/>
      <TbAdjustmentsHorizontal style={{ color: 'grey', fontSize: '25px' }}/>
      </div>

      <div className='navbar_iconsUser'> 
      <span>
      <BiCheckCircle style={{fontSize:"30px",}}/>
      <MdHelpOutline style={{fontSize:"30px",}}/>
      <IoSettingsOutline style={{fontSize:"28px",}}/>
      <IoApps  style={{fontSize:"28px",}}/>
      <FaUserCircle src={photoURL} style={{fontSize:"30px",}}/>
      </span>
      </div>
    </nav>
  )
}

export default Navbar
