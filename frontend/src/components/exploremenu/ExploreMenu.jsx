import { menu_list } from "../../assets/assets"; // Uncommented the import
import { useContext, useState, useEffect } from "react";
import './ExploreMenu.css';
import { StoreContext } from "../../context/StoreContext";

const ExploreMenu = () => {
    const [exploreItem, setExploreItem] = useState('');
    const { setCategory } = useContext(StoreContext);

    useEffect(() => {
        if (exploreItem) {
            setCategory(exploreItem);
        }
    }, [exploreItem, setCategory]);

    return (
        <div className="explore-menu" id="explore-menu">
            <h3>Explore Menu</h3>
            <p>Discover a variety of delicious dishes, crafted to tantalize your taste buds. From savory appetizers to mouth-watering main courses, our menu has something for everyone.</p>
            <div className="explore-menu-list">
                {menu_list.map((item, key) => (
                    <div className="explore-menu-list-item" key={key}>
                        <img
                            onClick={() => {
                                setExploreItem(item.menu_name);
                            }}
                            className={exploreItem === item.menu_name ? 'active' : ''}
                            src={item.menu_image}
                            alt={`menu item ${key}`}
                        />
                        <p>{item.menu_name}</p>
                    </div>
                ))}
            </div>
            <hr />
        </div>
    );
}

export default ExploreMenu;
