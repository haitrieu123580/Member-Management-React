import React from 'react'

import {  Route, Routes } from 'react-router-dom';
import useToken from './hook/useToken';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
// import { useNavigate } from "react-router-dom";

import { useState } from 'react';
function App() {
  const [user, setUser] = useState(null)
  if (!user) {
    return (
      <div className="App min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
          <Navbar user={user} />
          <Login setUser={setUser}/>
          <Footer/>
      </div>
    )
  }
  return (
    <div className="App min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
