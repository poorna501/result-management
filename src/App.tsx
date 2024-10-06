import { AppRoutes } from '@routes/index';
import  { Navbar }  from '@components/navbar/Navbar';
import { useState } from 'react';
function App() {
  const [showMenu, setShowMenu ] = useState(false);
  return (
    <>
      <Navbar showMenu={showMenu} setShowMenu = {setShowMenu} />
      <AppRoutes/>
    </>
  );
}

export default App
