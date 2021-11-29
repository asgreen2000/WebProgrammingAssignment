import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductProvider from "./context/ProductManagement";
// import Sidebar from "./components/admin/Sidebar";
// import routes from "./routes";
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages';
import About from './pages/about/about.page';

// import Products from './pages/products';
// import Teams from './pages/team';
// import Blogs from './pages/blogs';
// import SignUp from './pages/signup';
// import SignIn from './pages/signin';

function App() {
  console.log('1');
  return (
    <ProductProvider>
      <BrowserRouter>
        {/* <Sidebar /> */}
        <Navbar/>
        <Routes>
          {/* {[
            ...routes.map((route, index) => (
              <Route
                exact
                path={route.path}
                element={route.component}
                key={index}
              ></Route>
            )),
          ]} */}

          <Route path='/about' exact element={<About/>}>

          </Route>
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;
