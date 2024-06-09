import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';
import { BrowserRouter as Router,Routes, Route, Switch } from 'react-router-dom';
import Login from "./components/login";
import SignUp from "./components/register";
import Profile from "./components/profile";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

function App() {
  return (
    <Router>
      <div className="App">
      <ToastContainer /> 
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/login" element ={<Login/>}/>
              <Route path="/register" element={<SignUp/>}/>
              <Route path="/profile" element={<Profile/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
