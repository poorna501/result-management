import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '@pages/auth/Login';
import Dashboard from '@pages/dashboard/Dashboard';
import AddResults from '@pages/student/AddResults';
import { Navbar } from '@components/navbar/Navbar';

const AppRoutes = () => {

  return (
    <BrowserRouter> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addResults" element={<AddResults />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
