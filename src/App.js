import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import bannerimg from './banner.jpg'; 
import RobotList from './RobotList';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const validUsername = 'usuario';
    const validPassword = 'contraseña';

    if (username === validUsername && password === validPassword) {
      navigate('/home');
    } else {
      setError('Error de autenticación. Revise sus credenciales');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '10px' }}>
      <h1>Adopta un robot con RobotLovers!</h1>
      <img 
        src= {bannerimg }
        alt="Banner" 
        style={{ width: '75%', height: '10%' }}
      />
      <h2>Inicio de Sesión</h2>
      <p> Elemento visto solo en modo desarrollo, el usuario y el password son: 'usuario' y 'contraseña'</p>
      <div>
        <p>Nombre de usuario:</p>
        <input 
          type="text" 
          placeholder="" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ display: 'block', margin: '10px auto' }}
        />
        <p  style={{textAlign: 'center'}} >Contraseña: </p>
        <input 
          type="password" 
          placeholder="" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ display: 'block', margin: '10px auto' }}
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <button 
          onClick={handleLogin} 
          style={{ backgroundColor: 'blue', color: 'white', marginRight: '10px' }}>
          Ingresar
        </button>
        <button 
          onClick={() => navigate('/')} 
          style={{ backgroundColor: 'red', color: 'white' }}>
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

