import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuthRedirect = () => {
    const navigate = useNavigate();
    const isLogin = JSON.parse(localStorage.getItem("showMenu")) || false;

    useEffect(() => {
        if (!isLogin) {
            navigate('/');
        }
    }, [isLogin, navigate]);

    return isLogin;
};

export default useAuthRedirect;