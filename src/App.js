import React from 'react'

import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import Users from './components/Dashboard/Users';
import { AuthProvider } from './context/Auth';
import Register from './pages/register/Register';
import ForgotPassword from './pages/resetPassword/ForgotPassword';
import ResetPassword from './components/forgotPassword/ResetPassword';
import Profile from './pages/profile/Profile';
const App = () => {
  return (
    <AuthProvider>
      <div className="App min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <Navbar />
        <Sidebar/>
        {/* <Profile/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Users />} />
          <Route path='/register' element={<Register/>}/>
          <Route path='/forgot-password' element={<ForgotPassword/>}/>
          <Route path='/reset-password' element={<ResetPassword/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
        <Footer/>
      </div>
    </AuthProvider>
  );
};

export default App;
