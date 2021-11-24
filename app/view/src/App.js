import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages';
import About from './pages/about';
import Products from './pages/products';
import Teams from './pages/team';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import SignIn from './pages/signin';
  
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route  exact path='/about' element={<About/>} />
        <Route  exact path='/products' element={<Products/>} />
        <Route  exact path='/team' element={<Teams/>} />
        <Route  exact path='/blogs' element={<Blogs/>} />
        <Route  exact path='/sign-up' element={<SignUp/>} />
        <Route  exact path='/sign-in' element={<SignIn/>} />
      </Routes>
      <Footer />
    </Router>
  );
}
  
export default App;