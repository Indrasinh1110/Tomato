import { useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { StoreContext } from '../../context/StoreContext';
import './CartPlaceOrder.css'; // Make sure this CSS file styles your component appropriately
const CartPlaceOrder = () => {
    const { cartItem, food_list } = useContext(StoreContext);
    const [totalCartPrice, setTotalCartPrice] = useState(0);
    useEffect(() => {
        let price = 0;
        Object.keys(cartItem).forEach((itemId) => {
            const item = food_list.find(food => food._id === itemId);
            if (item) {
                price += item.price * cartItem[itemId];
            }
        });
        setTotalCartPrice(price);
    }, [cartItem, food_list]);
    const gstRate = 0.05; // GST rate
    const deliveryChargeRate = 0.10; // Delivery charge rate

    // Calculate prices
    const gst = totalCartPrice * gstRate;
    const deliveryCharge = totalCartPrice * deliveryChargeRate;
    const totalPriceWithCharges = totalCartPrice + gst + deliveryCharge;
    const navigate=useNavigate();
    return (
        
            <div className="place-order-card">
                <h3>Your Order</h3>
                <ul>
                    <li><p>Food Price Total</p> <p>{totalCartPrice} INR</p></li>
                    <li><p>GST (+5%)</p> <p>{gst} INR</p></li>
                    <li><p>Delivery Charge</p> <p>{deliveryCharge} INR</p></li>
                    <li className='total-cart-price'><p >Total Price</p> <p>{totalPriceWithCharges} INR</p></li>
                </ul>
                <button onClick={()=>navigate('/order')} className="place-order-submit">Place Order</button>
            </div>
    );
}

export default CartPlaceOrder;
