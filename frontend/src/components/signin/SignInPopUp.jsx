import { useState, useContext } from "react";
import './SignIn.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { StoreContext } from "../../context/StoreContext";

const SignInPopUp = () => {

    const [alreadyUser, setAlreadyUser] = useState(false);
    const [data, setData] = useState({
        username: "",
        email: "",
        password: ""
    });
    const [visible, setVisible] = useState(true);
    const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
    const { setToken, url } = useContext(StoreContext);

    const onSignIn = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData((prev) => ({ ...prev, [name]: value }));
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const endpoint = alreadyUser ? "/api/user/login" : "/api/user/register";
            const response = await axios.post(`${url}${endpoint}`, data);

            if (response.data.success) {
                setToken(response.data.token);
                localStorage.setItem("token", response.data.token);
                toast.success(alreadyUser ? "Logged In Successfully" : "Registered Successfully");
                setVisible(false);
            } else {
                if (response.data.message === "Email already in use") {
                    toast.error("User with this email already exists. Please login.");
                } else if (response.data.message === "Email is invalid") {
                    toast.error("Invalid Email");
                } else if (response.data.message === "Password length must be at least 8 characters") {
                    toast.error("Password length must be at least 8 characters");
                } else {
                    toast.error("Invalid Credentials");
                }
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
    };

    if (!visible) return null;

    return (
        <div className="sign-in">
            <form className="sign-in-card" onSubmit={onSubmit}>
                <button type="button" onClick={() => setVisible(false)} className="close-sign-in">X</button>
                {alreadyUser ? (
                    <div className="Login">
                        <h3>Login</h3>
                        <input
                            onChange={onSignIn}
                            name="email"
                            value={data.email}
                            type="email"
                            className="e-mail"
                            placeholder="E-mail"
                        />
                        <div className="password-field">
                            <input
                                onChange={onSignIn}
                                name="password"
                                value={data.password}
                                type={showPassword ? "text" : "password"} // Toggle between password and text
                                className="password"
                                placeholder="Password"
                            />
                            <button type="button" className="toggle-password" onClick={togglePasswordVisibility}>
                                <img
                                    src={showPassword ? "https://cdn-icons-png.flaticon.com/512/709/709612.png" : "https://cdn-icons-png.flaticon.com/512/709/709586.png"}
                                    alt={showPassword ? "Hide Password" : "Show Password"}
                                    width="20px"
                                />
                            </button>
                        </div>
                        <div className="login-or-signup-change">
                            <p>Create a new account</p>
                            <button type="button" onClick={() => setAlreadyUser(false)}>Sign-up</button>
                        </div>
                        <button type="submit" className="submit">Login</button>
                    </div>
                ) : (
                    <div className="SignUp">
                        <h3>Sign Up</h3>
                        <input
                            onChange={onSignIn}
                            name='username'
                            value={data.username}
                            type="text"
                            className="username"
                            placeholder="Username"
                        />
                        <input
                            onChange={onSignIn}
                            name="email"
                            value={data.email}
                            type="email"
                            className="e-mail"
                            placeholder="E-mail"
                        />
                        <div className="password-field">
                            <input
                                onChange={onSignIn}
                                name="password"
                                value={data.password}
                                type={showPassword ? "text" : "password"} // Toggle between password and text
                                className="password"
                                placeholder="Password"
                            />
                            <button type="button" className="toggle-password" onClick={togglePasswordVisibility}>
                                <img
                                    src={showPassword ? "https://cdn-icons-png.flaticon.com/512/709/709612.png" : "https://cdn-icons-png.flaticon.com/512/709/709586.png"}
                                    alt={showPassword ? "Hide Password" : "Show Password"
                                    }
                                    className="eyes"
                                    width="15px"
                                />
                            </button>
                        </div>
                        <div className="terms-and-conditions">
                            <input type="checkbox" id="terms" />
                            <label htmlFor="terms">I agree to the terms and conditions</label>
                        </div>
                        <div className="login-signup-change">
                            <p>Already have an account?</p>
                            <button type="button" onClick={() => setAlreadyUser(true)}>Login</button>
                        </div>
                        <button type="submit" className="submit">Sign Up</button>
                    </div>
                )}
            </form>
        </div>
    );
};

export default SignInPopUp;
