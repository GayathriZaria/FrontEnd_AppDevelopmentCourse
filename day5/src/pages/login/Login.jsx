import {useState} from 'react'
import toast, {Toaster} from 'react-hot-toast';
import '../../assets/css/Login.css';
import { useNavigate } from 'react-router-dom';
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import { GoogleLogin } from '@react-oauth/google';


const Login = () => {
//   <GoogleOAuthProvider clientId="<your_client_id>">...</GoogleOAuthProvider>;

// <GoogleLogin
//   onSuccess={credentialResponse => {
//     console.log(credentialResponse);
//   }}
//   onError={() => {
//     console.log('Login Failed');
//   }}
// />;
    const nav = useNavigate()
    const [login,setLogin]=useState({
        email:'',
        password:''
    })
    const handleChange=(e)=>{
        e.preventDefault();
        setLogin({...login,[e.target.id]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('Email : ${login.email} Password: ${login.password}')
        toast.success('Successfully toasted!')
    }
    const handleRoute=()=>{
       nav('/register')
    }
    
  return (
    <>
    
    <div className="main-l d-flex-c-l" >
    <form onSubmit={handleSubmit}>
    <div className="auth-form-l d-flex-c-l">
    <div className="event-l">
    <div className='input-field-l'>
      <h2>EVENT MANAGEMENT</h2>
        <input type="email" name="email" id="email" className='input-field' placeholder='Email' onChange={handleChange} autoFocus required/>
        <input type="password" name="password" id="password" className='input-field' placeholder='Password' onChange={handleChange} required/>
        <button type="submit" className='auth-btn'>Login</button>
        <h5>Don't have an account ? <span className='text-link-l' onClick={handleRoute}>  Register</span></h5>
    </div>
        
        {/* <button class="accountButton" id="GoogleExchange" tabindex="1">
            ==$0
            ::before
            "Google"
          </button> */}
    </div>
    </div>
    </form>
    </div>
    <Toaster
         position="top-center"
         reverseOrder={false}
    />
    </>


  )
}

export default Login