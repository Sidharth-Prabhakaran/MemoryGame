import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import React from 'react';
const UpdateCourse = () => {
    
    // let  books = null;
    let id = useParams().id;
    
    const url = `http://localhost:5000/api/bookinfo`;
    const [courseName, setCourseName] = useState("");
    const [courseCode, setCourseCode] = useState("");
    const [semester, setSemester] = useState("");
    const [credits, setCredits] = useState("");
    const [passed, setPassed] = useState("");
    const [grade, setGrade] = useState("");
    // const [newCourseName, setNewCourseName] = useState("");
    let once = true;
    useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        // console.log(res.data);
        const books = res.data;
        // console.log(books);
        const book = books.filter(book=>book._id===id)
        // console.log(book[0].courseCode);
      // setCourseName(book[0].courseName);
      if(once === true){
        setCourseName(book[0].courseName);
        setCourseCode(book[0].courseCode);
        setSemester(book[0].semester);
        setCredits(book[0].credits);
        setPassed(book[0].passed);
        setGrade(book[0].grade);
        once = false;
      }
      // console.log("inside axios");

      // courseCode = book[0].courseCode;
      // semester = book[0].semester;
      // credits = book[0].credits;
      // passed = book[0].passed;
      // grade = book[0].grade;
      // console.log(courseName);
      })
      .catch((err) => console.log("ERROR: ", err));
    }, []);
    //   console.log(books);

      
  
    
    
    const submit=(e)=>{
        e.preventDefault();
        const onAdd = () => {
          console.log(courseName);
            
            const {data} = axios.post(`${url}/${id}`, {
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
        }
        
    
    
    
    
      return (
        <div>
          <h1>Edit the Subject Details</h1>
          <form onSubmit={submit}>
            <div className="form-group">
              <label htmlFor="CourseName">Course Name</label>
              <input
                type="text"
                className="form-control"
                id="courseName"
                placeholder="Enter Course Name"
                defaultValue = {courseName}
                onChange = {event=>{setCourseName(event.target.value)}}
              />
            </div>
            <div className="form-group">
              <label htmlFor="CourseCode">Course Code</label>
              <input
                type="text"
                className="form-control"
                id="courseCode"
                placeholder="Enter Course Code"
                defaultValue={courseCode}
                onChange = {(event)=>setCourseCode(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="semester">Semester </label>
              <input
                type="text"
                className="form-control"
                id="semester"
                placeholder="Enter semester"
                defaultValue = {semester}
                onChange = {event=>setSemester(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="credits">Credits </label>
              <input
                type="text"
                className="form-control"
                id="credits"
                placeholder="Enter Credits"
                defaultValue={credits}
                onChange = {event=>setCredits(event.target.value)}
              />
            </div>
            {/* <div className="form-group">
              <label htmlFor="passed">Pass / Fail </label>
              <input
                type="boolean"
                className="form-control"
                id="passed"
                placeholder="Enter p/f"
                defaultValue={passed}
                onChange = {event=>setPassed(event.target.value)}
              />
              </div> */}
              <div className="form-group">
              <label htmlFor="grade">Grade Attained :</label>
              <input
                type="text"
                className="form-control"
                id="grade"
                placeholder="Enter grade"
                defaultValue={grade}
                onChange = {event=>setGrade(event.target.value)}
              /><br></br>
              <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" onChange={event=>setPassed(true)}/>
      <label className="form-check-label" htmlFor="inlineRadio1">Pass</label>
    </div>
    <div className="form-check form-check-inline">
      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" onChange={event=>setPassed(false)}/>
      <label className="form-check-label" htmlFor="inlineRadio2">Fail</label>
      </div><br/><br/>
              <button className="btn btn-warning" type="submit">Edit Subject</button>
             
            </div>
          </form>
        </div>
      );
    }
      
export default UpdateCourse;