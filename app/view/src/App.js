import './App.css';
import Sidebar from './components/admin/Sidebar/Sidebar';
import HomeIcon from '@mui/icons-material/Home';
import Login from './pages/common/Login';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {  

  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);
  
  useEffect(() => {

    axios.get('http://localhost/assi/app/controller/account/read_session_data.php', {withCredentials: true})
    .then(result => {

      setIsLogin(result.data.isLogin);
      setUser(result.data.user);
    });

  }, [isLogin])
  
  return (
    <BrowserRouter>
    <div className="app">
      <Routes>
        {!isLogin ? <Route element={<Login action={setIsLogin}/>} path='/'/>: null}
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
