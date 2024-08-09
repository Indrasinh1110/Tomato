import { useContext } from 'react';
import rating_starts from '../../assets/rating_starts.png';
import './FoodCard.css';
import { StoreContext } from '../../context/StoreContext';

const FoodCard = ({ itemId, name, image, price, description, category }) => {
    const { cartItem, addToCart, removeFromCart, url } = useContext(StoreContext);
    return (
        <div className="food-card">
            <img src={`${url}/images/${image}`} alt={name} className="food-image" />
            <div className='food-content'>
                {!cartItem[itemId] ? (
                    <div className='food-item-count'>
                        <button onClick={() => addToCart(itemId)} className='food-item-plus'>Add</button>
                    </div>
                ) : (
                    <div className='food-item-count'>
                        <button onClick={() => removeFromCart(itemId)} className='food-item-minus'>Drop</button>
                        <span className='no-of-items'>{cartItem[itemId]}</span>
                        <button onClick={() => addToCart(itemId)} className='food-item-plus'>Add</button>
                    </div>
                )}
                <div>
                    <div className='food-name-and-category'>
                        <p>{name}</p>
                        <p>{category}</p>
                    </div>
                    {/* <img src={rating_starts} alt="Rating stars" className="rating-stars" /> */}
                </div>
                <div className="food-description">
                    {description}
                </div>
                <p className='food-price'>{price} INR</p>
            </div>
        </div>
    );
};

export default FoodCard;
