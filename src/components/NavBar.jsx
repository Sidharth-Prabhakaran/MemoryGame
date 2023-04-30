import {Link, Routes} from 'react-router-dom'
import React, { useState } from 'react';
import { Button } from 'bootstrap';
import LoginPage from './LoginPage';
import ViewCourseDetails from './ViewCourseDetails';
// import RNRestart from 'react-native-restart';
const NavBar = (props) => {
  
  // console.log(props.data[1]);



    return (<nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      {/* <Link className="navbar-brand" to="/"><img src="D:\Sem 4 - Fall 2022\3380 - Ajax and JS\pro from git\React-Firebase-lesson-58\React-Firebase-lesson-58\memory-game\public\logo192.png"/></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> */}
      
      <div className="collapse navbar-collapse" id="navbarNav">
      
        {
        props.data[0].isAuthenticated && props.data[1] ?
        
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="home">Home</Link>
          </li>
          
          <li className="nav-item">
            <Link className="nav-link" to="game" >Game</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="course">Add Course Details</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="viewCourse">View Course Details</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/" onClick={() => {
              props.data[2](false);
              props.data[3](false);
              props.data[4](false);
              // console.log(props.data[4]);
              
            }}>SignOut</Link>
          </li>
          
        </ul>
        : props.data[0].isAuthenticated ?
        <ul className="navbar-nav">
          
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="viewCourse">View Course Details</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="game" >Game</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/" onClick={() => {
              props.data[2](false);
              props.data[3](false);
              props.data[4](false);
              // console.log(props.data[4]);
              
            }}>SignOut</Link>
          </li>
          
          
          </ul>
          :
          <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          </ul>}
      
      </div>      
    </div>
  </nav> );
}
 
export default NavBar;
