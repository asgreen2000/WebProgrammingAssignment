import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductProvider from "./context/ProductManagement";
import Login from './pages/common/Login';
import adminRoutes from './pages/admin/AdminRoutes';
import ProtectedRoute from './pages/common/ProtectedRoute';
import MainRoutes from './pages/main/MainRoutes';
import Homepage from './pages/news/homepage/Homepage';
import SinglePost from './components/news/singlePost/SinglePost';

function App() {
  return (
    <ProductProvider>
      <BrowserRouter>

        <Routes>
          <Route path='login' element={<Login />} />

          <Route path='news' element={<Homepage />} />
          <Route path='news/post/1' element={<SinglePost />} />

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