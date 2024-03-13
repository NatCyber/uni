import React, { useState } from "react";
import styles from '../dashboard.module.css';
import CourseForm from "./courseForm";
import ModuleForm from "./moduledForm";

import { InputBox, ButtonField, Splitter } from '@egst.frontend/shared';
 interface Department{
    name: string;
 }

 const Department: React.FC<Department> = (props) => {
    // const {name} = props;
    // // const [moduleData, setModuleData] = useState([{moduleName:"",moduleNumber:""}])
    // const [courseData,setCourseData]=useState([{courseName:"",courseCode:"",creditHours:""}])
   
    // const handleModuleAdd=()=>{
    //     setModuleData([...moduleData,{moduleName:"",moduleNumber:""}])
    // }
    // const handleModuleChange=(e,i)=>{
    //     const {name,value}=e.target
    //     const onchangeVal = [...moduleData]
    //     onchangeVal[i][moduleName]=value
    //     setModuleData(onchangeVal)
    // }
    // const handleModuleDelete=(i)=>{
    //     const deleteVal = [...moduleData]
    //     deleteVal.splice(i,1)
    //     setModuleData(deleteVal)
    // }
    // const handleCourseClick=()=>{
    //     setCourseData([...courseData,{courseName:"",courseCode:"",creditHours:""}])
    // }
    // const handleCourseChange=(e,i)=>{
    //     const {name,value}=e.target
    //     const onchangeVal = [...courseData]
    //     onchangeVal[i][courseName]=value
    //     setCourseData(onchangeVal)
    // }
    // const handleCourseDelete=(i)=>{
    //     const deleteVal = [...courseData]
    //     deleteVal.splice(i,1)
    //     setCourseData(deleteVal)
    // }

    return(
        <div className={styles['main-container']}>
            <form className={styles['form-container']}>
                <div>
                    <h3> Department</h3>
                </div>
                <div className="applicant-input-items">
                  <InputBox
                    label="Department Name"
                    className="userDataInputBox"
                  />
                </div>
                <Splitter/>
                <ModuleForm modulename={""} noOfCourses={""} totalCredit={""}/>
                <CourseForm coursename={""} courseCode={""} creaditHours={""}/>

            </form>

            {/* <form>
                <div>
                    <h3> Department</h3>
                </div>
                <div className="applicant-input-items">
                  <InputBox
                    label="Department Name"
                    className="userDataInputBox"
                    
                  />
                </div>
                <div>
                    <button onClick={handleCourseClick}>Add Course</button>
                        {
                            courseData.map((val,i)=>
                            <div>
                                <input name="Course Name" value={val.courseName} onChange={(e)=>handleCourseChange(e,i)} />
                                <input name="Course Code" value={val.courseCode} onChange={(e)=>handleCourseChange(e,i)} />
                                <input name="Credit Hours" value={val.creditHours} onChange={(e)=>handleCourseChange(e,i)} />
                                <button onClick={()=>handleCourseDelete(i)}>Delete</button>
                            </div>
                            )
                        }
                </div>
            </form> */}

        </div>
    )
 }

 export default Department;