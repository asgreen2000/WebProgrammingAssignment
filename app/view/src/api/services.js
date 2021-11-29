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


const getUser = () => {

  return new Promise((resolve, reject) => {
    axios.get(url + 'account/read_session_data.php', {withCredentials: true})
    .then(result => {

      
      if (result.data.isLogin)
        resolve(result.data.user);
      else {
        resolve(null);
      }
    })
    .catch(error => {

      reject(null);
    })

  }) 
}

const checkUserIs = async (role) => {

  
  return new Promise((resolve, reject) => {

    getUser().then(user => {
      resolve( user !== null && user.role === role)
      console.log(123);
      console.log(user); 
    })
    .catch(
      error => reject(false)
    )

  });

  

}

const logout = async () => {

  const result = await axios.get(url + 'account/logout.php', {withCredentials: true})
  
 
  return result && result.data.isLogin;  
}

export {
  requireProductList,
  getUser,
  checkUserIs,
  logout
};