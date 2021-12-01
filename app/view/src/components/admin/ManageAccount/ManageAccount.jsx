/* eslint-disable jsx-a11y/anchor-is-valid */
import './ManageAccount.css'
import { getAccountUser,deleteUser, logout } from '../../../api/services';
import { ProductManagement, } from '../../../context/ProductManagement';
import React, { useContext, useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';



function ManageAccount() {
    const navigate = useNavigate();
    const [id, setId] = useState(0);
    const [open, setOpen] = useState(false);
    const [filterSearch, setFilterSearch] = useState('');
    const [page, setPage] = useState(1);
    const { userList, setUserList } = useContext(ProductManagement);
    let num = userList ? userList.length : 0;
    let numPage = num % 10 === 0 ? num / 10 : Math.floor(num / 10) + 1;

    useEffect(() => {


    }, [filterSearch]);
    const handleClickOpen = (id) => {
        setOpen(true);
        setId(id);
    };
    const handelSubmitDelete = () => {
        deleteUser(id);
        setTimeout(() =>
        getAccountUser(setUserList), 100)
        setOpen(false);
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
    const handleLogout = (event) => {
        event.preventDefault();
        const result = logout();
        if (result)
            navigate('/signin');
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
                    <h2>News</h2>
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
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone number</th>
                                <td colSpan="2"></td>
                            </tr>
                        </thead>
                        <tbody>

                            {userList.map((product, index) =>
                              (product.username.toLocaleLowerCase().indexOf(filterSearch.trim().toLocaleLowerCase()) !== -1 
                              ||product.name.toLocaleLowerCase().indexOf(filterSearch.trim().toLocaleLowerCase()) !== -1 
                              ||product.email.toLocaleLowerCase().indexOf(filterSearch.trim().toLocaleLowerCase()) !== -1 
                                ||product.phoneNumber.toLocaleLowerCase().indexOf(filterSearch.trim().toLocaleLowerCase()) !== -1 
                              )
                                && (filterSearch.replace(/\s/g, '')||index >= (page - 1) * 10 )
                                && (filterSearch.replace(/\s/g, '')||index < page * 10 )
                                
                                && 
                                <tr key={index} >
                                    <th scope="row">{index + 1}</th>
                                    <td>{product.name}</td>
                                    <td>{product.username}</td>
                                    <td>{product.email}</td>
                                    <td>{product.phoneNumber}</td>
                                    <td onClick={() => handleClickOpen(product.id)}><i className="far fa-trash-alt"></i></td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                    {( filterSearch.replace(/\s/g, '') === "" )&&<Stack spacing={2} style={{ alignItems: 'center' }}>
                        <Pagination count={numPage} color="primary" page={page} onChange={handleChangePage} />
                    </Stack>}
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

export default ManageAccount;