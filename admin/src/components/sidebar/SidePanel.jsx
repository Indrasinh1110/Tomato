import { assets } from '../../assets/assets';
import './SidePanel.css';
import { NavLink } from 'react-router-dom';

const SidePanel = () => {
    return (
        <div className='side-panel'>
            <ul>
                <li>
                    <NavLink to='/Add' className='operation' activeClassName='active'>
                        <img src={assets.add_icon} alt='Add Item' />
                        <p>Add Item</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/List' className='operation' activeClassName='active'>
                        <img src={assets.order_icon} alt='Item List' />
                        <p>Item List</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Order' className='operation' activeClassName='active'>
                        <img src={assets.order_icon} alt='Order' />
                        <p>Order</p>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default SidePanel;
