import { useContext, useEffect, useState } from 'react';
import './CartTable.css';
import { StoreContext } from '../../context/StoreContext';
import CartPlaceOrder from '../cartplaceorder/CartPlaceOrder';
import CartPromoCode from '../cartplaceorder/CartPromoCode';
import FoodCard from '../foodcard/FoodCard';
const CartTable = () => {
    const { cartItem, food_list } = useContext(StoreContext);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        let quantity = 0;
        let price = 0;
        Object.keys(cartItem).forEach((itemId) => {
            const item = food_list.find(food => food._id === itemId);
            if (item && cartItem[itemId]) {  // Ensure cartItem[itemId] is not null
                quantity += cartItem[itemId];
                price += item.price * cartItem[itemId];
            }
        });
        setTotalQuantity(quantity);
        setTotalPrice(price);
    }, [cartItem, food_list]);
    return (
        <div className='cart-table'>
            <div className='cart-items'>
                <div className='totals'>
                    <p> No. of Items : {totalQuantity}</p>
                    <p> Total Price : {totalPrice}</p>
                </div>
                {Object.keys(cartItem).map((itemId, index) => {
                    const item = food_list.find(food => food._id === itemId);
                    if (!item || !cartItem[itemId]) return null;
                    return (
                        <FoodCard
                            key={index}
                            itemId={item._id}
                            name={item.name}
                            image={item.image}
                            price={item.price * cartItem[itemId]}
                            description={item.description}
                            category={item.category}
                        />
                    );
                })}

            </div>
      <div className="cart-place-order">
                <CartPromoCode  />
                <CartPlaceOrder />
            </div>
        </div>
    );
};

export default CartTable;
