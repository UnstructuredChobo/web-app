import React from "react";
import "./Sidebar.css";
import "https://unpkg.com/boxicons@2.1.2/dist/boxicons.js";

function Sidebar(){
    return(
        <div className = "sidebar">
            
            <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'></link>
            <div className = "menu">
            
                <li className = "search-box">
                    <i class='bx bx-search'></i>
                    <input type="text" placeholder="Search for"></input>
                </li>
                <li className = "menu-link">
                    <span>Dashboard</span>
                </li>
                <li className = "menu-link">
                    <span>Dashboard</span>
                </li>
                <li className = "menu-link">
                    <span>Dashboard</span>
                </li>
                <li className = "menu-link">
                    <span>Dashboard</span>
                </li>
            </div>

        </div>
    );
}

export default Sidebar;