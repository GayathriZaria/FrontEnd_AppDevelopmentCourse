import '../../assets/css/Navbar2.css'
import { Link } from 'react-router-dom'
function Navbar2() {
    return (
     <>

    <header className='navbar'>
        <div className='navbar_title navbar_item'>BEAT VIBE EVENTS</div>
        <div className='pinkbtn1 pinkLogin'><Link to='/Login'>Login</Link></div>
        <div className='pinkbtn22 pink1aboutus'><Link to='/Register'>Register</Link></div>
        <div className='pinkbtn33 pink1contact'><Link to='/AboutUS'>About Us</Link></div>
              
    </header>
    </>
)
    }
    export default Navbar2