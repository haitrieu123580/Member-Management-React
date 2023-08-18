import React from 'react'

import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import Users from './components/Dashboard/Users';
import { AuthProvider } from './context/Auth';
import { useState } from 'react';
// function App() {
//   const [user, setUser] = useState(null)
//   if (!user) {
//     return (
//       <div className="App min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
//           <Navbar user={user} />
//           <Login setUser={setUser}/>
//           <Footer/>
//       </div>
//     )
//   }
//   return (
//     <div className="App min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
//       console.log(usersData)
//         <Navbar user={user} />
//         <Sidebar user={user}/>
//         <Routes>
//           <Route path="/home" element={<Home user={user}/>} />
//           <Route path="/login" element={<Login setUser={setUser}/>} />
//           <Route path="/dashboard" element={<Users user={user}/>} />
//         </Routes>
//         <Footer/>
//     </div>
//   );
// }
const App = () => {
  return (
    <AuthProvider>
      <div className="App min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Users />} />
        </Routes>
        <Footer/>
      </div>
    </AuthProvider>
  );
};

export default App;
