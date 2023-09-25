import '../../assets/css/Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
     <>

    <header className='navbar'>
        <div className='big-3'>BEAT_VIBE_EVENTS</div>
        <div className='pinkbtn1 pinkLogin'><Link to='/Login'>Login</Link></div>
        <div className='pinkbtn22 pink1aboutus'><Link to='/Register'>Register</Link></div>
        <div className='pinkbtn33 pink1contact'><Link to='/AboutUS'>AboutUs</Link></div>
              
    </header>
    </>
)
    }
    export default Navbar