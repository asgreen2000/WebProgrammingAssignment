import axios from "axios";
import { useNavigate } from "react-router";

const URL = 'http://localhost/assi/'

const SignOut = () => {
	const navigate = useNavigate()

    axios.get(URL + 'app/controller/account/logout.php', {withCredentials: true})
		.then(result => {
			if (result.data.result)
				navigate('/signin')
		}
	);

    return <></>
};
  
export default SignOut;