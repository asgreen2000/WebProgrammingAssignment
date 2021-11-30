import { useEffect, useState } from "react";
import {Navigate, useNavigate} from "react-router";
import { checkUserIs } from "../../api/services";

const ProtectedRoute = ({element, role}) => {
    
    let [itemToShow, setItem] = useState(null);
    

    const navigate = useNavigate();
    useEffect(() =>  {

        async function fetchData() {
            // You can await here
            const response = await checkUserIs(role);
            console.log(response);
            if (response)
                setItem(element);
            else {
                
                setItem(null);
                navigate('/login');
                
            }
            // ...
        }

       fetchData();

    }, [element]);

    
    
    return  (
        itemToShow
    )
}


export default ProtectedRoute;