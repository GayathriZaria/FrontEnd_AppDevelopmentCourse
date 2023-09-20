import React from 'react'
import Layout from '../../components/Layout'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/userSlice'
function Dashboard() {
    const user=useSelector(selectUser)
    return (
        <>
            <Layout />
            <div className='main-wrapper'>
                <div className='welcome-container'>
                    <h1> Welcome <span className=' username-color'>{user.username} </span> ! </h1>
                </div>

            </div>
        </>
    )
}

export default Dashboard

/*<div class='square12'>
      <div class='square22'>
      <div class='square32'>
      <div class='square42'>
      </div>
      </div>
      </div>
      </div>
      <span className='texting12'>Signup website 
      <span className='texting22'>See Manifesto page
      <span className='texting32'>Vote for the right
      <span className='texting42'>View result analysis
      </span></span></span></span>
        <p className="font2">
        <div class="square1">
          <div class="square2">
            <div class="square3">
              <div class="square4"></div>
            </div>
          </div>
        </div>
        <span className="texting1">
          Boat House
          <span className="texting2">
            Iceland
            <span className="texting3">
              Masai mara
              <span className="texting4">New York</span>
            </span>
          </span>
        </span>*/ 