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
        resolve(result.data);
      else {
        resolve(null);
      }
    })
    .catch(error => {
      reject(null);
    })

  }) 
}

const checkUserIs = (role) => {
  return new Promise((resolve, reject) => {
    getUser().then(user => {
      
      resolve(user && role == user.role)
    })
    .catch(
      error => reject(error)
    )
  });
}

const logout = async () => {

  const result = await axios.get(url + 'account/logout.php', {withCredentials: true})
  
 
  return result && result.data.isLogin;  
}

const requireNewsList = callback => {

  axios.get(url + 'News/read.php')
    .then(res => {
      const data = res.data;
      console.log(data);
      callback(data);
    }
    )
    .catch(error => console.log(error));
};
const getSingleNews = (id,callback)=>{
  axios.get(url +'News/read_single.php?id='+ id)
  .then (res=>
    callback(res.data[0])
  )
  .catch(error => console.log(error));
}
const insertNews = (News) => {

  axios.post(url + 'News/create.php',News)
    .then(res => {
      console.log("News",News);
    }
    )
    .catch(error => console.log(error));
};
const editNews =(News)=>{
  axios.put(url + 'News/update.php',News.data)
  .then(res => {
    console.log("News edit",{res});
  }
  )
  .catch(error => console.log(error));
}
const deleteNews = (id)=>{
  axios.delete(url+ 'News/delete.php?id='+ id)
  .then(res=>{
    
  })
  .catch(error => console.log(error));
}

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
    console.log(res);
    console.log("product edit",product);
  }
  )
  .catch(error => console.log(error));
}

const deleteProduct = (id)=>{
  axios.delete(url+ 'product/delete.php?id='+ id)
  .then(res=>{
    console.log(res);
  })
  .catch(error => console.log(error));
}

const createContact = (data) => {

  return new Promise((resolve, reject) => {

    axios.post(url + 'contact/create.php',data)
    .then(res => {
      resolve(res.data);
      console.log(res.data);
    }
    )
    .catch(error => reject(error));

  })
}

const sendEmail = data => {

  return new Promise((resolve, reject) => {

    axios.post(url + 'contact/send_mail.php',data)
    .then(res => {
      resolve(res.data);
      console.log(res.data);
    }
    )
    .catch(error => reject(error));

  })

}

const deleteContact = (id)=>{
  axios.delete(url+ 'contact/delete.php?id='+ id)
  .then(res=>{
    console.log(res);
  })
  .catch(error => console.log(error));
}


const requireContactList = callback => {

  axios.get(url + 'contact/read.php')
    .then(res => {
      const data = res.data;
      console.log(data);
      callback(data);
    }
    )
    .catch(error => console.log(error));
};

const getAccountUser = callback =>{
    
  axios.get(url + 'account/read_list.php')
    .then(res => {
      const data = res.data;
      callback(data);
    })
    .catch(error => console.log(error));
};

const deleteUser = (id)=>{
  axios.delete(url+ 'account/delete.php?id='+ id)
  .then(res=>{
    console.log("id delete:",id);
  })
  .catch(error => console.log(error));
}


export {
  url,
  requireProductList,
  getSingleProdcut,
  insertProduct,
  editProduct,
  deleteProduct,
  requireNewsList,
  getSingleNews,
  insertNews,
  editNews,
  deleteNews,
  checkUserIs,
  logout,
  getUser,
  createContact,
  sendEmail,
  requireContactList,
  deleteContact,
  getAccountUser,
  deleteUser
};