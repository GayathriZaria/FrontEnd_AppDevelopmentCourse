import {useState} from 'react'
import toast, {Toaster} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/Register.css';

const Register = () => {
    const nav = useNavigate()
const [login,setLogin]=useState({
    name:'',
    phone:0,
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
       nav('/')
    }


  return (
    <>
    <div className="main-r d-flex-c-r">
    <form onSubmit={handleSubmit}>
    <div className="auth-form-r d-flex-c-r">
        <input type="name" name="name" id="name" className='input-field' placeholder='name' onChange={handleChange} required autoFocus/>
        <input type="phone" name="phone" id="phone" className='input-field' placeholder='phone' onChange={handleChange} required/>
        <input type="email" name="email" id="email" className='input-field' placeholder='Email' onChange={handleChange} required/>
        <input type="password" name="password" id="password" className='input-field' placeholder='Password' onChange={handleChange} required/>
        <button type="submit" className='auth-btn'>Register</button>
    </div>
    <h5 className='text'>Already have an account ? <span className='text-link' onClick={handleRoute}>  Login </span></h5>
    </form>
    </div>
    <Toaster
         position="top-center"
         reverseOrder={false}
    />
    </>


  )
}

export default Register