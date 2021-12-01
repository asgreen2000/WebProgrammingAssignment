import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router";
import { url } from "../../api/services";
  
const SignUp = () => {
	const [data, setData] = useState({
		username: "",
		password: "",
		name: "",
		email: "",
		phone: ""
	})

	const [hint, setHint] = useState({

	})

	const navigate = useNavigate()

	const handleSubmit = (event) => {
		event.preventDefault()
        axios.post(url + 'account/create.php', data, {withCredentials: true})
			.then(result => {
				console.log(result);
				if (result.data.success)
					navigate('/')
				else {
					alert("Không thành công")
				}
        	}
        );
    }

	const handleOnChange = (event) => {
		var name = event.target.name
		var value = event.target.value
        data[name] = value
        setData({...data})

		if (value.length < 3 || 50 < value.length)
			hint[name] = name.charAt(0).toUpperCase() + name.slice(1) + " must be 3 - 50 characters long"
		else
			hint[name] = ""
		setHint({...hint})
    }

	return <div className="container mb-5" style={{backgroundImage: `url("/images/background1.jpg")`, backgroundRepeat: "no-repeat", backgroundPosition: "top"}}>
		<h1 className="my-4 text-center text-uppercase">Buy Me First</h1>
		<form className="form-control my-4" style={{maxWidth: "600px"}} onSubmit={handleSubmit}>
			<div className="form-floating mb-3">
				<input type="text" className={"form-control " + (hint['username'] ? "is-invalid" : "is-valid")} id="username" name="username" aria-describedby="usernameHint" placeholder="Username" value={data['username']} onChange={handleOnChange} />
				<label for="username">Username</label>
				<div id="usernameHint" className="invalid-feedback">{hint['username']}</div>
			</div>
			<div className="form-floating mb-3">
				<input type="password" className={"form-control " + (hint['password'] ? "is-invalid" : "is-valid")} id="password" name="password" aria-describedby="passwordHint" placeholder="Password" value={data['password']} onChange={handleOnChange} />
				<label for="password">Password</label>
				<div id="passwordHint" className="invalid-feedback">{hint['password']}</div>
			</div>
			<div className="form-floating mb-3">
				<input type="text" className={"form-control " + (hint['name'] ? "is-invalid" : "is-valid")} id="name" name="name" aria-describedby="nameHint" placeholder="Name" value={data['name']} onChange={handleOnChange} />
				<label for="name">Name</label>
				<div id="nameHint" className="invalid-feedback">{hint['name']}</div>
			</div>
			<div className="form-floating mb-3">
				<input type="email" className={"form-control " + (hint['email'] ? "is-invalid" : "is-valid")} id="email" name="email" aria-describedby="emailHint" placeholder="Email" value={data['email']} onChange={handleOnChange} />
				<label for="email">Email</label>
				<div id="emailHint" className="invalid-feedback">{hint['email']}</div>
			</div>
			<div className="form-floating mb-3">
				<input type="tel" className={"form-control " + (hint['phone'] ? "is-invalid" : "is-valid")} id="phone" name="phone" aria-describedby="phoneHint" placeholder="Phone number" value={data['phone']} onChange={handleOnChange} />
				<label for="phone">Phone number</label>
				<div id="phoneHint" className="invalid-feedback">{hint['phone']}</div>
			</div>
			<div class="btn-group d-grid gap-2 col-6 mx-auto">
				<button type="submit" class="btn btn-primary form-control">Submit</button>
			</div>
		</form>
	</div>
};
  
export default SignUp;