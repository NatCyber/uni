import React, { useState } from "react";
import styles from '../student.module.css';

function Department(){
    const [data,setData]=useState([{courseName:"",courseCode:"",creditHours:""}])
   
    const handleClick=()=>{
        setData([...data,{courseName:"",courseCode:"",creditHours:""}])
    }
    const handleChange=(e,i)=>{
        const {name,value}=e.target
        const onchangeVal = [...data]
        onchangeVal[i][name]=value
        setData(onchangeVal)
    }
    const handleDelete=(i)=>{
        const deleteVal = [...data]
        deleteVal.splice(i,1)
        setData(deleteVal)
    }
    return(
        <div className="App">
            <button onClick={handleClick}>Add</button>
            {
                data.map((val,i)=>
                <div>
                    <input name="Course Name" value={val.courseName} onChange={(e)=>handleChange(e,i)} />
                    <input name="Course Code" value={val.courseCode} onChange={(e)=>handleChange(e,i)} />
                    <input name="Credit Hours" value={val.creditHours} onChange={(e)=>handleChange(e,i)} />
                    <button onClick={()=>handleDelete(i)}>Delete</button>
                </div>
                )
            }
            {/* <p>{JSON.stringify(data)}</p> */}
        </div>
    )
}
export default Department;