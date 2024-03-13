import { useState } from 'react';
import styles from "../dashboard.module.css";
import { InputBox, Splitter } from '@egst.frontend/shared';

function ModuleTr() {
  const [formFields, setFormFields] = useState([
    {   modulename: '', 
        noOfCourses: '' ,
        totalCredit: '',},
  ])

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  }

  const submit = (e) => {
    e.preventDefault();
    console.log(formFields)
  }

  const addFields = () => {
    let object = {
        modulename: '',
        noOfCourses: '',
        totalCredit: '',
    }

    setFormFields([...formFields, object])
  }

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1)
    setFormFields(data)
  }

  return (
    <div>
      <form onSubmit={submit}>
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
        <div>
            <h4> Modules</h4>
        </div>
        {formFields.map((form, index) => {
          return (
            <div key={index}>
                <div className={styles['form-input-items']}>
                    <input
                        name='ModuleName'
                        placeholder='Module Name'
                        onChange={event => handleFormChange(event, index)}
                        value={form.modulename}
                        className={styles['input-box']}
                    />
                </div>
              
              <input
                name='NoofCourses'
                placeholder='No. of Courses'
                onChange={event => handleFormChange(event, index)}
                value={form.noOfCourses}
              />
              <input
                name='CreditHrs'
                placeholder='Total Credit'
                onChange={event => handleFormChange(event, index)}
                value={form.totalCredit}
              />
              <button onClick={() => removeFields(index)}>Remove</button>
            </div>
          )
        })}
      </form>
      <button onClick={addFields}>Add Module</button>
      <br />
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default ModuleTr;