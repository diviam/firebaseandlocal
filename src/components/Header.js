import React,{useState,useEffect} from 'react';
import {Link,useLocation} from 'react-router-dom';
import "./Header.css";

export const Header = () => {
    const[tab,settab] = useState("Home");
    const location = useLocation();
    useEffect(() => {
        if(location.pathname === "/"){
            settab("Home")
        }
        else if(location.pathname ==="/add"){
            settab("AddContact")
        }
        else if(location.pathname ==="/About"){
            settab("About")
        }
    })
  return (
    <div className='header'>
     <p className='logo'> Data record App </p>
     <div className="header-right">
         <Link to="/">
             <p className={`${tab==="Home" ? "active" : ""}`} onClick={()=>settab("Home")}>Home</p>
         </Link>
         <Link to="/add">
             <p className={`${tab==="AddContact" ? "active" : ""}`} onClick={()=>settab("AddContact")}>Add Contact</p>
         </Link>
         <Link to="/About">
             <p className={`${tab==="About" ? "active" : ""}`} onClick={()=>settab("About")}>About</p>
         </Link></div>
    </div>
  )
}
