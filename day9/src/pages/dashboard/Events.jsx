import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../../assets/css/Swiper.css';
import { Autoplay,EffectCoverflow, Pagination } from 'swiper/modules';


import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
//import { useState } from 'react'

export default function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
   }
  return (
    <>
    
     {/* <div className='grid-container'> */}
       <Header OpenSidebar={OpenSidebar}/>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        spaceBetween={-35} 
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 500,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[Autoplay,EffectCoverflow, Pagination]}
        autoplay={{
          delay: 500, // Set autoplay delay in milliseconds (3 seconds)
          disableOnInteraction: false, // Autoplay continues even if the user interacts
        }}
        className="mySwiper"
      >
        <SwiperSlide><div className='e1'/></SwiperSlide>
        <SwiperSlide><div className='e2'/></SwiperSlide>
        <SwiperSlide><div className='e3'/></SwiperSlide>
        <SwiperSlide><div className='e4'/></SwiperSlide>
        <SwiperSlide><div className='e5'/></SwiperSlide>
        <SwiperSlide><div className='e6'/></SwiperSlide>
        <SwiperSlide><div className='e7'/></SwiperSlide>
        <SwiperSlide><div className='e8'/></SwiperSlide>
        <SwiperSlide><div className='e9'/></SwiperSlide>
        <SwiperSlide><div className='e10'/></SwiperSlide>
        <SwiperSlide><div className='e11'/></SwiperSlide>
        <SwiperSlide><div className='e12'/></SwiperSlide>
        <SwiperSlide><div className='e13'/></SwiperSlide>
        <SwiperSlide><div className='e14'/></SwiperSlide>
        <SwiperSlide><div className='e15'/></SwiperSlide>
        <SwiperSlide><div className='e16'/></SwiperSlide>
        <SwiperSlide><div className='e17'/></SwiperSlide>
        <SwiperSlide><div className='e18'/></SwiperSlide>
        <SwiperSlide><div className='e19'/></SwiperSlide>
        <SwiperSlide><div className='e20'/></SwiperSlide>
        <SwiperSlide><div className='e21'/></SwiperSlide>
        <SwiperSlide><div className='e22'/></SwiperSlide>
        <SwiperSlide><div className='e23'/></SwiperSlide>
        <SwiperSlide><div className='e24'/></SwiperSlide>
        <SwiperSlide><div className='e25'/></SwiperSlide>
      </Swiper>
       {/* </div> */}
      </>
  );
}

// import React from 'react'
// import '../../assets/css/Events.css'
// import Header from '../../components/Header'
// import Sidebar from '../../components/Sidebar'
// import { useState } from 'react'

// function Events() {
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  
//   const OpenSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle)
//   }
//     return (
        
//         <div className='grid-container'>
//       <Header OpenSidebar={OpenSidebar}/>
//       <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
            
//             <div className='main-wrapper'>
//                 <div className='welcome-container'>
//                     <h1> Events </h1>
//       <div class='square12'>
//       <div class='square22'>
//       <div class='square32'>
//       <div class='square42'>
//       </div>
//       </div>
//       </div>
//       </div>
//       <span className='texting12'>Birthday decoration
//       <span className='texting22'>Food service
//       <span className='texting32'>Lights decoration
//       <span className='texting42'>Hall decoration
//       </span></span></span></span>
//         <div className="font2">
//         <div class="square1">
//           <div class="square2">
//             <div class="square3">
//               <div class="square4"></div>
//             </div>
//           </div>
//         </div>
//         <span className="texting1">Party arrangement
//           <span className="texting2">Wedding arrangement
//             <span className="texting3">Festivals
//               <span className="texting4">Exhibition</span>
//             </span>
//           </span>
//         </span>
//         </div>
//         </div>
//         </div>
//         </div>
        
//     )
// }

// export default Events