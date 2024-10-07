import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '@pages/auth/Login';
import Dashboard from '@pages/dashboard/Dashboard';
import AddResults from '@pages/student/AddResults';
import { Navbar } from '@components/navbar/Navbar';

const AppRoutes = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <BrowserRouter> 
      <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
      <Routes>
        <Route path="/" element={<Login setShowMenu={setShowMenu} />} />
        <Route path="/login" element={<Login setShowMenu={setShowMenu} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addResults" element={<AddResults />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
