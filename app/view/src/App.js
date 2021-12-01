import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductProvider from "./context/ProductManagement";
import adminRoutes from './pages/admin/AdminRoutes';
import MainRoutes from './pages/main/MainRoutes';
import Homepage from "./pages/news/homepage/Homepage";
import Single from "./pages/news/single/Single";

function App() {
  
  return (
    <ProductProvider>
      <BrowserRouter>
        <Routes>
          <Route path='news' element={<Homepage />} />
          <Route path='news/post/1' element={<Single />} />

          <Route path='admin'>
            {
              adminRoutes.map(route => {
                return <Route path={route.path} element={
                  route.component
                } />
              })
            }
          </Route>

          <Route path=''>
            {
              MainRoutes.map(route => {

                return <Route path={route.path} element={
                  route.component
                } />
              })
            }
          </Route>
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  )
}

export default App;
