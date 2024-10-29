import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '@pages/auth/Login';
import Dashboard from '@pages/dashboard/Dashboard';
import { Navbar } from '@components/navbar/Navbar';
import { List } from "@pages/results/List"

const AppRoutes = () => {

  return (
    <BrowserRouter> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/result' element={<List/>}/>      
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
