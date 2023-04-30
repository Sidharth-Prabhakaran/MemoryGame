import { useState, useEffect } from "react";
import axios from "axios";
import React from 'react';
const CourseDetails = () => {
    const [courseName, setCourseName] = useState("");
    const [courseCode, setCourseCode] = useState("");
    const [semester, setSemester] = useState("");
    const [credits, setCredits] = useState("");
    const [passed, setPassed] = useState("");
    const [grade, setGrade] = useState("");
    
    const submit=(e)=>{
        e.preventDefault();
        const onAdd = () => {
            const url = `http://localhost:5000/api/bookinfo`;
            const {data} = axios.post(url, {
                courseName,
                courseCode,
                semester,
                credits,
                passed,
                grade
    });
    // console.log(data)
        };
        onAdd();
        setCourseName("");
        setCourseCode("");
        setSemester("");
        setCredits("");
        setPassed("");
        setGrade("");
                   
        }
        
    
    
    
    
      return (
        <div>
          <h1>Enter Course details </h1>
          <form onSubmit={submit}>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label" htmlFor="CourseName">Course Name</label>
              <input
                type="text"
                className="col-sm-8"
                id="courseName"
                placeholder="Enter Course Name"
                value={courseName}
                onChange = {event=>setCourseName(event.target.value)}
              />
            </div><br/> 
            <div className="form-group row">
              <label className="col-sm-2 col-form-label" htmlFor="CourseCode">Course Code</label>
              <input
                type="text"
                className="col-sm-8"
                id="courseCode"
                placeholder="Enter Course Code"
                value={courseCode}
                onChange = {event=>setCourseCode(event.target.value)}
              />
            </div><br/> 
            <div className="form-group row">
              <label className="col-sm-2 col-form-label" htmlFor="semester">Semester </label>
              <input
                type="text"
                className="col-sm-8"
                id="semester"
                placeholder="Enter semester"
                value={semester}
                onChange = {event=>setSemester(event.target.value)}
              />
            </div><br/> 
            <div className="form-group row">
              <label className="col-sm-2 col-form-label" htmlFor="credits">Credits </label>
              <input
                type="text"
                className="col-sm-8"
                id="credits"
                placeholder="Enter Credits"
                value={credits}
                onChange = {event=>setCredits(event.target.value)}
              />
            </div><br/> 
            {/* <div className="form-group row">
              <label className="col-sm-2 col-form-label" htmlFor="passed">Pass / Fail </label>
              <input
                type="boolean"
                className="col-sm-8"
                id="passed"
                placeholder="Enter p/f"
                value={passed}
                onChange = {event=>setPassed(event.target.value)}
              />
              
              </div><br/>  */}
              <div className="form-group row">
              <label className="col-sm-2 col-form-label" htmlFor="grade">Grade Attained :</label>
              <input
                type="text"
                className="col-sm-8"
                id="grade"
                placeholder="Enter grade"
                value={grade}
                onChange = {event=>setGrade(event.target.value)}
              />
            </div> <br></br>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" onChange={event=>setPassed(true)}/>
      <label className="form-check-label" htmlFor="inlineRadio1">Pass</label>
    </div>
    <div className="form-check form-check-inline">
      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" onChange={event=>setPassed(false)}/>
      <label className="form-check-label" htmlFor="inlineRadio2">Fail</label>
      </div><br/><br/>
              
            
            <button type="submit" className="btn btn-primary">Add Course</button>
          </form>
        </div>
      );
    }
      
export default CourseDetails;