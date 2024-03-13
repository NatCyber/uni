import React, { useState, useCallback, useContext, useEffect } from 'react';
import Selector from './MaritalStatusSelector';
// import {useLocation} from 'react-router-dom';
import styles from '../student.module.css';
import './applicant.css';

import { InputBox, ButtonField } from '@egst.frontend/shared';

interface PersonalInformation {
  ApplicationNumber: string;
  Email: string | number | null | undefined;
  PhoneNo: number | string;
  // password: string | null;
  FirstName: string | null;
  LastName: string | null;
  StreetName: string | number | null;
  City: string | number | null;
  State: string | number | null;
  ZipCode: string | number | null;
  userId: null | string | undefined;
  MarriageStatus: null | string;
  // onNext: (data: any) => void;
}

const PersonalInformationForm: React.FC<PersonalInformation> = (props) => {


  const Application_number = Math.random().toString(36).substr(2);
  const [isUser, setIsUser] = useState<boolean>(false);
  const isData = localStorage.getItem('Personal-Information');

  const [userValues, setUserValues] = useState<PersonalInformation>({
    ApplicationNumber: Application_number,
    Email: '',
    PhoneNo: '',
    FirstName: '',
    LastName: '',
    StreetName: '',
    City: '',
    State: '',
    ZipCode: '',
    userId: '',
    MarriageStatus: '',
  });


  const [data, setData] = useState<any>();

  const getform = () => {
    const data = JSON.parse(isData);
    if (isData != null) {
      setUserValues(data);
    }
    // setpersonalInfoForm({data})
    console.log('data', data);
  };


  useEffect(() => {
    getform();
  }, []);

  useEffect(() => {
    localStorage.setItem("Personal-Information", JSON.stringify(userValues));
  }, [userValues]);


  const isdata = localStorage.getItem('Personal-Information');
  useEffect(() => {
    const data = JSON.parse(isdata);
    if (data != null) {
      setData(data);
    }
  }, [])



  const setUserEmail = (e: any) => {
    setUserValues({ ...userValues, Email: e.target.value });
  };
  const setUserFname = (e: any) => {
    setUserValues({ ...userValues, FirstName: e.target.value });
  };
  const setUserLname = (e: any) => {
    setUserValues({ ...userValues, LastName: e.target.value });
  };
  const setUserPhone = (e: any) => {
    setUserValues({ ...userValues, PhoneNo: e.target.value });
  };
  const setUserStreet = (e: any) => {
    setUserValues({ ...userValues, StreetName: e.target.value });
  };
  const setUserCity = (e: any) => {
    setUserValues({ ...userValues, City: e.target.value });
  };

  const setUserState = (e: any) => {
    setUserValues({ ...userValues, State: e.target.value });
  };
  const setUserZipCode = (e: any) => {
    setUserValues({ ...userValues, ZipCode: e.target.value });
  };

  const setMarriageStatus = (e: any) => {
    setUserValues({ ...userValues, MarriageStatus: e.target.value });
  };


  //console.log(userValues);
  // const Form_Steps = [
  //   {
  //     label: 'Personal Information',
  //   },{
  //     label: 'Address and Church Affilation Information',
  //   },{
  //     label: 'Education Background', 
  //   },{
  //     label: 'Programme of Study and Finance',
  //   },{
  //     label: 'Required Attachements'
  //   }
  // ]

  // const Form_State = {
  //   selectedIndex: 0,
  //   steps: {
  //     personalInformation: {
  //       valid: false,
  //       dirty: false,
  //       value: {

  //       }
  //     },
  //     addressInformation:{
  //       valid: false,
  //       dirty: false,
  //       value: {

  //       }
  //     },
  //     educationalBackground: {
  //       valid: false,
  //       dirty: false,
  //       value: {

  //       }
  //     },
  //     programOfStudy: {
  //       valid: false,
  //       dirty: false,
  //       value: {

  //       }
  //     },
  //     requiredAttachements: {
  //       valid: false,
  //       dirty: false,
  //       value: {

  //       }
  //     }
  //   }
  // }

  // const FormStateContext = createContext({
  //   form: Form_State,
  //   setForm: (
  //     form: typeof Form_State | ((form: typeof Form_State) => typeof Form_State)
  //   ) => {},
  // });

  // function CreateTaskMultiStepFormContainer() {
  //   const [form, setForm] = useState(Form_State);

  //   return (
  //     <FormStateContext.Provider
  //       value={{
  //         form,
  //         setForm,
  //       }}
  //     >
  //       <CreateTaskMultiStepForm />
  //     </FormStateContext.Provider>
  //   );
  // }

  // const CreateTaskMultiStepForm = () => {
  //   const { form, setForm } = useContext(FormStateContext);

  //   const next = useCallback(() => {
  //     setForm(
  //       produce((form) => {
  //         form.selectedIndex += 1;
  //       })
  //     );
  //   }, [setForm]);

  //   const prev = useCallback(() => {
  //     setForm(
  //       produce((form) => {
  //         form.selectedIndex -= 1;
  //       })
  //     );
  //   }, [setForm]);

  //   const setSelectedIndex = useCallback(
  //     (index: number) => {
  //       setForm(
  //         produce((form) => {
  //           form.selectedIndex = index;
  //         })
  //       );
  //     },
  //     [setForm]
  //   );

  //   const selectedIndex = form.selectedIndex;
  // }

  return (
    <div className={styles['application-form-container']}>
      {isUser === false && (
        <div className={styles['applicant-input-container']}>
          <form>
            <div className="edit-your-profile">
              <div className="title-bar">
                <h3> Personal Information </h3>
                {/* <IoIosClose
                    className="close-button"
                    onClick={() => {
                      setIsUser(false);
                    }}
                  /> */}
              </div>

              <div className="applicant-input-items">
                <InputBox
                  value={userValues.Email}
                  label="Email"
                  className="userDataInputBox long"
                  inputValue={setUserEmail}
                  type="email"
                />
              </div>
              <div className="applicant-input-item">
                <div className="applicant-input-items">
                  <InputBox
                    value={userValues.FirstName}
                    label="First Name"
                    className="userDataInputBox"
                    inputValue={setUserFname}
                  />
                </div>
                <div className="applicant-input-items">
                  <InputBox
                    value={userValues.LastName}
                    label="Last Name"
                    className="userDataInputBox"
                    inputValue={setUserLname}
                  />
                </div>
              </div>
              <div className="applicant-input-items">
                <InputBox
                  value={userValues.PhoneNo}
                  label="Phone"
                  className="userDataInputBox"
                  inputValue={setUserPhone}
                />
              </div>
              <div className="applicant-input-item">
                <div className="applicant-input-items">
                  <InputBox
                    value={userValues.StreetName}
                    label="Street"
                    className="userDataInputBox"
                    inputValue={setUserStreet}
                  />
                </div>
                <div className="applicant-input-items">
                  <InputBox
                    value={userValues.City}
                    label="City"
                    className="userDataInputBox"
                    inputValue={setUserCity}
                  />
                </div>
              </div>
              <div className="applicant-input-item">
                <div className="applicant-input-items">
                  <InputBox
                    value={userValues.State}
                    label="Regional State"
                    className="userDataInputBox"
                    inputValue={setUserState}
                  />
                </div>
                <div className="applicant-input-items">
                  <InputBox
                    value={userValues.ZipCode}
                    label="ZIP Code"
                    className="userDataInputBox"
                    inputValue={setUserZipCode}
                  />
                </div>
              </div>
              <div className="applicant-input-items">
                <Selector
                  value={userValues.MarriageStatus}
                  label='Marital Status'
                  className="half-size-input"
                  inputValue={setMarriageStatus}
                />


              </div>
              {/* ------------------- ------------------ ------ */}
              {/* <div className="driver-input-items">
                  <InputBox
                    value={userValues.LicenseIssuingState}
                    label="License Issuing State"
                    className="userDataInputBox"
                    inputValue={setLicenseIssuingState}
                  />
                </div>
                <div className="driver-input-item">
                  <div className="driver-input-items">
                    <InputBox
                      value={userValues.LicenseId}
                      label="License Id"
                      className="userDataInputBox"
                      inputValue={setLicenseId}
                    />
                  </div>
                  <div className="driver-input-items">
                    <InputBox
                      value={userValues.LicenseExpDate}
                      label="License Exp Date"
                      className="userDataInputBox"
                      inputValue={LicenseExpDate}
                    />
                  </div>
                </div> */}

              {/* <div className="order-container">
                  <ButtonField
                    className="submit-btn"
                    value="Next"
                    onClick={handleNext}
                    //onClick={
                      //(e: any) => {
                      //e.preventDefault();
                      // if (driverProfileExist == false) {
                      //   SubmitUserData();
                      // } else {
                      //   UpdateUserData();
                      // }
                    //}
                  //}
                  />
                </div> */}
            </div>
          </form>
        </div>
      )
        // : (
        //   <div className="user-profile-container">
        //     <div className="title-bar">
        //       <h3> Profile </h3>
        //     </div>
        //     <div className="user-profile">
        //       <button
        //         onClick={() => {
        //           setIsUser(true);
        //         }}
        //         className="user-profile-edit-btn"
        //       >
        //         <IoMdCreate fontSize={20} />
        //       </button>
        //       <div className="is-river-data">
        //         <span style={{ fontSize: '10px', color: 'gray' }}>
        //           Applicant Id: {"dsd7872181301nksd"}
        //         </span>
        //       </div>

        //       {/* {docs.length >= 0 ? (
        //         <>
        //           <span> {"currentUserEmail"} </span>
        //           <div className="is-river-data">
        //             <span style={{ fontSize: '10px', color: 'gray' }}>
        //               Driver Id: {userValues.DriverId}
        //             </span>
        //           </div>
        //         </>
        //       ) : (
        //         <>
        //           <span className="no-data-msg"> {userValues.Email} </span>
        //         </>
        //       )} */}
        //     </div>
        //   </div>
        // )
      }
    </div>

  );
}

// function PersonalInfo( props: React.PropsWithChildren<{
//   onNext: () => void;
// }>
// ){
//   const { form, setForm } = useContext(FormStateContext);
//   const { register, handleSubmit, control } = useForm({
//     shouldUseNativeValidation: true,
//     defaultValues: {
//       name: form.steps.details.value.name,
//       dueDate: form.steps.details.value.dueDate,
//     },
//   });

//   const { isDirty } = useFormState({
//     control,
//   });

//   const { ref: nameRef, ...nameControl } = register('name', { required: true });

//   const { ref: dueDateRef, ...dueDateControl } = register('dueDate', {
//     required: true,
//   });

//   useEffect(() => {
//     setForm(
//       produce((form) => {
//         form.steps.details.dirty = isDirty;
//       })
//     );
//   }, [isDirty, setForm]);

//   return(
//     <form
//     onSubmit={handleSubmit((value) => {
//       setForm(
//         produce((formState) => {
//           formState.steps.details = {
//             value,
//             valid: true,
//             dirty: false,
//           };
//         })
//       );

//       props.onNext();
//     })}
//     >
//       <div className={styles['application-form-container']}>
//         {isUser === false && (
//           <div className={styles['applicant-input-container']}>
//             <form>
//               <div className="edit-your-profile">
//                 <div className="title-bar">
//                   <h3> Personal Information </h3>
//                   {/* <IoIosClose
//                     className="close-button"
//                     onClick={() => {
//                       setIsUser(false);
//                     }}
//                   /> */}
//                 </div>

//                 <div className="applicant-input-items">
//                   <InputBox
//                     value={userValues.Email}
//                     label="Email"
//                     className="userDataInputBox"
//                     inputValue={setUserEmail}
//                     type="email"
//                   />
//                 </div>
//                 <div className="applicant-input-item">
//                   <div className="applicant-input-items">
//                     <InputBox
//                       value={userValues.FirstName}
//                       label="First Name"
//                       className="userDataInputBox"
//                       inputValue={setUserFname}
//                     />
//                   </div>
//                   <div className="applicant-input-items">
//                     <InputBox
//                       value={userValues.LastName}
//                       label="Last Name"
//                       className="userDataInputBox"
//                       inputValue={setUserLname}
//                     />
//                   </div>
//                 </div>
//                 <div className="applicant-input-items">
//                   <InputBox
//                     value={userValues.PhoneNo}
//                     label="Phone"
//                     className="userDataInputBox"
//                     inputValue={setUserPhone}
//                   />
//                 </div>
//                 <div className="applicant-input-item">
//                   <div className="applicant-input-items">
//                     <InputBox
//                       value={userValues.StreetName}
//                       label="Street"
//                       className="userDataInputBox"
//                       inputValue={setUserStreet}
//                     />
//                   </div>
//                   <div className="applicant-input-items">
//                     <InputBox
//                       value={userValues.City}
//                       label="City"
//                       className="userDataInputBox"
//                       inputValue={setUserCity}
//                     />
//                   </div>
//                 </div>
//                 <div className="applicant-input-item">
//                   <div className="applicant-input-items">
//                     <InputBox
//                       value={userValues.State}
//                       label="Regional State"
//                       className="userDataInputBox"
//                       inputValue={setUserState}
//                     />
//                   </div>
//                   <div className="applicant-input-items">
//                     <InputBox
//                       value={userValues.ZipCode}
//                       label="ZIP Code"
//                       className="userDataInputBox"
//                       inputValue={setUserZipCode}
//                     />
//                   </div>
//                 </div>
//                 {/* ------------------- ------------------ ------ */}
//                 {/* <div className="driver-input-items">
//                   <InputBox
//                     value={userValues.LicenseIssuingState}
//                     label="License Issuing State"
//                     className="userDataInputBox"
//                     inputValue={setLicenseIssuingState}
//                   />
//                 </div>
//                 <div className="driver-input-item">
//                   <div className="driver-input-items">
//                     <InputBox
//                       value={userValues.LicenseId}
//                       label="License Id"
//                       className="userDataInputBox"
//                       inputValue={setLicenseId}
//                     />
//                   </div>
//                   <div className="driver-input-items">
//                     <InputBox
//                       value={userValues.LicenseExpDate}
//                       label="License Exp Date"
//                       className="userDataInputBox"
//                       inputValue={LicenseExpDate}
//                     />
//                   </div>
//                 </div> */}

//                 <div className="order-container">
//                   <ButtonField
//                     className="submit-btn"
//                     value="Next"
//                     onClick={(e: any) => {
//                       e.preventDefault();
//                       // if (driverProfileExist == false) {
//                       //   SubmitUserData();
//                       // } else {
//                       //   UpdateUserData();
//                       // }
//                     }}
//                   />
//                 </div>
//               </div>
//             </form>
//           </div>
//         ) 
//         // : (
//         //   <div className="user-profile-container">
//         //     <div className="title-bar">
//         //       <h3> Profile </h3>
//         //     </div>
//         //     <div className="user-profile">
//         //       <button
//         //         onClick={() => {
//         //           setIsUser(true);
//         //         }}
//         //         className="user-profile-edit-btn"
//         //       >
//         //         <IoMdCreate fontSize={20} />
//         //       </button>
//         //       <div className="is-river-data">
//         //         <span style={{ fontSize: '10px', color: 'gray' }}>
//         //           Applicant Id: {"dsd7872181301nksd"}
//         //         </span>
//         //       </div>

//         //       {/* {docs.length >= 0 ? (
//         //         <>
//         //           <span> {"currentUserEmail"} </span>
//         //           <div className="is-river-data">
//         //             <span style={{ fontSize: '10px', color: 'gray' }}>
//         //               Driver Id: {userValues.DriverId}
//         //             </span>
//         //           </div>
//         //         </>
//         //       ) : (
//         //         <>
//         //           <span className="no-data-msg"> {userValues.Email} </span>
//         //         </>
//         //       )} */}
//         //     </div>
//         //   </div>
//         // )
//         }
//       </div>
//     </form>
//   )
//}

export default PersonalInformationForm;
