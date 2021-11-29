import MenuItem from "../../../components/main/Home/MenuItem";


const Menu =  props => {


    const product = [1, ,2, 4, 5, 6 , 7];

    return <div className='row p-0 m-0'>
        
        
            {
                product.map(item => <div className='col-12 col-sm-6 col-xl-4 pb-5'>
                    <MenuItem />
                </div>
                )
            }
        
    </div>
}


export default Menu;