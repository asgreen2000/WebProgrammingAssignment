import axios from "axios";

// const url =http://localhost/controller/product/read.php
const url = 'http://localhost/controller/';

const requireProductList = callback =>{
    
    fetch(url + 'product/read.php')
      .then(res=>
        // const data = res.data;
        // console.log(data);
        // callback(data);
       res.json())
      .then(data => {
        console.log(data)
        callback(data)
      })
      .catch(error => console.log(error));
};

export {
  requireProductList, 
  
};