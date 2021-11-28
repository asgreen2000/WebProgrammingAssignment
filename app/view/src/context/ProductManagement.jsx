import {useState, createContext, useEffect} from "react";
import {
    requireProductList
} 
from '../api/services';

export const ProductManagement = createContext();


const FoodProvider = ({children}) => {

    const [productList, setProductList] = useState([]);
  
    useEffect(() =>{
        requireProductList(setProductList);

    }, []);


    const data = {
        setProductList,
        productList,

    };

    return (
        <ProductManagement.Provider value={data}>
            {children}
        </ProductManagement.Provider>
    )
}

export default FoodProvider;