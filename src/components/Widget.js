import React from 'react'
import '../App.css'
import { FaRegUser } from 'react-icons/fa';
import { IoIosArrowUp } from 'react-icons/io'

const Widget = () => {
  return (
    <div className='widget'>
        <div className='left'>
            <span className='title'>USERS</span>
            <span className='counter'>21321</span>
            <span className='link'>See all users</span>
        </div>
        <div className='right'>
            <div className='percentage positive'>
                <IoIosArrowUp/>
                20%
            </div>
            <FaRegUser className='icon'/>
        </div>
    </div>
  )
}

export default Widget