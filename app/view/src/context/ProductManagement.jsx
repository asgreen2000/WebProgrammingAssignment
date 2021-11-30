import {useState, createContext, useEffect} from "react";
import {
    requireProductList,
    requireNewsList
} 
from '../api/services';

export const ProductManagement = createContext();


const FoodProvider = ({children}) => {

    const [productList, setProductList] = useState([]);
    const [newsList, setNewsList] = useState([]);
    
  
    useEffect(() =>{
        requireProductList(setProductList);
        requireNewsList(setNewsList);

    }, []);


    const data = {
        setProductList,
        productList,
        newsList,
        setNewsList

    };

    return (
        <ProductManagement.Provider value={data}>
            {children}
        </ProductManagement.Provider>
    )
}

export default FoodProvider;