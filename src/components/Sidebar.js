import React from 'react'
import '../App.css'
import { MdDashboard } from 'react-icons/md';
import { FaRegUser } from 'react-icons/fa';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md'
import { BsBorderStyle } from 'react-icons/bs'
import { CiDeliveryTruck } from 'react-icons/ci'
import { IoIosStats } from 'react-icons/io'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { MdOutlineSettingsSystemDaydream } from 'react-icons/md'
import { MdOutlinePsychology } from 'react-icons/md'
import { AiFillSetting } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { RiLogoutBoxRLine } from 'react-icons/ri'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <span className='logo'>Admin Dashboard</span>
      </div>
      <hr/>
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <li>
            <MdDashboard className='icon'/>
            <span>Dashboard</span>
          </li>

          <p className='title'>LISTS</p>
          <li>
            <FaRegUser className='icon'/>
            <span>Users</span>
          </li>
          <li>
            <MdOutlineProductionQuantityLimits className='icon'/>
            <span>Products</span>
          </li>
          <li>
            <BsBorderStyle className='icon'/>
            <span>Orders</span>
          </li>
          <li>
            <CiDeliveryTruck className='icon'/>
            <span>Delivery</span>
          </li>
          <p className='title'>USEFUL</p>
          <li>
            <IoIosStats className='icon'/>
            <span>Stats</span>
          </li>
          <li>
            <IoIosNotificationsOutline className='icon'/>
            <span>Notifications</span>
          </li>
          <p className='title'>SERVICE</p>
          <li>
            <MdOutlineSettingsSystemDaydream className='icon'/>
            <span>System Health</span>
          </li>
          <li>
            <MdOutlinePsychology className='icon'/>
            <span>Logs</span>
          </li>
          <li>
            <AiFillSetting className='icon'/>
            <span>Settings</span>
          </li>
          <p className='title'>USER</p>
          <li>
            <CgProfile className='icon'/>
            <span>Profile</span>
          </li>
          <li>
            <RiLogoutBoxRLine className='icon'/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      {/* <div className='bottom'>Bottom</div> */}
    </div>
  )
}

export default Sidebar