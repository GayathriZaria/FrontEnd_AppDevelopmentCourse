import React from 'react'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/userSlice'
import { useNavigate } from 'react-router-dom'
import 
{BsHeart, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar}) {
    const dispatch= useDispatch();
    const navigate=useNavigate();

    const logoutHandler = () =>{
        dispatch(logout())
        navigate('/')
    }
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsHeart  className='icon_header'/> EVENT MANAGEMENT
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to={'/Dashboard'}>
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to={'/Events'}>
                    <BsFillArchiveFill className='icon'/> Events
                </Link>
            </li>
            <li className='sidebar-list-item'>
            <Link to={'/Users'}>
                    <BsFillGrid3X3GapFill className='icon'/> Users
                </Link>
            </li>
            <button className='left-bar-button-logout nav-btn' onClick={logoutHandler}>
                        Logout</button>
        </ul>
    </aside>
  )
}

export default Sidebar