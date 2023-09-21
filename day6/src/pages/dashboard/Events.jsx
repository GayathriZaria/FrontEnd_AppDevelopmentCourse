import React from 'react'
import '../../assets/css/Events.css'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import { useState } from 'react'

function Events() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
    return (
        
        <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
            
            <div className='main-wrapper'>
                <div className='welcome-container'>
                    <h1> Events </h1>
      <div class='square12'>
      <div class='square22'>
      <div class='square32'>
      <div class='square42'>
      </div>
      </div>
      </div>
      </div>
      <span className='texting12'>Birthday decoration
      <span className='texting22'>Food service
      <span className='texting32'>Lights decoration
      <span className='texting42'>Hall decoration
      </span></span></span></span>
        <div className="font2">
        <div class="square1">
          <div class="square2">
            <div class="square3">
              <div class="square4"></div>
            </div>
          </div>
        </div>
        <span className="texting1">Party arrangement
          <span className="texting2">Wedding arrangement
            <span className="texting3">Festivals
              <span className="texting4">Exhibition</span>
            </span>
          </span>
        </span>
        </div>
        </div>
        </div>
        </div>
        
    )
}

export default Events