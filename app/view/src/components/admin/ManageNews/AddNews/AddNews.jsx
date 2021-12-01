import './AddNews.css'
import React from 'react';
import ReactDOM from 'react-dom';

const AddProduct =({ isShowing, hide,callB,handleInputChange }) => isShowing ? ReactDOM.createPortal(

    <React.Fragment>
     <div id="modal-add-product">
            <div className="modal-content" >
                <div className="modal-header">
                    <h5>Add News</h5>
                    <button type="button" className="close" onClick={hide}>X</button>
                </div>
                <div className="modal-body">
                    <label className="mt-2">Title:</label>
                    <input type="text" className="form-control"  name='title' onChange={handleInputChange}/>

                    
                    <label className="mt-2">Subject:</label>
                    <input type="text" className="form-control"   name='subject' onChange={handleInputChange}/>
                    <label className="mt-2">URL image:</label>
                    <input type="text" className="form-control"    name='image' onChange={handleInputChange}/>
                    <label className="mt-2">Post Time:</label>
                    <input type="date" className="form-control"    name='postTime' onChange={handleInputChange}/>

                    <label className="mt-2">Content:</label>
                    <textarea type ="text-area" rows='2' className="form-control"  name="content" onChange={handleInputChange}/>

                </div>
                    <div className="modal-footer">
                        <button  onClick={callB}>ADD</button>
                    </div>
                </div>
            </div>
    </React.Fragment>, document.body
  ) : null;

  export default AddProduct;