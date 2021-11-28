import axios from "axios";

// const url =http://localhost/controller/product/read.php
const url = 'http://localhost/controller/';

const requireProductList = callback => {

  axios.get(url + 'product/read.php')
    .then(res => {
      const data = res.data;
      console.log(data);
      callback(data);
    }
    )
    .catch(error => console.log(error));
};
const getSingleProdcut = (id,callback)=>{
  axios.get(url +'product/read_single.php?id='+ id)
  .then (res=>
    callback(res.data)
  )
  .catch(error => console.log(error));
}
const insertProduct = (product) => {

  axios.post(url + 'product/create.php',product)
    .then(res => {
      console.log(product);
    }
    )
    .catch(error => console.log(error));
};
const editProduct =(product)=>{
  axios.put(url + 'product/update.php',product.data)
  .then(res => {
    console.log("product edit",product);
  }
  )
  .catch(error => console.log(error));
}
const deleteProduct = (id)=>{
  axios.delete(url+ 'product/delete.php?id='+ id)
  .then(res=>{
    console.log("id delete:",id);
  })
  .catch(error => console.log(error));
}

export {
  requireProductList,
  getSingleProdcut,
  insertProduct,
  editProduct,
  deleteProduct
};