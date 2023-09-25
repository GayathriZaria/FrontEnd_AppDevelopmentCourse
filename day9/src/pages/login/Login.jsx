import {useState} from 'react';
import { useDispatch } from 'react-redux';
import '../../assets/css/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../redux/userSlice';

const Login = () => {
const dispatch = useDispatch();
const navigate = useNavigate();
const [formdata, setFormdata] = useState({
  username: '',
  password: ''
})
const handleChange = (e) => {
  setFormdata({ ...formdata, [e.target.id]: e.target.value })
}
const submitHandler = (e) => {

  console.log(formdata.username,formdata.password)
  
  e.preventDefault();
  dispatch(login({
    username :formdata.username
  }))
       navigate('/Dashboard')
}
  return (
    <>
    
    <div className="main-l d-flex-c-l" >
    <form onSubmit={submitHandler}>
    <div className="auth-form-l d-flex-c-l">
    <div className="event-l">
    <div className='input-field-l'>
      <h2>EVENT MANAGEMENT</h2>
        <input type="email" name="email" id="email" className='input-field' placeholder='Email' onChange={handleChange} autoFocus required/>
        <input type="password" name="password" id="password" className='input-field' placeholder='Password' onChange={handleChange} required/>
        <button type="submit" className='auth-btn'> Login </button>
        <h5>Don't have an account ? <Link to={'/Register'} className='text-link-l'> Register</Link></h5>
    </div>
    </div>
    </div>
    </form>
    </div>
    </>

  )
}

export default Login