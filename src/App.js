import React, { useEffect, useState } from "react";
import logo from "../src/Components/style/Images/logo.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Templates from "../src/Components/Templates";
import Signup from "../src/Components/Signup";
import Login from "../src/Components/Login";
import Home from "../src/Components/Home";
import Contact from "./Components/Contact";
import Container from "react-bootstrap/Container";
import UserPortal from "./pages/userPortal";
import API from "./utils/API";

function Navbar() {
  const[loggedin, setLoggedin]=useState(
    "false"
  )
//   useEffect(()=>{
//     async function getFakeUser(){
//      const fakeuser =  await API.getFakeUser();
//      setUserProfile({...userProfile,name:fakeuser.name})
//     }
//     getFakeUser()

// },[loggedin])

  useEffect( ()=>{
    async function getId(){
       
     var data= await API.getUserID();
     console.log(data);
    if(data.data.username === null||!data||data.data.username==="nobody"){
     console.log("loggedon..not")
     setLoggedin("false")}
    else{
     console.log(data.username)
     console.log("loggedin");
     setLoggedin("true")
    }
    }
    getId();
    }
)

const logOut = 
function(){
  API.logOut();
  console.log("logout");
//   event.preventDefault();
//   event.stopPropagation();

// async function logingOut(){

//   var done = await(API.logOut)
//   if(done){console.log("loggedout");
//   setLoggedin("false")}
  
}



  


  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("nav").style.top = "0";
    } else {
      document.getElementById("nav").style.top = "-250px";
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <Router>
      <Container fluid className="navbar">
        <ul id="nav">
          
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/templates">View Templates</Link>
          </li>
          <img src={logo} className="logoImg" alt="Logo" />
          <li className={"margin "+(loggedin ===  "false" ? "visible":"invisible")}>
            <Login />
          </li>
          <li className={"margin "+(loggedin === "false"? "visible":"invisible")}>
            <Signup />
          </li>
          <li className={"margin "+(loggedin=== "false" ? "invisible":"visibleLi")}>
            <a onClick={logOut}>Log Out</a>
          </li>
          <li className={"margin "+(loggedin === "false" ? "invisible":"visible")}>
            <Link to="/userPortal">User Portal</Link>
          </li>
          <li className="margin">
            <Link to="/contact">Contact Us</Link>
          </li>
          
          
        </ul>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/templates">
            <Templates />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/userPortal">
            <UserPortal />
          </Route>
         
        </Switch>
      </Container>
    </Router>
  );
}

export default Navbar;
