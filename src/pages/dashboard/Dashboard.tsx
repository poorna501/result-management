import useAuthRedirect from "@common/useAuthRedirect"

function Dashboard() {
    const  isLogin  = useAuthRedirect()
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
