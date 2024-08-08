import { Link } from 'react-router-dom'
import './NavBar.css'
import { assets } from './../../assets/assets.js'
const NavBar = () => {
    return (
        <div className='navbar-admin'>
            <Link to='/'><img src={assets.logo} className="logo" alt="Logo" /></Link>
            <img src={assets.profile_image} alt='search icon' />
        </div>
    
    )
}

export default NavBar