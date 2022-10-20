import React from 'react'
import { AiOutlineSearch, AiOutlineGlobal } from 'react-icons/ai'
import { MdOutlineDarkMode, MdFullscreenExit } from 'react-icons/md'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { BsChatLeft, BsListUl } from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type='text' placeholder="Search.."/>
          <AiOutlineSearch/>
        </div>
        <div className='items'>
          <div className='item'>
            <AiOutlineGlobal className='icons'/>
            English
          </div>
          <div className='item'>
            <MdOutlineDarkMode className='icons'/>
          </div>
          <div className='item'>
            <MdFullscreenExit className='icons'/>
          </div>
          <div className='item'>
            <IoIosNotificationsOutline className='icons'/>
            <div className='counter'>1</div>
          </div>
          <div className='item'>
            <BsChatLeft className='icons'/>
            <div className='counter'>2</div>
          </div>
          <div className='item'>
            <BsListUl className='icons'/>
          </div>
          <div className='item'>
            <img src='img.png' alt='' className='avatar'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar