import { assets } from '../../assets/assets';
import './Add.css';
import { menu_list } from '../../../../frontend/src/assets/assets.js'; // Replace with the correct path to your menu_list
import { useState } from 'react';
import axios from 'axios';

import { toast } from 'react-toastify';
const Add = ({url}) => {
    const [image, setImage] = useState(null);
    const [data, setData] = useState({
        name: "",
        description: "",
        category: "Salad",
        price: "",
    });

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("category", data.category);
        formData.append("price", data.price);
        formData.append("image", image);

        try {
            const response = await axios.post(`${url}/api/food/add`, formData);

            if (response.data.success) {
                setData({
                    name:"",description:"",category:"",price:""
                });
                setImage(false);
                toast.success(response.data.message);
                
            } else {
                toast.error(response.data.message);
                // Handle the case where the response is not successful
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            // Handle any errors that occur during the request
        }
    };


    return (
        <form className='add-item' onSubmit={onSubmitHandler}>
            <div className='add-image'>
                <p>Upload image</p>
                <label htmlFor='image'>
                    <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt='Upload area' />
                </label>
                <input
                    onChange={(e) => setImage(e.target.files[0])}
                    type='file'
                    id='image'
                    hidden
                    required
                />
            </div>
            <div className='add-item-name'>
                <p>Food name</p>
                <input
                    onChange={onChangeHandler}
                    value={data.name}
                    type='text'
                    id='item-name'
                    name='name'
                    placeholder='Matar Paneer'
                    required
                />
            </div>
            <div className='add-description'>
                <p>Description</p>
                <textarea
                    onChange={onChangeHandler}
                    value={data.description}
                    id='description'
                    name='description'
                    placeholder='Enter description...'
                    required
                ></textarea>
            </div>
            <div className='select-price'>
                <div className='category-item'>
                    <p>Category</p>
                    <select
                        onChange={onChangeHandler}
                        value={data.category}
                        id='category'
                        name='category'
                        required
                    >
                        {menu_list.map((menu, index) => (
                            <option key={index} value={menu.menu_name}>{menu.menu_name}</option>
                        ))}
                    </select>
                </div>
                <div className='item-price'>
                    <p>Price</p>
                    <input
                        onChange={onChangeHandler}
                        value={data.price}
                        type='number'
                        id='price'
                        name='price'
                        min='0'
                        placeholder='Enter price'
                        required
                    />
                </div>
            </div>
            <div className='submit-button'>
                <button type='submit'>Add Item</button>
            </div>
        </form>
    );
}

export default Add;
