
import App from '../App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';

import Home from './Home';
import NavBar from './NavBar';
import UpdateCourse from './updateCourse';
import LoginPage from './LoginPage';
import CourseDetails from './CourseDetails';
import ViewCourseDetails from './ViewCourseDetails';

const CustomRoutes = () => {

    const [auth, setAuth] = useState({isAuthenticated: false});
    const [isAdmin, setIsAdmin] = useState(false);
    const [issubmit, setIsSubmitted] = useState(false);

    const updateAuth = (value) => {
        // console.log({value});
        setAuth({isAuthenticated: value});

    }
    const updateAdmin = (value) => {
        // console.log({value});
        setIsAdmin(value);
    }
    const updateSubmit = (value) => {
        // console.log("is submit is " + issubmit);   
        setIsSubmitted(value);
    }

    return (        
    <Router>
    <NavBar data={[auth,isAdmin,updateAuth,updateAdmin,updateSubmit]}/>
    <Routes>
    <Route exact path="/" element={<LoginPage data={[updateAuth,updateAdmin,issubmit]}/>} />
    <Route path="/home" element={<Home />} />
    <Route path="/course" element={<CourseDetails  />} />
    <Route path="/viewCourse" element={<ViewCourseDetails data={isAdmin}/>} />
    <Route path="/game" element={<App />} />
    <Route path="/updateCourse/:id" element={<UpdateCourse/>} />
    <Route path="*" element={<h1>404</h1>} />
    </Routes>
    </Router>    
);
};

export default CustomRoutes;