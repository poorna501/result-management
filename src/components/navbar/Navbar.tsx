// import React, { useState } from "react";
import "../../assets/css/Navbar.module.css";
import { useNavigate } from "react-router-dom";

const Menu = [
    { name: "Dashboard", path: "/dashboard", icon: "icon-dashboard", },
    {name: "Products", path: "/addResults",icon: "icon-products"},
    {name: "CMS", path: "/dashboard",icon: "icon-cms"},
    {name: "Log out", path: "/logout",icon: "icon-logout"},
  ];

export const Navbar = ({showMenu, setShowMenu}) => {    
    showMenu = true
    const navigate = useNavigate();
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    const closeMenuOnMobile = (path: string) => {
        if(path === '/logout') {
            setShowMenu(false)
            navigate('/')
        } else {
            navigate(path);
        }
    };
  return (
    <>
    {showMenu ? (
        <aside >
            <div onClick={toggleMenu} >
                <i></i> <i></i> <i></i>
            </div>
            <ul >
            { Menu.map((item, i) =>
                <li key={i}>
                <a 
                    rel="canonical" onClick={() => closeMenuOnMobile(item.path)}>
                    <i className={item.icon}></i>
                    {item.name}
                </a>
                </li>
            )}
            </ul>
        </aside>) : ""}
    </>
  );
}
