import './EditProduct.css'
import React from 'react';
import ReactDOM from 'react-dom';

const EditProduct =({ isShowing, hide,handleInputChange,handleEditChange,product }) => isShowing ? ReactDOM.createPortal(

    <React.Fragment>
     <div id="modal-edit-product">
            <div className="modal-content">
                <div className="modal-header">
                    <h5>Edit Product</h5>
                    <button type="button" className="close" onClick={hide} >X</button>
                </div>
                <div className="modal-body">
                    <label className="mt-2">Name:</label>
                    <input type="text" className="form-control" defaultValue={product.pName} name='product_name' onChange={handleInputChange}/>
                    <div className="product-type mt-2" >
                    <p >Type:</p>
            

                    <input type="radio" id="drink" name="product_type" value="Phụ kiện"  defaultChecked={product.type==='Phụ kiện'}  onChange={handleInputChange}/>
                    <label htmlFor="Drink">Phụ kiện</label>

                    <input type ="radio" id="fastfood" name="product_type" value="Laptop" defaultChecked={product.type==='Laptop'} onChange={handleInputChange}/>
                    <label htmlFor="FastFood">Laptop</label>

                    <input type ="radio" id="sweets" name="product_type" value="Desktop" defaultChecked={product.type==='Desktop'}onChange={handleInputChange}/>
                    <label htmlFor="Sweets">Desktop</label>
                    
                    
                    </div>
                    <label className="mt-2">Image:</label>
                    <input type="text" className="form-control" defaultValue={product.src} name='image' onChange={handleInputChange}/>



                    <label className="mt-2">Price:</label>
                    <input type ="text" className="form-control" defaultValue={product.price} name="price" onChange={handleInputChange}/>
                   
                    <label className="mt-2">InStock:</label>
                    <input type ="text" className="form-control" defaultValue={product.quantity} name="quantity" onChange={handleInputChange} />
                    <label className="mt-2">Description:</label>
                    <textarea rows="3" type ="text-area" className="form-control" name="product_description" defaultValue={product.description} onChange={handleInputChange}/>

                    </div>
                    <div className="modal-footer">
                        <button onClick={()=>handleEditChange(product.id)}>Save change</button>
                    </div>
                </div>
            </div>
    </React.Fragment>, document.body
  ) : null;

  export default EditProduct;