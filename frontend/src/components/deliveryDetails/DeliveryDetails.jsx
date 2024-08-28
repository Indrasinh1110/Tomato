import { useState } from 'react';
import './DeliveryDetails.css';

const DeliveryDetails = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
        phone: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <div className="form-container">
            <h2>Delivery Information</h2>
            <form onSubmit={handleSubmit}>
                <div className='multi-fields'>
                    <label>
                        First name:
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Last name:
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </label></div>
                <div className='multi-fields'><label>
                    Email address:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>

                    <label>
                        Phone:
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className='multi-fields'> <label>
                    Street:
                    <input
                        type="text"
                        name="street"
                        value={formData.street}
                        onChange={handleChange}
                    />
                </label><label>
                        City:
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className='multi-fields'>  <label>
                    State:
                    <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                    />
                </label> <label>
                        Zip code:
                        <input
                            type="text"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Country:
                        <input
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                        />
                    </label></div>
                <div className='multi-fields'></div>
                <button className='address-submit' type="submit">Submit</button>
            </form>
        </div>
    );
};

export default DeliveryDetails;
