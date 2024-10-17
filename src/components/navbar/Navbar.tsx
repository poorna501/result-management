// import React, { useState } from "react";
import "../../assets/css/Navbar.css";
import { useNavigate } from "react-router-dom";
import useAuthRedirect from "@common/useAuthRedirect"


const Menu = [
    { name: "Dashboard", path: "/dashboard", icon: "icon-dashboard", },
    {name: "Results", path: "/addResults",icon: "icon-products"},
    {name: "Students", path: "/dashboard",icon: "icon-cms"},
    {name: "Log out", path: "/logout",icon: "icon-logout"},
  ];

export const Navbar = () => {    
    let showMenu = JSON.parse(localStorage.getItem("showMenu")) || false;
    const navigate = useNavigate();
    const closeMenuOnMobile = (path: string) => {
        if(path === '/logout') {
            localStorage.setItem("showMenu", "false")
            navigate('/')
        } else {
            navigate(path);
        }
    };
  return (
    <>
    {showMenu ? (
        <aside className="sidenav">
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
