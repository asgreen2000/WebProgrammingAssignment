import {useState, createContext, useEffect} from "react";
import {
    requireProductList,
    requireNewsList,
    getAccountUser
} 
from '../api/services';

export const ProductManagement = createContext();


const FoodProvider = ({children}) => {

    const [productList, setProductList] = useState([]);
    const [newsList, setNewsList] = useState([]);
    const [userList, setUserList] = useState([]);
  
    useEffect(() =>{
        requireProductList(setProductList);
        requireNewsList(setNewsList);
        getAccountUser(setUserList);
    }, []);


    const data = {
        setProductList,
        productList,
        newsList,
        setNewsList
        , userList,
        setUserList
    };

    return (
        <ProductManagement.Provider value={data}>
            {children}
        </ProductManagement.Provider>
    )
}

export default FoodProvider;