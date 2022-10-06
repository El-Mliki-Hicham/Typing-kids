
import React, { useRef } from 'react';
import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';

const Login =()=>{
const [password,SetPassword]=useState("");
const [Email,SetEmail]=useState("");
const navigate = useNavigate();
const inputRef = useRef(null)
const inputRefPW = useRef(null)
const [Data,SetData]=useState([]);

 useEffect(() =>{
	 // console.log(e.target.value)
	 const fetchData = async () => {
	let result = await axios.get("http://127.0.0.1:8000/api/data")
	.then(res=>{
		SetData(res.data)
		console.log(Data)
	})
	 }
	 fetchData()
},[])
function handleSubmit(e)  {
    e.preventDefault();
		Data.map(user=>{			
	if(Email == user.email && password==user.password ){
	navigate('/Game')
}
else(
	document.getElementById("validation").innerHTML = "Email or password is incorrect"
)
})}
        
function HandleChange(){
	console.log(inputRef.current.value)
	console.log(inputRefPW.current.value)
	SetEmail(inputRef.current.value)
	SetPassword(inputRefPW.current.value)
  
}
	return(
	<div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
				<div className="login100-pic js-tilt" data-tilt>
					<img src="images/img-01.png" alt="IMG"></img>
				</div>
				<form className="login100-form validate-form">
					<span className="login100-form-title">
						 Login
					</span>

					<div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input className="input100" type="text"id='email' ref={inputRef}  onChange={HandleChange} name="email"  placeholder="Email"></input>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div className="wrap-input100 validate-input"   data-validate = "Password is required">
						<input className="input100" type="password" ref={inputRefPW} id='password'  onChange={HandleChange} name="pass" placeholder="Password"></input>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					
					<div className="container-login100-form-btn">
						<button onClick={handleSubmit} className="login100-form-btn">
							Login
						</button>
					</div>
				<div id='validation' style={{color:"red" ,fontWeight: "bold"}}></div>
					<div className="text-center p-t-12">
						<span className="txt1">
							Forgot
						</span>
						<a className="txt2" href="#">
							Username / Password?
						</a>
					</div>

					<div className="text-center p-t-136">
						<a className="txt2" href="#">
							Create your Account
							<i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
	
)
}
export default Login
	

