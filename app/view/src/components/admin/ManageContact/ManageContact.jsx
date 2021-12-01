/* eslint-disable jsx-a11y/anchor-is-valid */
import './ManageContact.css'
import { deleteProduct } from '../../../api/services'
import { ProductManagement} from '../../../context/ProductManagement';
import React, { useContext, useEffect, useState } from 'react';
import useModal from './useModal';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';

import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { logout, sendEmail, requireContactList, deleteContact} from '../../../api/services';

function ManageContact() {

    const navigate = useNavigate();
    const [contacts, setContacts] = useState([]);

    const [data, setData] = useState({
       subject: ""
       ,
       msg: ""
    })

    const [id, setId] = useState(0);
    const [open, setOpen] = useState(false);
    const [filter, setFilter] = useState('');
    const [filterSearch, setFilterSearch] = useState('');
    const [page, setPage] = useState(1);
    
    const { isShowing, toggle } = useModal();
    
    useEffect(() => {

        requireContactList(setContacts);
        if (isShowing) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'unset';
        }

    }, [isShowing,filterSearch]);


    const handleOnChange = (event) => {

        
        data[event.target.name] = event.target.value;
        setData({...data});
    }

    const handleLogout = (event) => {

        
        const result = logout();
        console.log(result);
        if (result)
            navigate('/signin');
            event.preventDefault();
    }

    const handleOnClick = (event) => {

        event.preventDefault();
        console.log(data);
        sendEmail(data).then(result => {
            alert("Success");
        }).then(err => {console.log(err)});
    }
   
    const handleClickOpen = (id) => {
        setOpen(true);
        setId(id);
    };
    const handelSubmitDelete = () => {
        deleteProduct(id);
        // setTimeout(() =>
        // requireProductList(setContacts), 100)
        // setOpen(false);
    }
    const handleClose = () => {
        setOpen(false);
    };
    
    

    const handleChangePage = (event, value) => {
        setPage(value);
    };
 
    

    const handleChangeSearch=(event)=>{
        const target = event.target;
        const value = target.value;
        setTimeout(()=>{
            setFilterSearch(value);
        },10)
    }
  
    return (
        <div id="product" className='w-100'>
            <div className="manage-product">
                <div className="header">

                    <nav className=" avatar navbar navbar-expand-lg navbar-light ">
                        <div className="container-fluid">
                            <ul className="navbar-nav">

                                <li className="nav-item dropdown dropstart ">
                                    <a
                                        className="nav-link d-flex align-items-center"
                                        href="#"
                                        id="navbarDropdownMenuLink"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <img
                                            src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                                            className="rounded-circle"
                                            height="42"
                                            alt=""
                                            loading="lazy"
                                        />
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li>
                                        <p className="dropdown-item" ><Link to='/admin/account-details'>My profile</Link></p>
                                        </li>
                                        <li>
                                        <button className="dropdown-item" onClick={handleLogout}>Logout</button>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>

                </div>
                <div className="list-activity">
                    <h2>Contact</h2>
                     <button className='btn btn-primary'
                     data-bs-toggle="modal" data-bs-target="#exampleModal"
                     >SEND EMAIL+</button>

                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">SEND EMAIL TO ALL CUSTOMER</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Subject</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Anything" 
                                name='subject' onChange={handleOnChange}
                            />
                            </div>
                            <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Content</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='msg'
                             onChange={handleOnChange}
                            ></textarea>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleOnClick}>Save changes</button>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="filter-value">

                    <div className="input-group rounded" style={{ width: '200px' }}>
                        <input type="text" className="form-control rounded" placeholder="Search" aria-label="Search"
                            aria-describedby="search-addon" onChange={handleChangeSearch}/>
                        <span className="input-group-text border-0" id="search-addon">
                            <i className="fas fa-search"></i>
                        </span>
                    </div>
                </div>
                <div className="list-product-container">
                    <table className="table table-bordered" >
                        <thead style={{position:'sticky',top:'0',overflowY:'hidden', backgroundColor:'#eee'}}>
                            <tr >
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phonenumber</th>
            
                                <td colSpan="2"></td>
                            </tr>
                        </thead>
                        <tbody>

                            {contacts.map((contact, index) =>
                            
                                <tr key={index} >
                                    <th scope="row">{index + 1}</th>
                                    <td>{contact.cName}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.phoneNumber}</td>
                                    
                                
                                    <td onClick={() => deleteContact(contact.id)}><i className="far fa-trash-alt"></i></td>
                                  
                                </tr>
                            )}

                        </tbody>
                    </table>
                    
                </div>
                <div className="footer"><p>@CoppyRight2021</p></div>
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are you want to delete?"}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handelSubmitDelete}>Agree</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default ManageContact;