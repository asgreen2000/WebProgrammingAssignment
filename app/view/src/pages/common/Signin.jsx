import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { url } from "../../api/services";

const SignIn = () => {
    const [data, setData] = useState({
        username: "",
        password: "",
		remember: false
    });

	const [feedback, setFeedback] = useState({
        username: "",
        password: ""
    });
    
    const navigate = useNavigate();
    
    const handleSubmit = (event) => {
		event.preventDefault()
        axios.post(url + 'account/login.php', data, {withCredentials: true})
			.then(result => {

				console.log(result);
				if (result.data.isSuccess)
					navigate(result.data.role == 'Admin' ? '/admin' : '/', {replace: true})
				else {
					alert("Unsuccessful")
				}
        	}
        )
		.catch(error => {

			alert(error)
		})
		;
    }

	useEffect(() => axios.post(url + 'account/login.php', data, {withCredentials: true})
		.then(result => {
			if (result.data.isSuccess)
				navigate(result.data.role == 'Admin' ? '/admin' : '/')
		}
	), [])

    const handleOnChange = (event) => {
		var name = event.target.name
		var value = event.target.value
		if (name == "remember")
        	value = event.target.checked
		
		data[name] = value
        setData({...data})

		if (value.length < 3 || 50 < value.length)
			feedback[name] = name.charAt(0).toUpperCase() + name.slice(1) + " must be 3 - 50 characters long"
		else
			feedback[name] = ""
		setFeedback({...feedback})
    }

    return <section>
        <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
				<div className="col-md-9 col-lg-6 col-xl-5">
					<img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png" className="img-fluid"
					alt="Sample image" />
				</div>
            	<div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
					<form onSubmit={handleSubmit}>
						<div className="form-floating mb-4">
							<input type="text" id="username" className={"form-control " + (feedback['username'] ? "is-invalid" : "is-valid")} placeholder="Username" name='username' onChange={handleOnChange} value={data['username']}/>
							<label className="form-label" for="username">Username</label>
							<div id="usernameFeedback" className="invalid-feedback">{feedback['username']}</div>
						</div>

						<div className="form-floating mb-3">
							<input type="password" id="password" className={"form-control " + (feedback['password'] ? "is-invalid" : "is-valid")} placeholder="Password" name='password' onChange={handleOnChange} value={data['password']}/>
							<label className="form-label" for="password">Password</label>
							<div id="passwordFeedback" className="invalid-feedback">{feedback['password']}</div>
						</div>

						<div className="d-flex justify-content-between align-items-center">
							<div className="form-check mb-0">
								<input className="form-check-input me-2" type="checkbox" id="remember" name="remember" checked={data['remember']} onChange={handleOnChange} />
								<label className="form-check-label" for="remember">Remember me for 30 days</label>
							</div>
							<a href="/forgot-password" className="text-body">Forgot password?</a>
						</div>

						<div className="text-center text-lg-start mt-4 pt-2">
							<button type="submit" className="btn btn-primary btn-lg">Login</button>
							<p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/signup" className="link-danger">Register</a></p>
						</div>
					</form>
				</div>
			</div>
		</div>        
    </section>
}

export default SignIn;