import React from 'react'
import '../../assets/css/Landing.css'
import '../../assets/css/Footer.css'
import Footer from '../../components/Footer'
import Navbar from '../navbar/Navbar'

export const Landing = () => {
  return (
    <>
    <div>
      <Navbar/>
    </div>
    <div>
    <div className='scrollable-content'>
     <h1 className='big-l'> Landing</h1><br/>
     <hr></hr><br/>
     <p className='big-2'>Events are not just gatherings..</p>
     <p className='big-2'>they are the stories waiting to be told, the memories waiting to be made, </p>
     <p className='big-2'>and the dreams waiting to come true</p><br/>
     <hr></hr><br/><br/>
     <p className='font-1'> Planning an event? </p>
     <p className='font-2'> Let's chat! Contact us for a free consultation, and let's start crafting the event of your dreams.</p><br/><br/>
     <p className='font-1'>Contact Information </p>
     <p className='font-2'> 
At Beat Vibes Events, we turn your dreams into unforgettable moments. Whether you're planning a corporate conference, a wedding, a product launch, or any special occasion, we are your trusted partner in crafting remarkable experiences.</p>
      </div>
    </div>
    <div>
    <Footer/>
    </div> 
    </>
  )
}
