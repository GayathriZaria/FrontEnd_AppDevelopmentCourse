import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/dashboard/Login'
import Register from './pages/dashboard/Register'
import Dashboard from './pages/dashboard/Dashboard'
import Users from './pages/users/Users'
import Settings from './pages/dashboard/Settings'
import Home from './pages/home/Home'

function App() {
  return (
   <>
   <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/Login' element={<Login/>}/>
    <Route exact path='/Register' element={<Register/>}/>
    <Route exact path='/Dashboard'element={<Dashboard/>} />
    <Route exact path='/Users' element={<Users/>}/>
    <Route exact path='/Settings' element={<Settings/>}/>
 
    
   </Routes>
   
   </>
  )
}

export default App


// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import './assets/css/App.css';
// // import './assets/css/Login.css';
// // import './assets/css/Register.css';
// import Login from './pages/login/Login'
// import Register from './pages/register/Register';
// function App() {
//   return (
//     <>
//     <BrowserRouter>
//     <Routes>
//       <Route exact path='/' element={<Login/>}/>
//       <Route exact path='/register' element={<Register/>}/>
//     </Routes>
//     </BrowserRouter>
//     </>
//   );
// }

// export default App;