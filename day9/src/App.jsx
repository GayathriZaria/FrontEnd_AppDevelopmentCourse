// // import Login from './pages/dashboard/Login'
// // import Register from './pages/dashboard/Register'
// import Organizer from './pages/dashboard/Option'
// import Manager from './pages/dashboard/Manager'

// function App() {
//   return (
//    <>

//    </>
//   )
// }

// export default App


// // import {BrowserRouter, Routes, Route} from 'react-router-dom'
// // import './assets/css/App.css';
// // // import './assets/css/Login.css';
// // // import './assets/css/Register.css';
// // import Login from './pages/login/Login'
// // import Register from './pages/register/Register';
// // function App() {
// //   return (
  // //     <>
  // //     <BrowserRouter>
  // //     <Routes>
  // //       <Route exact path='/' element={<Login/>}/>
// //       <Route exact path='/register' element={<Register/>}/>
// //     </Routes>
// //     </BrowserRouter>
// //     </>
// //   );
// // }

// // export default App;





import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Dashboard from './pages/dashboard/Dashboard'
import Users from './pages/user/Users'
import Events from './pages/dashboard/Events'
import Home from './pages/home/Home'
import { Landing } from './pages/landing/Landing'
import Book from './pages/user/Book'
import { PrivacyPolicy } from './pages/footer/PrivacyPolicy'
import { Terms } from './pages/footer/Terms'
import { AboutUs } from './pages/footer/AboutUs'
import { FAQ } from './pages/footer/FAQ'

function App() {

  
  return (
    <>
     <Routes>
      <Route exact path='/' element={<Landing/>}/>
      <Route exact path='/Home' element={<Home/>}/>
      <Route exact path='/Login' element={<Login/>}/>
      <Route exact path='/Register' element={<Register/>}/>
      <Route exact path='/Dashboard'element={<Dashboard/>} />
      <Route exact path='/Users' element={<Users/>}/>
      <Route exact path='/Events' element={<Events/>}/>
      <Route exact path='/Book' element={<Book/>}/>
      <Route exact path='/Terms' element={<Terms/>}/>
      <Route exact path='/PrivacyPolicy' element={<PrivacyPolicy/>}/>
      <Route exact path='/AboutUs' element={<AboutUs/>}/>
      <Route exact path='/FAQ' element={<FAQ/>}/>
      
     </Routes>
     </>
  )
}

export default App