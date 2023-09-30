import React ,{useState,useEffect} from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';

let userId;


export default function AllStudents(){

    const [student,setStudents]=useState([]);


    useEffect(()=>{
        function getStudents(){
            axios.get("http://localhost:8070/student/").then((res)=>{
                setStudents(res.data);
                //console.log(res.data);
            }).catch((err)=>{
            alert(err.message);
            })
        }
        getStudents();
    },[])

    
const columns=[
    {
        name:"Student Name",
        selector:(row)=>row.name,
    },
    {
        name:"Student Age",
        selector:(row)=>row.age,
    },
    {
        name :"Student Gender",
        selector:(row)=>row.gender,
    },
    {
        name:"Update",
        cell: row=> <button type="button" onClick={()=>{userId=row._id}} class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo"> Update</button>

    },
    {
        name:"Delete",
        cell: row=> <button  type="submit" class="btn btn-primary" onClick={()=>{deleteData(row._id)}}>Delete</button>

    }
]

function deleteData(_id){

    axios.delete(`http://localhost:8070/student/delete/${_id}`).then(()=>{
      alert("Student Deleted")
    //   setTimeout(function(){
    //     window.location.reload();
    //  }, 500);

     
    }).catch((err)=>{
      alert(err)
    })
    
  }

  const [name,updateName]=useState("");
  const [age,updateAge] =useState("");
  const [gender,updateGender] =useState("");

  function updateData(userId){
        const updateStudent={
            name,
            age,
            gender
        }

            axios.put(`http://localhost:8070/student/update/${userId}`,updateStudent).then(()=>{
                alert("Student Updated")
                   setTimeout(function(){
                    window.location.reload();
                    }, 500);
            
            }).catch((err)=>{
                alert(err)
            })
        }





  
  
   
    return(
        <div className='container'>
           <DataTable 
                title="All Students" 
                columns={columns} 
                data={student}
                pagination
           />
       
       <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div class="modal-dialog" role="document">
           <div class="modal-content">
             <div class="modal-header">
               <h5 class="modal-title" id="exampleModalLabel">--Update Details--</h5>
               <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                 <span aria-hidden="true">&times;</span>
               </button>
             </div>
             <div class="modal-body">
               <form>


                 <div class="form-group">
                   <label for="recipient-name" class="col-form-label">Student Name</label>
                   <input type="text" class="form-control" id="stu_name" onChange={(e)=>{

                        updateName(e.target.value);

                        }}
                                        />
                 </div>


                 <div class="form-group">
                   <label for="message-text" class="col-form-label">Age:</label>
                   <input type="text" class="form-control" id="Stu_age" onChange={(e)=>{

                        updateAge(e.target.value);

                        }}
                   />
                 </div>



                 <div class="form-group">
                   <label for="message-text" class="col-form-label">Gender :</label>
                   <input type="text" class="form-control" id="stu_gender" onChange={(e)=>{

                            updateGender(e.target.value);

                            }}
                   />
                 </div>



               </form>
             </div>
             <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
               <button type="button" class="btn btn-primary" onClick= {()=>{updateData(userId)}}>Save Changes</button>
             </div>
           </div>
         </div>
       </div>


       </div>
    )
}