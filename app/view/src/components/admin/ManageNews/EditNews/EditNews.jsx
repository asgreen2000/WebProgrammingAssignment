import './EditNews.css'
import React from 'react';
import ReactDOM from 'react-dom';

const EditProduct =({ isShowing, hide,handleInputChange,handleEditChange,product }) => isShowing ? ReactDOM.createPortal(

    <React.Fragment>
     <div id="modal-edit-product">
            <div className="modal-content">
                <div className="modal-header">
                    <h5>Edit News</h5>
                    <button type="button" className="close" onClick={hide} >X</button>
                </div>
                <div className="modal-body">
                    <label className="mt-2">Title:</label>
                    <input type="text" className="form-control" defaultValue={product.title} name='title' onChange={handleInputChange}/>

                    
                    <label className="mt-2">Subject:</label>
                    <input type="text" className="form-control" defaultValue={product.subject}  name='subject' onChange={handleInputChange}/>

                    <label className="mt-2">Post Time:</label>
                    <input type="date" className="form-control"  defaultValue={product.postTime}  name='postTime' onChange={handleInputChange}/>

                    <label className="mt-2">Content:</label>
                    <textarea type ="text-area" rows='3' className="form-control"  defaultValue={product.content}  name="content" onChange={handleInputChange}/>

                </div>
                    <div className="modal-footer">
                        <button onClick={()=>handleEditChange(product.id)}>Save change</button>
                    </div>
                </div>
            </div>
    </React.Fragment>, document.body
  ) : null;

  export default EditProduct;