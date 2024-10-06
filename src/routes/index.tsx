import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Login  from '@pages/auth/Login';
import Dashboard from '@pages/dashboard/Dashboard';
import AddResults from '@pages/student/AddResults'
import { Navbar }  from '@components/navbar/Navbar';
import React, { useState } from 'react';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route path="/" element={<Login showMenu={false}/>} />
        <Route path="/login" element={<Login showMenu={false}/>} />
        {/* <Route path="/Navbar" element={<Navbar showMenu={false} setShowMenu = {false} />} /> */}
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/addResults" element={<AddResults />} /> 
      </Route>
    </>
  )
);
const AppRoutes = () => <RouterProvider router={router} />;

export {
  router,
  AppRoutes
};
