
// import React, { useContext, useState } from 'react';
// import './LoginPopup.css';
// import { assets } from '../../assets/assets';
// import { StoreContext } from '../../Context/StoreContext';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const LoginPopup = ({ setShowLogin }) => {
//     const { setToken, url, loadCartData } = useContext(StoreContext);
//     const [currState, setCurrState] = useState("Sign Up");

//     const [data, setData] = useState({
//         name: "",
//         email: "",
//         password: ""
//     });

//     const onChangeHandler = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setData(data => ({ ...data, [name]: value }));
//     };

//     const onLogin = async (e) => {
//         e.preventDefault();

//         let new_url = url;
//         if (currState === "Login") {
//             new_url += "/api/user/login";
//         } else {
//             new_url += "/api/user/register";
//         }
//         const response = await axios.post(new_url, data);
//         if (response.data.success) {
//             setToken(response.data.token);
//             localStorage.setItem("token", response.data.token);
//             loadCartData({ token: response.data.token });
//             setShowLogin(false);
//         } else {
//             toast.error(response.data.message);
//         }
//     };

//     return (
//         <div className='login-popup'>
//             <div className='login_img'>
//                 <img src={assets.login_image} alt="Login Visual" className="login-popup-image" /> 
//             </div>
//             <div className="login-popup-container">
//                 <form onSubmit={onLogin} className="login-popup-form">
//                     <div className="login-popup-title">
//                         <h2>{currState}</h2>
//                         <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
//                     </div>
//                     <div className="login-popup-inputs">
//                         {currState === "Sign Up" ? <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your name' required /> : <></>}
//                         <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email' required />
//                         <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required />
//                     </div>
//                     <button>{currState === "Login" ? "Login" : "Create account"}</button>
//                     <div className="login-popup-condition">
//                         <input type="checkbox" required />
//                         <p>By continuing, I agree to the terms of use & privacy policy.</p>
//                     </div>
//                     {currState === "Login"
//                         ? <p>Create a new account? <span onClick={() => setCurrState('Sign Up')}>Click here</span></p>
//                         : <p>Already have an account? <span onClick={() => setCurrState('Login')}>Login here</span></p>
//                     }
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default LoginPopup;
import React, { useContext, useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const LoginPopup = ({ setShowLogin }) => {
    const { setToken, url, loadCartData } = useContext(StoreContext);
    const [currState, setCurrState] = useState("Sign Up");

    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }));
    };

    const onLogin = async (e) => {
        e.preventDefault();

        let new_url = url;
        if (currState === "Login") {
            new_url += "/api/user/login";
        } else {
            new_url += "/api/user/register";
        }
        const response = await axios.post(new_url, data);
        if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token);
            loadCartData({ token: response.data.token });
            setShowLogin(false);
        } else {
            toast.error(response.data.message);
        }
    };

    return (
        <div className='login-popup'>
            <div className='login-content'>
                <div className='login_img'>
                    <img src={assets.login_image} alt="Login Visual" className="login-popup-image" /> 
                </div>
                <div className="login-popup-container">
                    <form onSubmit={onLogin} className="login-popup-form">
                        <div className="login-popup-title">
                            <h2>{currState}</h2>
                            <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
                        </div>
                        <div className="login-popup-inputs">
                            {currState === "Sign Up" && <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='NAME' required />}
                            <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='EMAIL' required />
                            <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='PASSWORD' required />
                        </div>
                        <button>{currState === "Login" ? "Login" : "Create account"}</button>
                        <div className="login-popup-condition">
                            <input type="checkbox" required />
                            <p>ACCEPT TERMS AND POLICIES.</p>
                        </div>
                        <div className='ko'>
                        {currState === "Login"
                            ? <p>NEW ACCOUNT? <span onClick={() => setCurrState('Sign Up')}>SIGN UP</span></p>
                            : <p>RETURNING USER? <span onClick={() => setCurrState('Login')}>LOGIN</span></p>
                        }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPopup;

