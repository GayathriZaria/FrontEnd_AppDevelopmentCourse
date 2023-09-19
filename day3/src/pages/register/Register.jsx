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
    <div className="main-l d-flex-c-l" >
    <form onSubmit={handleSubmit}>
    <div className="auth-form-l d-flex-c-l">
    <div className="event-r">
    <div className='input-field-l'>
      <h3>EVENT MANAGEMENT</h3>
        <input type="name" name="name" id="name" className='input-field' placeholder='name' onChange={handleChange} required autoFocus/>
        <input type="phone" name="phone" id="phone" className='input-field' placeholder='phone' onChange={handleChange} required/>
        <input type="email" name="email" id="email" className='input-field' placeholder='Email' onChange={handleChange} required/>
        <input type="password" name="password" id="password" className='input-field' placeholder='Password' onChange={handleChange} required/>
        <button type="submit" className='auth-btn'>Register</button>
        <h5 className='text'>Already have an account ? <span className='text-link-r' onClick={handleRoute}>  Login </span></h5>
    </div>
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

export default Register
