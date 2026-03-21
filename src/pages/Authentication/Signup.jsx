import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { signup } from "../../Reducer/Slices/AuthSlice";

function Signup(){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [signupDetails, setSignupDetails] = useState({
        email: "",
        password: "",
        name: "",
        userType: "",
        userStatus: "",
        clientName: ""
    });

    function handleInputChange(e){
        const {name, value} = e.target;
        setSignupDetails({
            ...signupDetails, 
            [name]: value
        });
    }

    async function onSubmit(){
        console.log("calling singup");
        if(!signupDetails.email ||
           !signupDetails.password ||
           !signupDetails.name ||
           !signupDetails.userStatus ||
           !signupDetails.userType ||
           !signupDetails.clientName) {
            console.log("Validation failed");
            return;
           }
        console.log("Calling login");
        const response = await dispatch(signup(signupDetails));
        console.log(response.payload);
        if(response.payload) navigate("/login");
        else resetSignupDetails();
    }

    function handleUserType(e){
        const usertype =e.target.textContent;
        setSignupDetails({
            ...signupDetails, 
            userType: usertype,
            userStatus: (usertype == "customer") ? "approved" : "suspended"
        });
        document.activeElement.blur();
    }

    function resetSignupDetails(){
        setSignupDetails({
            email: "",
            password: "",
            name: "",
            userType: "",
            userStatus: "",
            clientName: ""
        });
    }

    return (
        <div className="flex justify-center items-center h-[90vh]">
            <div className="card bg-neutral text-neutral-content w-96">
                <div className="flex flex-col items-center mb-1 mt-6">
                    <div className="w-16 h-16 rounded-full bg-[#1a2a3a] border-2 border-[#38c9f0] flex items-center justify-center mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#38c9f0]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="8" r="4" fill="#38c9f0" stroke="none"/>
                            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#38c9f0" strokeWidth="1.8"/>
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-white tracking-wide">Create Account</h2>
                    <p className="text-sm text-slate-400 mt-1">Sign up to get started</p>
                </div>
                <div className="card-body items-center text-start">
                    <div className="w-full text-blue-200">
                        <div className="text-xs mb-1">NAME</div>
                        <div className="w-full">
                            <input 
                                onChange={handleInputChange} 
                                autoComplete="one-time-code"
                                name="name"
                                type="text" 
                                placeholder="enter userid " 
                                className="input input-primary text-white" 
                            />
                        </div>
                    </div>
                    
                    <div className="w-full text-blue-200">
                        <div className="text-xs mb-1">EMAIL</div>
                        <div className="w-full">
                            <input 
                                onChange={handleInputChange} 
                                name="email"
                                autoComplete="one-time-code" 
                                type="email" 
                                placeholder="enter email" 
                                className="input input-primary text-white" 
                            />
                        </div>
                    </div>
                    
                    <div className="w-full text-blue-200">
                        <div className="text-xs mb-1">PASSWORD</div>
                        <div className="w-full">
                            <input 
                                onChange={handleInputChange} 
                                name="password"
                                autoComplete="one-time-code" 
                                type="password" 
                                placeholder="enter password" 
                                className="input input-primary text-white" 
                            />
                        </div>
                    </div>
                    
                    <div className="dropdown w-full" >
                        <div tabIndex={0} role="button" className="btn m-1">{(!signupDetails.userType) ? "USER TYPE" : signupDetails.userType}</div>
                        <ul onClick={handleUserType} tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-35 p-2 shadow-sm" id="userTypeDropdown">
                            <li><Link>customer</Link></li>
                            <li><Link>engineer</Link></li>
                            <li><Link>admin</Link></li>
                        </ul>
                    </div>
                    <div className="w-full text-blue-200">
                        <div className="text-xs mb-1">CLIENT NAME</div>
                        <div className="w-full">
                            <input
                                onChange={handleInputChange}
                                name="clientName"
                                autoComplete="one-time-code" 
                                type="text" 
                                placeholder="enter client name" 
                                className="input input-primary text-white" 
                            />
                        </div>
                    </div>
                    
                    <div className="w-full">
                        <button onClick={onSubmit} className="btn btn-secondary  font-bold text-lg w-full mt-6">Submit</button>
                    </div>
                    <p className="text-grey">
                        Already have an account? <Link className="text-blue-300" to={'/login'}>Login instead</Link>
                    </p>
                </div>
            </div>
        </div>
    ); 
}
export default Signup;