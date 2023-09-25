import React from 'react'
import '../../assets/css/Home.css'
import backgroundVideo from '../../assets/video/video.mp4';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className='video2'>
      <video  loop autoPlay muted id='video2'>
      <source src={backgroundVideo} type='video/mp4'/>
      </video>

    <div className='scrollable-content'>
      <h1 className='big12'>Event Management</h1>
      <h1 className='big22'>You dream it... We plan it...</h1>
      <br/><br/><br/><br/>
      <hr/>
      <p className='font2'> We are all here to celebrate event and create memories that last for lifetime...</p>
      <p className='font2'>Don't Wait! Start on your dreams, longings, special occasions today. Because this is your moment</p>
      <p className='font2'> Celebrate your journey of life...</p>
      <hr/>
      <br/>
      <p className='text2'>Login to access the website</p>
       <Link to='/Login'>
      <button className='button2' align-item='center' >
        Login</button>
      <br/><br/><br/><br/><br/><br/><br/><br/>
      </Link>
      <div className='big22'>Why us?</div>
      <br/>
      <p className='fontt2'>Looking for managing your events.  We provide you catering service,</p>
      <p className='fontt2'> stage and hall decoration, lightings, transport arrangement, invitation designing.</p>
      <p className='fontt2'>Your event.. Our responsibility...</p>
      <br/>
      <div className='big22'>What's new?</div>
      <br/>
      <p className='fontt2'>We conduct both online and offline events.</p>
      <p className='fontt2'> You can book and cancel event online.</p>
      <p className='fontt2'> We charge less and you can customize decorations.</p>
      <br/><br/><br/><br/><br/><br/>
        <p className="font2">
          Real world is full of colors, sounds, sights and sites, that no
          computer screen can duplicate.
        </p>
      <br/><br/><br/><br/>
        
        <div className="big22">Contact Us</div>
        <br />
        <p className="font2">Mobile : 9876543210</p>
        <p className="font2">E-Mail : event.management@gmail.com</p>
        <br />
        <br />
        <br />
      
      </div>
      </div>
    </>  
  );
}

export default Home




