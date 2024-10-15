import { useLocation } from "react-router-dom";

function Dashboard() {
    const location = useLocation();
    const { isLogin } = location.state || { isLogin: false };
    return (
    <>
       <div className="nav_container">
        <h1>Dashboard</h1>
            {isLogin ? (
                <p>Welcome! You are logged in.</p>
            ) : (
                <p>Please log in to access the dashboard.</p>
            )}
        </div>
    </>
  );
}

export default Dashboard
