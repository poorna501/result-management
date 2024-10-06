import React, { useState } from "react";
import "../../assets/css/Navbar.module.css";
import {router} from "@routes/index";

const Menu = [
    { name: "Dashboard", path: "/dashboard", icon: "icon-dashboard", },
    {name: "Products", path: "/addResults",icon: "icon-products"},
    {name: "CMS", path: "/dashboard",icon: "icon-cms"},
    {name: "Log out", path: "/addResults",icon: "icon-logout"},
  ];

export const Navbar = ({showMenu, setShowMenu}) => {    
    console.log("showMenu " , showMenu);
       
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    const closeMenuOnMobile = (path: string) => {
        if(path === '/logout') {
            router.navigate('/')
        } else {
            router.navigate(path);
        }
    };
  return (
    <>
    {showMenu ? (
        <aside className="">
            <div onClick={toggleMenu} >
                <i></i> <i></i> <i></i>
            </div>
            <ul >
            { Menu.map((item, i) =>
                <li key={i}>
                <a rel="canonical" onClick={() => closeMenuOnMobile(item.path)}>
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
