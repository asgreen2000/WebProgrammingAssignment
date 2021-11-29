
import "./MenuItem.css";

const MenuItem = ({product}) => {




    return <div className='row m-0 p-0 bg-white menu-item'>
    <div className = 'col-12'>
        <figure className="view overlay rounded z-depth-1 main-img">
            <img src="https://cdn.tgdd.vn/Products/Images/42/236187/oppo-reno6-pro-5g-xanh-duong-1.jpg"
            className="img-fluid z-depth-1" alt=""/>           
        </figure>
    </div>
    <div className='col-12 text-center'>
        <h5>fdf</h5>
        {/* <p className="mb-2 text-muted text-uppercase small">{product.type}</p> */}
        <p><span className="mr-1"><strong>$12.99</strong></span></p>
        <p className="pt-1 text-left"></p>
        <button className='btn btn-cart w-100 mb-2'>ADD TO CART</button>
    </div>
</div>
}

export default MenuItem;