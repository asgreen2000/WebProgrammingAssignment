import { useEffect, useState } from "react";
import {Navigate, useNavigate} from "react-router";
import { checkUserIs } from "../../api/services";

const ProtectedRoute = ({element, role}) => {
    
    let [itemToShow, setItem] = useState(null);
    
    const navigate = useNavigate();
    useEffect(() =>  {
        checkUserIs(role).then(result => {
            if (result)
                setItem(element)
            else {
                setItem(null)
                navigate('/signin')
            }
        });
    }, [element]);
    
    return  (
        itemToShow
    )
}


export default ProtectedRoute;