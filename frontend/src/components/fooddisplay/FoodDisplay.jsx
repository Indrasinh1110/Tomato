import './FoodDisplay.css';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import FoodCard from '../foodcard/FoodCard';

const FoodDisplay = () => {
    const { food_list, category } = useContext(StoreContext);
    
    return (
        <div className='food-display'>
            <h2>Top dishes near you</h2>
            <div className='food-display-list'>
                {food_list.map((item, index) => {
                    return (
                        (item.category == category || category === "All")
                        &&
                        (<FoodCard
                            key={index}
                            itemId={item._id}
                            name={item.name}
                            image={item.image}
                            price={item.price}
                            description={item.description}
                            category={item.category}
                        />));
                }

                )}
            </div>
        </div>
    );
}

export default FoodDisplay;
