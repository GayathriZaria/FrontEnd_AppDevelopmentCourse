import '../../assets/css/Dashboard.css'
import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
 import { useState } from 'react'
 import Header from '../../components/Header'
 import Sidebar from '../../components/Sidebar'

function Dashboard() {
  
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
    const data = [
        {
          name: 'Birthday',
          online: 100,
          offline: 150,
          amt: 10000,
        },
        {
          name: 'Food',
          online: 300,
          offline: 140,
          amt: 100000,
        },
        {
          name: 'Lights',
          online: 200,
          offline: 100,
          amt: 10000,
        },
        {
          name: 'Hall',
          online: 50,
          offline: 120,
          amt: 30000,
        },
        {
          name: 'Party',
          online: 160,
          offline: 140,
          amt: 50000,
        },
        {
          name: 'Wedding',
          online: 20,
          offline: 150,
          amt: 100000,
        },
        {
          name: 'Festival',
          online: 10,
          offline: 10,
          amt: 10000,
        },
      ];
     

  return (
    
    
      <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
  
    <main className='main-container'>
        <div className='main-title'>
            <text1>DASHBOARD</text1>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <text1>EVENT</text1>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>30</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <text1>CATEGORIES</text1>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>12</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <text1>CUSTOMERS</text1>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>33</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <text1>CANCEL</text1>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>2</h1>
            </div>
        </div>
        
        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="online" fill="#8884d8" />
                <Bar dataKey="offline" fill="#82ca9d" />
                <Bar dataKey="amount" fill="#FF9999" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="online" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="offline" stroke="#82ca9d" />
                <Line type="monotone" dataKey="amount" stroke="#FF9999" />
                </LineChart>
            </ResponsiveContainer>
            

        </div>
    </main>
    </div>
    
  )
}

export default Dashboard