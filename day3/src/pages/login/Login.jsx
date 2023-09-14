import {useState} from 'react'
import toast, {Toaster} from 'react-hot-toast';
import '../../assets/css/Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
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
        <input type="email" name="email" id="email" className='input-field' placeholder='Email' onChange={handleChange} autoFocus required/>
        <input type="password" name="password" id="password" className='input-field' placeholder='Password' onChange={handleChange} required/>
        <button type="submit" className='auth-btn'>Login</button>
    </div>
    <h5 className='text'>Don't have an account ? <span className='text-link' onClick={handleRoute}>  Register</span></h5>
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