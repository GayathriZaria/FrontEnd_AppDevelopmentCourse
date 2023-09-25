import React from 'react'
import { useState } from 'react'
import Book from './Book'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'

function Users() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
    
    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }
    return (
        <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
  
            <div className='main-wrapper'>
                <div className='welcome-container3'>
                    <br/><br/><br/><br/>
                    <h1> Welcome to Beat Vibe Events !</h1>
                </div>
                    <Book/>
            </div>
            </div>

        
    )
}

export default Users