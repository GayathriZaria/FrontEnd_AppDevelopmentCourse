import React from 'react'
import '../../assets/css/Landing.css'
import '../../assets/css/Footer.css'
import Footer from '../../components/Footer'

export const Landing = () => {
  return (
    <>
    <div>
    <div className='scrollable-content'>
     <h1 className='big-l'> Landing</h1><br/><br/><br/>
     <p className='hr'>
     <p className='big-2'>Events are not just gatherings; they are the stories waiting to be told, the memories waiting to be made, and the dreams waiting to come true</p>
     <p className='big-2'> Planning an event? Let's chat! Contact us for a free consultation, and let's start crafting the event of your dreams.</p>
     <p className='big-2'> [Contact Information]
At [Your Event Management Company], we turn your dreams into unforgettable moments. Whether you're planning a corporate conference, a wedding, a product launch, or any special occasion, we are your trusted partner in crafting remarkable experiences.</p>
    
     </p>
[Contact Information]
At [Your Event Management Company], we turn your dreams into unforgettable moments. Whether you're planning a corporate conference, a wedding, a product launch, or any special occasion, we are your trusted partner in crafting remarkable experiences.
    </div>
    </div>
    <div>
    <Footer/>
    </div>
    </>
  )
}
