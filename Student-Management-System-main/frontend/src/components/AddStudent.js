import React, { useState } from 'react';
import axios from "axios";

function AddStudent(){

    const [name,setName]=useState("");
    const [age,setAge] =useState("");
    const [gender,setGender] =useState("");

function sendData(e){

  e.preventDefault();

  const newStudent={
    name,
    age,
    gender
  }


  axios.post("http://localhost:8070/student/add",newStudent).then(()=>{
    alert("Student Added")
   
  }).catch((err)=>{
    alert(err)
  })
  
}
		


    return(
    <div className='container'>
    <form onSubmit={sendData}>
      <div className="form-group">
        <label htmlFor="name">Student Name</label>
        <input type="text" className="form-control" id="name"  placeholder="Student name" onChange={(e)=>{

          setName(e.target.value);

        }}/>
        
      </div>
      <div className="form-group">
        <label htmlFor="studentAge">Student Age</label>
        <input type="text" className="form-control" id="age" placeholder="Enter Student Age"
        onChange={(e)=>{

          setAge(e.target.value);

        }}
        />
      </div>


      <div className="form-group">
      <label htmlFor="studentGender">Student Gender</label>
        <input type="text" className="form-control" id="gender" placeholder="gender"
        onChange={(e)=>{

          setGender(e.target.value);

        }} />
        
      
      </div>


      <button type="submit" className="btn btn-primary">Submit</button>

      
    </form>
    </div>


        )
}

export default AddStudent;