import { useContext } from "react";
import MenuItem from "../../../components/main/Home/MenuItem";
import { ProductManagement } from "../../../context/ProductManagement";

const Menu =  props => {

    const { productList, setProductList } = useContext(ProductManagement);
    
    const product = [1, ,2, 4, 5, 6 , 7];

    return <div className='row p-0 m-0'>
        
        
            {
                productList.map(item => <div className='col-12 col-sm-6 col-xl-4 pb-5'>
                    <MenuItem product = {item}/>
                </div>
                )
            }
            {
                productList.map(item => <div className='col-12 col-sm-6 col-xl-4 pb-5'>
                    <MenuItem product = {item}/>
                </div>
                )
            }
        
    </div>
}


export default Menu;