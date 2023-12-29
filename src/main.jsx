import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../src/Components/App';
import Login from './Components/Log-in';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode>
      <Routes>
       <Route path='/login' element={<Login/>}></Route>
       <Route  path='/dashboard' element={<App/>}></Route>
       <Route index element={<Login/>}></Route>
      </Routes>
    </React.StrictMode>
  </Router>,
);
