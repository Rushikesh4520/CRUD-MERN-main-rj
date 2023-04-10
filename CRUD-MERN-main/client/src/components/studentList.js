import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const StudentList =()=>{
    const [students,setStudents] = useState([]);
    useEffect(()=>{
        getStudents();
    },[]);

    const getStudents = async ()=>{
        let result = await fetch('http://localhost:8080/');
        result = await result.json();
        setStudents(result);
    }

    // console.warn(students);

    
    const deleteStudent = async (id)=>{
        let result = await fetch(`http://localhost:8080/student/${id}`,{
            method : "Delete"
        });
        console.log(result);
        result = await result.json();
        console.log(result);
        if(result){
            getStudents();
        }
    }

    return(
        <div className='student-list'>
            <h3>Staff Data</h3>
            <ul>
                <li>S.No.</li>
                <li>Name</li>
                <li>POST</li>
                <li>Phone Number</li>
                <li>email</li>
                <li>Operation</li>
            </ul>
            {
                students.map((item,index)=>
                    <ul key={item._id}>
                        <li>{index+1}</li>
                        <li>{item.name}</li>
                        <li>{item.userType}</li>
                        <li>{item.phoneNumber}</li>
                        <li>{item.email}</li>
                        <li>
                            <button onClick={()=>deleteStudent(item._id)}>Delete</button>
                            <Link to={"/student/"+item._id}>Update</Link>
                        </li>
                    </ul>
                )
            }
        </div>
    )
}

export default StudentList;


// compass start kar