import React, { useState } from 'react';
import styles from '../dashboard.module.css';
import { InputBox } from '@egst.frontend/shared';


interface Module {
  modulename: string | number ;
  noOfCourses: string | number;
  totalCredit: string | number;
}

const ModuleForm: React.FC<Module> = (props) => {
    const [userValues, setUserValues] = useState<Module>({
        modulename: '',
        noOfCourses: '',
        totalCredit: '',
    });

    const setModulename = (e: any) => {
        setUserValues({ ...userValues, modulename: e.target.value });
      };
      const setNoOfCourses = (e: any) => {
        setUserValues({ ...userValues, noOfCourses: e.target.value });
      };
      const setTotalCredit = (e: any) => {
        setUserValues({ ...userValues, totalCredit: e.target.value });
      };

      return(
        <div>
            <form>
            <div>
                    <h4> Modules</h4>
                </div>
                <div className="applicant-input-item">
                    <div className="applicant-input-items">
                        <InputBox
                            value={userValues.modulename}
                            label="Module Name"
                            className="userDataInputBox"
                            inputValue={setModulename}
                        />
                    </div>
                    <div className="applicant-input-items">
                        <InputBox
                            value={userValues.noOfCourses}
                            label="No. of Courses"
                            className="userDataInputBox"
                            inputValue={setNoOfCourses}
                        />
                    </div>
                    <div className="applicant-input-items">
                        <InputBox
                            value={userValues.totalCredit}
                            label="Total Credit"
                            className="userDataInputBox"
                            inputValue={setTotalCredit}
                        />
                    </div>
                </div>
            </form>
        </div>
      )
};

export default ModuleForm;