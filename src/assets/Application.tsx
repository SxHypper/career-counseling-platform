import React, { useState,useEffect } from "react";



function Application(){
const [dark, setdark]=useState(false);
const [onload]=useState(0);

useEffect(()=>{
console.log("this is loaded")
},[onload]);
  useEffect(() => {
    console.log("App loaded!");
  }, []); // empty [] means run only once


function togledarkmode(){
    setdark(!dark);
}
// let colors= document.body.innerHTML;
    return (
       
        <div 
        style={{
            background : dark? "#000" : "#ffff" ,
            color : dark ? "#ffff" : "#0000" ,
            minHeight : "50vh"
        }}
        >  
        <h1  style={{
          background: dark ? "#333" : "#fff",
          color: dark ? "#fff" : "#000",
          border: "1px solid",
          padding: "5px",
        }} >This is my Application </h1>

        <label htmlFor="">Name</label>
        <input type="text" placeholder="Name"/ >
        <button onClick= {togledarkmode}> {dark ? "set light mode": "set dark mode "}</button>
        </div>
    )
}


export default Application;