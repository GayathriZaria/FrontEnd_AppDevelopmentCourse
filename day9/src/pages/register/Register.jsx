import {useState} from 'react'
import { useNavigate,Link } from 'react-router-dom';
import '../../assets/css/Register.css';

const Register = () => {
  const navigate = useNavigate()
  const [formdata, setFormdata] = useState({
    username: '',
    email: '',
    phone: '',
    password: ''
  })
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e)=>{
    e.preventDefault();

    navigate('/Home')
    }


  return (
    <>
    <div className="main-l d-flex-c-l" >
    <form onSubmit={handleSubmit}>
    <div className="auth-form-l d-flex-c-l">
    <div className="event-r">
    <div className='input-field-r'>
      <h3 className='t1'>EVENT_MANAGEMENT</h3>
        <input type="name" name="name" id="name" className='input-field' placeholder='name' onChange={handleChange} required autoFocus/><br/>
        <input type="phone" name="phone" id="phone" className='input-field' placeholder='phone' onChange={handleChange} required/><br/>
        <input type="email" name="email" id="email" className='input-field' placeholder='Email' onChange={handleChange} required/><br/>
        <input type="password" name="password" id="password" className='input-field' placeholder='Password' onChange={handleChange} required/><br/>
        <button type="submit" className='auth-btn'>Register</button>
        <h5 className='text'>Already have an account ? <Link to={'/Login'} className='text-link-r'>  Login </Link></h5>
    </div>
    </div>
    </div>
    </form>
    </div>
    </>


  )
}

export default Register