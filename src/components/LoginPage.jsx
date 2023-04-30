import React, { useState } from "react";
// import NavBar from "./NavBar";
import App from './../App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import NavBar,{changeAuth} from './NavBar';
import UpdateCourse from "./updateCourse";
import CourseDetails from "./CourseDetails";
import ViewCourseDetails from "./ViewCourseDetails";
    
    const LoginPage = (props) => {
        // React States
        const [errorMessages, setErrorMessages] = useState({});
        const [isSubmitted, setIsSubmitted] = useState(props.data[2]);
        
        
      // console.log(isSubmitted + "from the login page");
        // User Login info
        const database = [
          {
            username: "admin",
            password: "admin"
          },
          {
            username: "user",
            password: "pass"
          }
        ];
      
        const errors = {
          uname: "invalid username",
          pass: "invalid password"
        };
      
        const handleSubmit = (event) => {
          //Prevent page reload
          event.preventDefault();
      
          var { uname, pass } = document.forms[0];
      
          // Find user login info
          const userData = database.find((user) => user.username === uname.value);
      
          // Compare user info
          if (userData) {
            if (userData.password !== pass.value) {
              // Invalid password
              setErrorMessages({ name: "pass", message: errors.pass });
            } else {
              setIsSubmitted(true);
              props.data[0](true);
              if(uname.value==="admin"){
                props.data[1](true);
              }
              // console.log(props.data[1](true));
            //   changeAuth();


            }
          } else {
            // Username not found
            setErrorMessages({ name: "uname", message: errors.uname });
          }
        };
      
        // Generate JSX code for error message
        const renderErrorMessage = (name) =>
          name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
          );
      
        // JSX code for login form
        const renderForm = (
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <label>Username </label>
                <input type="text" name="uname" required />
                {renderErrorMessage("uname")}
              </div>
              <div className="input-container">
                <label>Password </label>
                <input type="password" name="pass" required />
                {renderErrorMessage("pass")}
              </div>
              <div className="button-container">
                <input type="submit" />
              </div>
            </form>
          </div>
        );
      
        return (
          <div className="app">
            <div className="login-form">
              <div className="title">Sign In</div>
              {isSubmitted ? 
              <Home/> : renderForm}
            </div>
          </div>
        );
      }
 
export default LoginPage;