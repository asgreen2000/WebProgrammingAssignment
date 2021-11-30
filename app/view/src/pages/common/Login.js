import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";



const Login = ({action}) => {

    const [data, setData] = useState({
        username: "",
        password: ""
    });
    
    const navigate = useNavigate();
    
    const handleClick = () => {

        axios.post('http://localhost/controller/account/login.php', data, {withCredentials: true}).then(result => {
            
            console.log(result);
            if (result.data.isSuccess)
            {   
                console.log(result.data.user);
                
                if (result.data.user.role === 'Admin') {
                    
                   
                    navigate('/admin');
                }
                else {
                    navigate('/');
                }
            }
        }
        );
    }

    const handleOnChange = (event) => {
        console.log(event.target.name);
        data[event.target.name] = event.target.value;

        // axios.get('http://localhost/assi/app/controller/account/read.php', {withCredentials: true})
        // .then(result => console.log(result));
        setData({...data});
    }

    return (
    
    <section className="vh-100">
        <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
                <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png" className="img-fluid"
                alt="Sample image" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form>
               
                
                <div className="form-outline mb-4">
                <label className="form-label" for="username">TÀI KHOẢN</label>
                    <input type="text" id="username" className="form-control form-control-lg"
                    placeholder="Enter a valid email address" name='username' onChange={handleOnChange}/>
                   
                </div>

                
                <div className="form-outline mb-3">
                <label className="form-label" for="password">MẬT KHẨU</label>
                    <input type="password" id="password" className="form-control form-control-lg"
                    placeholder="Enter password" name='password' onChange={handleOnChange}/>
                    
                </div>

                <div className="d-flex justify-content-between align-items-center">
                   
                    <div className="form-check mb-0">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                    <label className="form-check-label" for="form2Example3">
                        Remember me
                    </label>
                    </div>
                    <a href="#!" className="text-body">Forgot password?</a>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                    <button type="button" className="btn btn-primary btn-lg" onClick={handleClick}
                    >Login</button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                        className="link-danger">Register</a></p>
                </div>

                </form>
            </div>
            </div>
        </div>        
    </section>
    )
}

export default Login;