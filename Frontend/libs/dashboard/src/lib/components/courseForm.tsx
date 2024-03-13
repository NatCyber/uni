import React, { useState } from 'react';
import styles from '../dashboard.module.css';
import { InputBox } from '@egst.frontend/shared';


interface Course {
//   map(arg0: (val: any, i: any) => JSX.Element): React.ReactNode;
  coursename: string | number ;
  courseCode: string;
  creaditHours: string | number;
}

const CourseForm: React.FC<Course> = (props) => {
    const [userValues, setUserValues] = useState<Course>({
        coursename: '',
        courseCode: '',
        creaditHours: '',
    });

    const setCoursename = (e: any) => {
        setUserValues({ ...userValues, coursename: e.target.value });
      };
      const setCourseCode = (e: any) => {
        setUserValues({ ...userValues, courseCode: e.target.value });
      };
      const setCreaditHours = (e: any) => {
        setUserValues({ ...userValues, creaditHours: e.target.value });
      };
      const handleClick=()=>{
        setUserValues([...userValues,{ courseName:"", courseCode:"", creditHours:""}]);
    }

      const handleChange=(e,i)=>{
        const {name,value}=e.target
        const onchangeVal = [...userValues]
        onchangeVal[i][name]=value
        setUserValues(onchangeVal)
    }
    const handleDelete=(i)=>{
        const deleteVal = [...userValues]
        deleteVal.splice(i,1)
        setUserValues(deleteVal)
    }
    const handleFormChange = (event, index) => {
        let data = [...userValues];
        data[index][event.target.name] = event.target.value;
        setUserValues(data);
      }

      const addFields = () => {
        let object = {
          name: '',
          age: ''
        }
    
        setFormFields([...formFields, object])
      }

      return(
        <div>
            <form>
            <div>
                    <h4> Course</h4>
                    {/* mm */}
                </div>
                <button onClick={handleClick}>Add</button>
            {
                userValues.map((val,i)=>
                <div className="applicant-input-item">
                    
                    <div className="applicant-input-items">
                        <InputBox
                            value={userValues.coursename}
                            label="Course Name"
                            className="userDataInputBox"
                            inputValue={setCoursename}
                            onChange={event => handleFormChange(event, index)}
                        />
                    </div>
                    <div className="applicant-input-items">
                        <InputBox
                            value={userValues.courseCode}
                            label="Course Code"
                            className="userDataInputBox"
                            inputValue={setCourseCode}
                        />
                    </div>
                    <div className="applicant-input-items">
                        <InputBox
                            value={userValues.creaditHours}
                            label="Credit Hrs."
                            className="userDataInputBox"
                            inputValue={setCreaditHours}
                        />
                    </div>
                </div>
                )
            }   
                
            </form>
        </div>
      )
};

export default CourseForm;