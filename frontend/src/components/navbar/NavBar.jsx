import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';
import SignInPopUp from '../signin/SignInPopUp.jsx';
import { assets } from '../../assets/assets.js';
import { StoreContext } from '../../context/StoreContext.jsx';

const NavBar = () => {
    const [menu, setMenu] = useState("home");
    const [showLogin, setShowLogin] = useState(false);
    const { token, setToken } = useContext(StoreContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate('/');
    };

    return (
        <>
            {showLogin && <SignInPopUp />}
            <div className='navbar'>
                <Link to='/'>
                    <img src={assets.logo} className="logo" alt="Logo" />
                </Link>
                <ul className='navbar-menu'>
                    <li>
                        <Link
                            to='/'
                            onClick={() => setMenu('home')}
                            className={menu === 'home' ? 'active' : ''}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <a
                            href='#explore-menu'
                            onClick={() => setMenu('menu')}
                            className={menu === 'menu' ? 'active' : ''}
                        >
                            Menu
                        </a>
                    </li>
                    <li>
                        <a
                            href='#app-download'
                            onClick={() => setMenu('mobile-app')}
                            className={menu === 'mobile-app' ? 'active' : ''}
                        >
                            Mobile App
                        </a>
                    </li>
                    <li>
                        <a
                            href='#footer'
                            onClick={() => setMenu('contact-us')}
                            className={menu === 'contact-us' ? 'active' : ''}
                        >
                            Contact Us
                        </a>
                    </li>
                </ul>
                <div className='navbar-right'>
                    <img src={assets.search_icon} alt='Search icon' />
                    <Link to='/cart' className='navbar-basket-icon'>
                        <img src={assets.basket_icon} alt='Basket icon' />
                        <div className='dot'></div>
                    </Link>
                    {token ? (
                        <div className='navbar-profile'>
                            <img src={assets.profile_icon} alt='Profile icon' />
                            <div>
                                <button onClick={handleLogout}>
                                    <img src={assets.logout_icon} alt='Logout icon' />
                                    LogOut
                                </button>
                                <button>
                                    <img src={assets.order_icon} alt='Order icon' />
                                    Order
                                </button>
                            </div>
                        </div>
                    ) : (
                        <button
                            onClick={() => setShowLogin(!showLogin)}
                            className='sign-in-button'
                        >
                            Sign In
                        </button>
                    )}
                </div>
            </div>
        </>
    );
};

export default NavBar;
