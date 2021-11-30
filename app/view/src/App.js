import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductProvider from "./context/ProductManagement";
import Login from './pages/common/Login';
import adminRoutes from './pages/admin/AdminRoutes';
import MainRoutes from './pages/main/MainRoutes';

function App() {
  
  return (
    <ProductProvider>
    <BrowserRouter>

      <Routes>
        <Route path='login' element={<Login />}/>
      
        <Route path='admin'>
            
          { 
            
            adminRoutes.map(route => {
              
              return <Route path={route.path} element={
                route.component
              }/>
            })
          }
         
        </Route>
        
        
        <Route path=''>
          {
            MainRoutes.map(route => {
              
              return <Route path={route.path} element={
                route.component
              }/>
            })
          }
        </Route>
        
      
      </Routes>
     
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;
