import './AddProduct.css'
import React from 'react';
import ReactDOM from 'react-dom';

const AddProduct =({ isShowing, hide,callB,handleInputChange }) => isShowing ? ReactDOM.createPortal(

    <React.Fragment>
     <div id="modal-add-product">
            <div className="modal-content" >
                <div className="modal-header">
                    <h5>Add Product</h5>
                    <button type="button" className="close" onClick={hide}>X</button>
                </div>
                <div className="modal-body">
                    <label className="mt-2">Name:</label>
                    <input type="text" className="form-control" placeholder="Product Name" name='pName' onChange={handleInputChange}/>

                    <div className="product-type mt-2" >
                    <p >Type:</p>
                    <input type="radio" id="Laptop" name="type" value="Laptop" onChange={handleInputChange}/>
                    <label htmlFor="Laptop">Laptop</label>

                    <input type ="radio" id="Desktop" name="type" value="Desktop" onChange={handleInputChange}/>
                    <label htmlFor="Desktop">Desktop</label>

                    <input type ="radio" id="Accessory" name="type" value="Phụ kiện" onChange={handleInputChange}/>
                    <label htmlFor="Accessory">Phụ kiện</label>                    
                    </div>

                    <label className="mt-2">Image:</label>
                    <input type="text" className="form-control" placeholder="Product URL Image" name='src' onChange={handleInputChange}/>

                    <label className="mt-2">Image Detail:</label>
                    <input type="text" className="form-control" placeholder="Product URL Image Detail" name='srcDetail' onChange={handleInputChange}/>

                    <label className="mt-2">Price:</label>
                    <input type ="text" className="form-control" placeholder="Product Price" name="price" onChange={handleInputChange}/>

                    <label className="mt-2">Quantity:</label>
                    <input type ="text" className="form-control" placeholder="Product Quantity" name="quantity" onChange={handleInputChange} />
                    <label className="mt-2">Description:</label>
                    <input rows="3" type ="text-area" className="form-control" name="description" onChange={handleInputChange}/>
                    <label className="mt-2">Alt:</label>
                    <input rows="3" type ="text" className="form-control" name="alt" onChange={handleInputChange}/>

                    </div>
                    <div className="modal-footer">
                        <button  onClick={callB}>ADD</button>
                    </div>
                </div>
            </div>
    </React.Fragment>, document.body
  ) : null;

  export default AddProduct;