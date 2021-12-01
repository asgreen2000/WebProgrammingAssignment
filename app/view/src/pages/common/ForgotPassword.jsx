import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router";
import { url } from "../../api/services";
  
const ForgotPassword = () => {
	const [data, setData] = useState({
		username: "",
		email: "",
	})

	const [hint, setHint] = useState({

	})

	const navigate = useNavigate()

	const handleSubmit = (event) => {
		event.preventDefault()
        axios.post(url + 'account/reset_password.php', data, {withCredentials: true})
			.then(result => {
				console.log(result);
				if (result.data.success) {
                    alert('Thành công')
					navigate('/signin')
                } else {
					alert(result.data.message)
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

	return <div className="container" style={{backgroundImage: `url("/images/background1.jpg")`, backgroundRepeat: "no-repeat", backgroundPosition: "top", height: "70vh"}}>
		<h1 className="my-4 text-center">Forgot password</h1>
        <h5 className="text-center">Your new password is your email</h5>
		<form className="form-control my-4" style={{maxWidth: "600px"}} onSubmit={handleSubmit}>
			<div className="form-floating mb-3">
				<input type="text" className={"form-control " + (hint['username'] ? "is-invalid" : "is-valid")} id="username" name="username" aria-describedby="usernameHint" placeholder="Username" value={data['username']} onChange={handleOnChange} />
				<label for="username">Username</label>
				<div id="usernameHint" className="invalid-feedback">{hint['username']}</div>
			</div>
			<div className="form-floating mb-3">
				<input type="email" className={"form-control " + (hint['email'] ? "is-invalid" : "is-valid")} id="email" name="email" aria-describedby="emailHint" placeholder="Email" value={data['email']} onChange={handleOnChange} />
				<label for="email">Email</label>
				<div id="emailHint" className="invalid-feedback">{hint['email']}</div>
			</div>
			<div class="btn-group d-grid gap-2 col-6 mx-auto">
				<button type="submit" class="btn btn-primary form-control">Submit</button>
			</div>
		</form>
	</div>
};
  
export default ForgotPassword;