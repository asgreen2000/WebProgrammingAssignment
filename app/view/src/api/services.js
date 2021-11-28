import axios from "axios";

// const url =http://localhost/controller/product/read.php
const url = 'http://localhost/assi/app/controller/';

const requireProductList = callback =>{
    
    axios.get(url + 'product/read.php')
      .then(res => {
        const data = res.data;
        console.log(data);
        callback(data);
      })
      .catch(error => console.log(error));
};

export {
  requireProductList, 
  
};