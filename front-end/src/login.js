
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
const Login =()=>{
// const [password,SetPassword]=useState("");
const navigate = useNavigate();

const [Data,SetData]=useState([]);

 useEffect(() =>{

	// console.log(e.target.value)
	let result =  axios.get("http://127.0.0.1:8000/api/data")

	.then(res=>{

		SetData(res.data)
		console.log(res.data)
	})

}

)

// async function HandleChange(e){
// 	let items = Email
// 	console.log(e.target.value)
// 	let result = await axios.get("http://127.0.0.1:8000/api/data")

// 	.then(res=>{

// 		SetEmail(res.data[0].email)
// 		console.log(res.data[0].email)
// 	})
	
    
// }
// async function log(){
	
// 		let result = await axios.get("http://127.0.0.1:8000/api/data")
// 		.then(res=>{

// 			console.log(res.data)
// 		})
	
		
		
		
// 		// navigate('/home')
	 

// }
	
	return(
	<div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
				<div className="login100-pic js-tilt" data-tilt>
					<img src="images/img-01.png" alt="IMG"></img>
				</div>
		{
			Data.map(user=><h1>{user.id}</h1>)
		}
				<form className="login100-form validate-form">
					<span className="login100-form-title">
						 Login
					</span>

					<div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input className="input100" type="text" name="email"  placeholder="Email"></input>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div className="wrap-input100 validate-input"   data-validate = "Password is required">
						<input className="input100" type="password" name="pass" placeholder="Password"></input>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					
					<div className="container-login100-form-btn">
						<button  className="login100-form-btn">
							Login
						</button>
					</div>

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
	

