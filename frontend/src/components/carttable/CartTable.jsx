import { useContext, useEffect, useState } from 'react';
import './CartTable.css';
import { StoreContext } from '../../context/StoreContext';
import CartPlaceOrder from '../cartplaceorder/CartPlaceOrder';
import CartPromoCode from '../cartplaceorder/CartPromoCode';

const CartTable = () => {
    const { cartItem, addToCart, removeFromCart, food_list,url } = useContext(StoreContext);
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
                <>
                    <table className='cart-table'>
                        <thead>
                            <tr>
                                <th>*</th>
                                <th>Image</th>
                                <th>Food Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Add</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(cartItem).map((itemId, index) => {
                                const item = food_list.find(food => food._id === itemId);
                                if (!item || !cartItem[itemId]) return null;
                                return (
                                    <tr key={item._id}>
                                        <td className='cart-item-serial-number'>{index + 1}</td>
                                        <td className='cart-item-image'>
                                            <img
                                                src={url + '/images/'+item.image}
                                                alt={item.name}
                                                onError={(e) => e.target.src = '/path/to/placeholder.jpg'}
                                            />
                                        </td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>{cartItem[itemId]}</td>
                                        <td>{item.price * cartItem[itemId]}</td>
                                        <td>
                                            <button
                                                className='cart-item-add'
                                                onClick={() => addToCart(item._id)}
                                            >
                                                +1
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                className='cart-item-remove'
                                                onClick={() => removeFromCart(item._id)}
                                            >
                                                -1
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                            {totalQuantity > 0 ? (
                                <tr className='total'>
                                    <td></td>
                                    <td>Total</td>
                                    <td></td>
                                    <td></td>
                                    <td>{totalQuantity}</td>
                                    <td>{totalPrice}</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                    ) : (<tr className='total'>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>)}
                        </tbody>
                    </table>
                    <div className="cart-place-order">
                        <CartPromoCode />
                        <CartPlaceOrder />
                    </div>
                </>
    );
};

export default CartTable;
