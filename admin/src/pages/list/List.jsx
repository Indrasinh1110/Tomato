import { useState, useEffect } from 'react';
import './List.css';
import axios from "axios";
import { toast } from 'react-toastify';
const List = ({url}) => {
    const [list, setList] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${url}/api/food/list`);
            if (response.data) {
                setList(response.data);
            }
            else {
                console.log("No success response:", response.data);
                toast.error("Error fetching data: No success response");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            toast.error("Error fetching data");
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    const onClickRemove=async (itemID)=>{
        const response = await axios.post(`${url}/api/food/remove`,{"_id":itemID });
        await fetchData();
        if(response.data){
            toast.success(response.data.message);
        }
        else{
            toast.error("Error:Removing Item");
        }
    }
    return (
        <table className='list-item'>
            <thead>
                <tr>
                    <th className='food-name-admin'>Name</th>
                    <th className='food-image-admin'>Image</th>
                    <th className='description-admin'>Description</th>
                    <th className='category-admin'>Category</th>
                    <th className='price-admin'>Price</th>
                    <th className='remove-item-admin'>Remove</th>
                    
                </tr>
            </thead>
            <tbody>
                {list.length > 0 ? (
                    list.map((item, index) => (
                        <tr key={index} className='item'>
                            <td className='food-name-admin'>{item.name}</td>
                            <td ><img src={`${url}/images/${item.image}`} className='food-image-admin' alt="food" /></td>
                            <td className='description-admin'>{item.description}</td>
                            <td className='category-admin'>{item.category}</td>
                            <td className='price-admin'>{item.price} INR</td>
                            <td className='remove-item-admin' ><button onClick={()=>onClickRemove(item._id)} >Remove</button></td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="6">No items found</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default List;
