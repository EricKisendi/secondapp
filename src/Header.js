import React from "react";
import "./Header.css";

export default function Header(){
    return(
        <div className="Mheader">
            <img className="ImgLogo" src = "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="logo"></img>
            <h3 className="headerName">ERIC KISENDI</h3>
            <h5 className="headerDesc1">junior frontend developer</h5>
            <h5 className="headerDesc2">erickisendi18@gmail.com</h5>
        </div>
    )
}