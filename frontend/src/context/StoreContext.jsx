import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
export const StoreContext = createContext(null);
export const StoreContextProvider = (props) => {
    const [token, setToken] = useState("");
    const [cartItem, setCartItem] = useState({});
    const [food_list, setFoodList] = useState([]);
    const url = "https://tomato-backend-1yje.onrender.com";

    const [category, setCategory] = useState("All");
    const addToCart = async (itemId) => {
        if (!cartItem[itemId]) {
            setCartItem((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
        if (token) {
            await axios.post(`${url}/api/cart/add`, { itemId }, { headers: { token } });
        }
    }
    const removeFromCart = async (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if (token) {
            await axios.post(`${url}/api/cart/remove`, { itemId }, { headers: { token } });
        }
    }
    const fetchFoodList = async () => {
        try {
            const response = await axios.get(`${url}/api/food/list`);
            if (response.data) {
                setFoodList(response.data);
                // Ensure you set the correct data
            } else {
                toast.error("Failed to fetch food list");
            }
        } catch (error) {
            toast.error("An error occurred while fetching the food list");
        }
    };

    const localCartStore = async (token) => {
        try {
            const response = await axios.get(`${url}/api/cart/get-cart`, { headers: { token } });
            if (response.data) {
                setCartItem(response.data.cartData);
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        async function loadData() {
            await fetchFoodList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
                await localCartStore(localStorage.getItem("token"));
            }
        }
        loadData();
    }, [])

    const contextValue = {
        food_list,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart,
        token,
        setToken,
        category,
        setCategory,
        url
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};
