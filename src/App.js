import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import bannerimg from './banner.jpg'; 
import RobotList from './RobotList';
import { FormattedMessage } from "react-intl";


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const validUsername = 'admin';
    const validPassword = 'pass';

    if (username === validUsername && password === validPassword) {
      navigate('/home');
    } else {
      setError('Error de autenticación. Revise sus credenciales');
    }
  };
//si
  return (
    <div style={{ textAlign: 'center', marginTop: '10px' }}>
      <h1><FormattedMessage id= "Title" /></h1>
      <img 
        src= {bannerimg }
        alt="Banner" 
        style={{ width: '75%', height: '10%' }}
      />
      <h2><FormattedMessage id= "LogIn" /></h2>

      <div>
        <p style={{fontWeight: 'bold' }} ><FormattedMessage id= "Username" />:</p>
        <input 

          type="text" 
          placeholder="a.acosta" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ display: 'block', margin: '10px auto', backgroundColor: '#DBD7D2', width:'35%', height:'25px'}}
        />
        <p  style={{fontWeight: 'bold' }} ><FormattedMessage id= "Password" />:</p>
        <input 
          type="password" 
          placeholder="******" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ display: 'block', margin: '10px auto' , backgroundColor:'#DBD7D2',width:'35%', height:'25px'}}
        />
      </div>
      {error && <p style={{ color: 'red',fontWeight: 'bold' }}>{error} </p>}
      <div>
        <button 
          onClick={handleLogin} 
          style={{ backgroundColor: 'blue', color: 'white', marginRight: '80px' , width:'15%'}}>
          Ingresar
        </button>
        <button 
          onClick={() => navigate('/')} 
          style={{ backgroundColor: 'red', color: 'white' , width:'15%'}}>
          Cancelar
        </button>
      </div>
      <footer style={{ marginTop: '20px' }}>
        <p>Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers</p>
      </footer>
    </div>
  );
}


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<RobotList />} />
      </Routes>
    </Router>
  );
}

export default App;

