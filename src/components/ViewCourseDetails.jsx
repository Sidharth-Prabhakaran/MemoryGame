import { useState, useEffect } from "react";
import axios from "axios";
import React from 'react';
import {FaHeart, FaTrash, FaEdit,FaSadCry,FaSmile} from 'react-icons/fa'
import {Link} from 'react-router-dom'
const ViewCourseDetails = (isAdmin) => {
    const [books, setBooks] = useState([]);
    // console.log(isAdmin.data + "isadmin");

   let  onDelete = (id) => {
        const url = `http://localhost:5000/api/bookinfo/${id}`;
        axios.delete(url).then((res) => {
          // console.log(res.data);
          const newBooks = books.filter((book) => book._id !== id);
          setBooks(newBooks);
        });
      };
  useEffect(() => {
    //get request
    const url = `http://localhost:5000/api/bookinfo`;
    axios
      .get(url)
      .then((res) => {
        // console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.log("ERROR: ", err));
  }, []);

    return ( <div>
        <h1>My Course History</h1>
        <table className="table">
<thead>
    <tr>
        <td>Course Name</td>
        <td>Course Code </td>
        <td>Semester</td>
        <td>Credits</td>
        <td>Grade</td>
        <td>Passed</td>
        <td colSpan={2}>Action(s)</td>
      </tr>
</thead>
<tbody>
    {books.map(book=>(
    <tr key={book._id}>
        <td>{book.courseName}</td>
        <td>{book.courseCode}</td>
        <td>{book.semester}</td>
        <td>{book.credits}</td>
        <td>{book.grade}</td>
        <td>{book.passed? <FaSmile color="green"/>:<FaSadCry color="red"/>}</td>
        <td>{isAdmin.data ? <Link to={`/updateCourse/${book._id}`}><FaEdit/></Link>: <></>}</td>
        <td>{isAdmin.data ?<FaTrash onClick= {() => onDelete(book._id)}/>:<></>}</td>
        
    </tr> 
    ))}
</tbody>
        </table>
    </div> );
}
export default ViewCourseDetails;