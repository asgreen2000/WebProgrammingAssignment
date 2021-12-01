/* eslint-disable jsx-a11y/anchor-is-valid */
import './ManageProduct.css'
import { insertProduct,requireProductList,editProduct,deleteProduct } from '../../../api/services'
import { ProductManagement} from '../../../context/ProductManagement';
import React, { useContext, useEffect, useState } from 'react';
import AddProduct from "./AddProduct/AddProduct"
import EditProduct from "./EditProduct/EditProduct"
import useModal from './useModal';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { logout } from '../../../api/services';

function ManageProduct() {

    const navigate = useNavigate();

    const [data, setData] = useState({
       pName:'',
       src:'',
       srcDetail:'',
       price:'',
       quantity:'',
       description:'',
       type:'',
       alt:'',
       id:''
    })
    const [id, setId] = useState(0);
    const [open, setOpen] = useState(false);
    const [filter, setFilter] = useState('');
    const [filterSearch, setFilterSearch] = useState('');
    const [page, setPage] = useState(1);
    const { productList, setProductList } = useContext(ProductManagement);
    const { isShowing, toggle } = useModal();
    const [isShowingEditModal, setIsShowingEditModal] = useState(false);
    let num = productList ? productList.length : 0;
    let numPage = num % 10 === 0 ? num / 10 : Math.floor(num / 10) + 1;

    useEffect(() => {
        if (isShowing || isShowingEditModal) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'unset';
        }

    }, [isShowing, isShowingEditModal, productList,filterSearch]);


    const handleLogout = (event) => {

        
        const result = logout();
        console.log(result);
        if (result)
            navigate('/signin');
            event.preventDefault();
    }


    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setData({
            ...data,
            [name]: value,

        });
        // console.log(data);
    }
    const handleClickOpen = (id) => {
        setOpen(true);
        setId(id);
    };
    const handelSubmitDelete = () => {
        deleteProduct(id);
        setTimeout(() =>
        requireProductList(setProductList), 100)
        setOpen(false);
    }
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggleEdit = (_id) => {
        const product = productList.filter(item => item.id === _id)[0]
        setData({
            pName: product.pName,
            type: product.type,
            quantity: product.quantity,
            price: product.price,
            description: product.description,
            src: product.src,
            srcDetail: product.srcDetail,
            alt: product.alt,
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
        editProduct(dataEdit);
        setTimeout(() =>
        requireProductList(setProductList), 100)

    }

    const handleChangePage = (event, value) => {
        setPage(value);
    };
    const handleChange = (event) => {
        setTimeout(()=>{
            setFilter(event.target.value);
        },10)
        // console.log(filter);
    };
    const toggleEdit = () => {
        setIsShowingEditModal(!isShowingEditModal);
    }

    const callB = () => {
        toggle();
        insertProduct(data);
        setTimeout(() =>
        requireProductList(setProductList), 100)

    }
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
                    <h2>Product</h2>
                    <div onClick={toggle}><i className="far fa-plus-square"></i> <h4>Add new product</h4></div>
                </div>
                <div className="filter-value">

                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={filter}
                            onChange={handleChange}
                            label="Age"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={'All'}>All</MenuItem>
                            <MenuItem value={'Drink'}>Điện thoại</MenuItem>
                            <MenuItem value={'FastFood'}>Laptop</MenuItem>
                            <MenuItem value={'Sweets'}>Phụ kiện</MenuItem>
                            
                        </Select>
                    </FormControl>

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
                                <th scope="col">Type</th>
                                <th scope="col">Instock</th>
                                <th scope="col">Price</th>
                                <td colSpan="2"></td>
                            </tr>
                        </thead>
                        <tbody>

                            {productList.map((product, index) =>
                                (product.type === filter || filter==="" || filter === 'All') && product.pName.toLocaleLowerCase().indexOf(filterSearch.trim().toLocaleLowerCase()) !== -1 

                                && ((filter!=="" && filter !== 'All' )||filterSearch.replace(/\s/g, '')||index >= (page - 1) * 10 )
                                && ((filter!=="" && filter !== 'All' )||filterSearch.replace(/\s/g, '')||index < page * 10 )
                                
                                && 
                                <tr key={index} >
                                    <th scope="row">{index + 1}</th>
                                    <td>{product.pName}</td>
                                    <td>{product.type}</td>
                                    <td>{product.quantity}</td>
                                    <td>{product.price}</td>
                                    <td onClick={() => handleClickOpen(product.id)}><i className="far fa-trash-alt"></i></td>
                                    <td onClick={() => handleToggleEdit(product.id)}><i className="far fa-edit"></i></td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                    {((filter==="" || filter === 'All')&& filterSearch.replace(/\s/g, '') === "" )&&<Stack spacing={2} style={{ alignItems: 'center' }}>
                        <Pagination count={numPage} color="primary" page={page} onChange={handleChangePage} />
                    </Stack>}
                </div>
                <div className="footer"><p>@CoppyRight2021</p></div>
            </div>
            <AddProduct
                isShowing={isShowing}
                hide={toggle}
                callB={callB}
                handleInputChange={handleInputChange}
            />
            <EditProduct
                isShowing={isShowingEditModal}
                hide={toggleEdit}
                handleEditChange={handleEditChange}
                handleInputChange={handleInputChange}
                product={productList.filter(item => item.id === id)[0]}
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

export default ManageProduct;