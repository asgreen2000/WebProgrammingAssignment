/* eslint-disable jsx-a11y/anchor-is-valid */
import './ManageNews.css'
import { insertNews,requireNewsList,editNews,deleteNews } from '../../../api/services'
import { ProductManagement, } from '../../../context/ProductManagement';
import React, { useContext, useEffect, useState } from 'react';
import AddNews from "./AddNews/AddNews"
import EditNews from "./EditNews/EditNews"
import useModal from './useModal';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom';
import {logout} from '../../../api/services';
import { useNavigate} from "react-router";


function ManageNews() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        title:'',
        content:'',
        subject:'',
        postTime:'',
        image:'',
       id:''
    })
    const [id, setId] = useState(0);
    const [open, setOpen] = useState(false);
    const [filterSearch, setFilterSearch] = useState('');
    const [page, setPage] = useState(1);
    const { newsList, setNewsList } = useContext(ProductManagement);
    const { isShowing, toggle } = useModal();
    const [isShowingEditModal, setIsShowingEditModal] = useState(false);
    let num = newsList ? newsList.length : 0;
    let numPage = num % 10 === 0 ? num / 10 : Math.floor(num / 10) + 1;

    

    useEffect(() => {
        if (isShowing || isShowingEditModal) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'unset';
        }

    }, [isShowing, isShowingEditModal, newsList,filterSearch]);


    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setData({
            ...data,
            [name]: value,

        });
        console.log(data);
    }
    const handleClickOpen = (id) => {
        setOpen(true);
        setId(id);
    };
    const handelSubmitDelete = () => {
        deleteNews(id);
        setTimeout(() =>
        requireNewsList(setNewsList), 100)
        setOpen(false);
    }
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggleEdit = (_id) => {
        const product = newsList.filter(item => item.id === _id)[0]
        setData({
            title: product.title,
            content: product.content,
            subject: product.subject,
            postTime: product.postTime,
            image:product.image,
            id: _id
        })
        toggleEdit();
        setId(_id);
    }
    const handleEditChange = (idEdit) => {
        const dataEdit = {
            data: data,
            id: idEdit
        }
        // console.log(dataEdit);

        toggleEdit();
        editNews(dataEdit);
        setTimeout(() =>
        requireNewsList(setNewsList), 100)

    }

    const handleChangePage = (event, value) => {
        setPage(value);
    };
    const toggleEdit = () => {
        setIsShowingEditModal(!isShowingEditModal);
    }

    const callB = () => {
        toggle();
        insertNews(data);
        setTimeout(() =>
        requireNewsList(setNewsList), 100)

    }
    const handleChangeSearch=(event)=>{
        const target = event.target;
        const value = target.value;
        setTimeout(()=>{
            setFilterSearch(value);
        },10)
    }
  
    const handleLogout = () => {
        const result = logout();
        if (result)
            navigate('/signin');
    }

    return (
        <div id="product">
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
                    <div onClick={toggle}><i className="far fa-plus-square"></i> <h4>Add new news</h4></div>
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
                                <th scope="col">Title</th>
                                <th scope="col">Content</th>
                                <th scope="col">Subject</th>
                                <th scope="col">postTime</th>
                                <td colSpan="2"></td>
                            </tr>
                        </thead>
                        <tbody>

                            {newsList.map((news, index) => {  

                                                             
                                return <tr key={index} >
                                    <th scope="row">{index + 1}</th>
                                    <td>{news.title}</td>
                                    <td>{news.content}</td>
                                    <td>{news.subject}</td>
                                    <td>{news.postTime}</td>
                                    <td onClick={() => handleClickOpen(news.id)}><i className="far fa-trash-alt"></i></td>
                                    <td onClick={() => handleToggleEdit(news.id)}><i className="far fa-edit"></i></td>
                                </tr>
                                
                            }
                            )}

                        </tbody>
                    </table>
                    {( filterSearch.replace(/\s/g, '') === "" )&&<Stack spacing={2} style={{ alignItems: 'center' }}>
                        <Pagination count={numPage} color="primary" page={page} onChange={handleChangePage} />
                    </Stack>}
                </div>
                <div className="footer"><p>@CoppyRight2021</p></div>
            </div>
            <AddNews
                isShowing={isShowing}
                hide={toggle}
                callB={callB}
                handleInputChange={handleInputChange}
            />
            <EditNews
                isShowing={isShowingEditModal}
                hide={toggleEdit}
                handleEditChange={handleEditChange}
                handleInputChange={handleInputChange}
                product={newsList.filter(item => item.id === id)[0]}
            />
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

export default ManageNews;