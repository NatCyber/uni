import { ButtonField, InputBox, Splitter } from '@egst.frontend/shared';
import React, { useState } from 'react';
import { IoIosAdd, IoIosClose } from 'react-icons/io';
import styles from '../student.module.css';
import './applicant.css';

interface UserValues {
  InstitutionName: string;
  InstitutionAddress: string;
  AdmissionDate: Date | null;
  GraduationYear: Date | null;
  CredentialAwarded: string;
  CreaditHoursEarned: number | null;
}
const EducationInfoForm = () => {
  const [isDriver, setIsDriver] = useState<boolean>(false);
  const [myVehicles, setMyVehicles] = useState<any>([]);

  // const [vehicleInfo, setVehicleInfo] = useState<> ();
  const [vehicleInfo, setvehicleInfo] = useState<boolean>();
  const [userValues, setUserValues] = useState<UserValues>({
    InstitutionName: '',
    InstitutionAddress: '',
    AdmissionDate: null,
    GraduationYear: null,
    CredentialAwarded: '',
    CreaditHoursEarned: null,
  })

  const setInstitutionName = (e: any) => {
    setUserValues({ ...userValues, InstitutionName: e.target.value });
  };

  const setInstitutionAddress = (e: any) => {
    setUserValues({ ...userValues, InstitutionAddress: e.target.value });
  };

  const setAdmissionDate = (e: any) => {
    setUserValues({ ...userValues, AdmissionDate: e.target.value });
  };
  const setGraduationYear = (e: any) => {
    setUserValues({ ...userValues, GraduationYear: e.target.value });
  };
  const setCredentialAwarded = (e: any) => {
    setUserValues({ ...userValues, CredentialAwarded: e.target.value });
  };
  const setCreaditHoursEarned = (e: any) => {
    setUserValues({ ...userValues, CreaditHoursEarned: e.target.value });
  };
  console.log(userValues);
  return (
    <>
      <h3> Educational Background </h3>
      <div className={styles['']}>
        <span style={{ marginLeft: '10px' }}> Institution Name </span>
        <InputBox
          value={userValues.InstitutionName}
          style={{
            width: '65%',
            height: 30,
            borderRadius: 5,
            padding: '4px',
            border: '#000 1px solid',
          }}
          inputValue={setInstitutionName}
        />
      </div>
      <div className={styles['']}>
        <span style={{ marginLeft: '10px' }}> Institution Address </span>
        <InputBox
          value={userValues.InstitutionAddress}
          style={{
            width: '65%',
            height: 30,
            borderRadius: 5,
            padding: '4px',
            border: '#000 1px solid',
          }}
          inputValue={setInstitutionAddress}
        />
      </div>
      <Splitter />
      <div className='applicant-input-item' style={{ display: 'flex', width: '100%', }}>
        <div style={{ width: '33%' }} className={styles['']}>
          <span style={{ marginLeft: '10px' }}> Admission Year </span>
          <InputBox
            value={userValues.AdmissionDate}
            style={{
              width: '90%',
              height: 30,
              borderRadius: 5,
              padding: '4px',
              border: '#000 1px solid',
            }}
            inputValue={setAdmissionDate}
          />
        </div>
        <div style={{ width: '33%' }} className={styles['']}>
          <span style={{ marginLeft: '10px' }}> Graduation Year </span>
          <InputBox
            value={userValues.GraduationYear}
            style={{
              width: '90%',
              height: 30,
              borderRadius: 5,
              marginLeft: '5px',
              padding: '4px',
              border: '#000 1px solid',
            }}
            inputValue={setGraduationYear}
          />
        </div>

      </div>

      <div className='applicant-input-item'>
        <div style={{ width: '33%' }} className={styles['']}>
          <span style={{ marginLeft: '10px' }}> Credential Awarded</span>
          <InputBox
            value={userValues.CredentialAwarded}
            style={{
              width: '90%',
              height: 30,
              borderRadius: 5,
              padding: '4px',
              border: '#000 1px solid',
            }}
            inputValue={setCredentialAwarded}
          />
        </div>
        <div style={{ width: '33%' }} className={styles['']}>
          <span style={{ marginLeft: '10px' }}> Credit Hours Earned </span>
          <InputBox
            value={userValues.CreaditHoursEarned}
            style={{
              width: '90%',
              height: 30,
              borderRadius: 5,
              marginLeft: '5px',
              padding: '4px',
              border: '#000 1px solid',
            }}
            inputValue={setCreaditHoursEarned}
          />
        </div>

      </div>


      <div>
        {isDriver === true ? (
          <div className="add-a-vehicle">
            <div className={styles['driver-input-container']}>
              <div className="title-bar">
                {/* <h3> Educational Background </h3> */}
                <IoIosClose
                  className="close-button"
                  onClick={() => {
                    setIsDriver(false);
                  }}
                />
              </div>
              <form
                style={{ marginBottom: '30px' }}
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div style={{ width: '75%' }} className={styles['']}>
                  <span style={{ marginLeft: '10px' }}>Institution Name</span>
                  <InputBox
                    value={userValues.InstitutionName}
                    style={{
                      width: '100%',
                      height: 30,
                      borderRadius: 5,
                      padding: '4px',
                      border: '#000 1px solid',
                    }}
                    inputValue={setInstitutionName}
                  />
                </div>
                <div style={{ width: '75%' }} className={styles['']}>
                  <span style={{ marginLeft: '10px' }}>Institution Address</span>
                  <InputBox
                    value={userValues.InstitutionAddress}
                    style={{
                      width: '100%',
                      height: 30,
                      borderRadius: 5,
                      padding: '4px',
                      border: '#000 1px solid',
                    }}
                    inputValue={setInstitutionAddress}
                  />
                </div>
                <Splitter />
                <div className={styles['applicant-input-item']}>
                  <div className={styles['applicant-input-items']}>
                    <span style={{ marginLeft: '10px' }}>Admission Year</span>
                    <InputBox
                      value={userValues.AdmissionDate}
                      style={{
                        width: '100%',
                        height: 30,
                        borderRadius: 5,
                        padding: '4px',
                        border: '#000 1px solid',
                      }}
                      inputValue={setAdmissionDate}
                    />
                  </div>
                  <div className='applicant-input-items'>
                    <span style={{ marginLeft: '10px' }}> Graduation Year </span>
                    <InputBox
                      value={userValues.GraduationYear}
                      style={{
                        width: '100%',
                        height: 30,
                        borderRadius: 5,
                        padding: '4px',
                        border: '#000 1px solid',
                      }}
                      inputValue={setGraduationYear}
                    />
                  </div>

                </div>
                <div className='applicant-input-item'>
                  <div className='applicant-input-items'>
                    <span style={{ marginLeft: '10px' }}> Credential Awarded</span>
                    <InputBox
                      value={userValues.CredentialAwarded}
                      style={{
                        width: '75%',
                        height: 30,
                        borderRadius: 5,
                        padding: '4px',
                        border: '#000 1px solid',
                      }}
                      inputValue={setCredentialAwarded}
                    />
                  </div>
                  <div className='applicant-input-items'>
                    <span style={{ marginLeft: '10px' }}> Credit Hours Earned </span>
                    <InputBox
                      value={userValues.CreaditHoursEarned}
                      style={{
                        width: '75%',
                        height: 30,
                        borderRadius: 5,
                        marginLeft: '5px',
                        padding: '4px',
                        border: '#000 1px solid',
                      }}
                      inputValue={setCreaditHoursEarned}
                    />
                  </div>

                </div>


                <div className="order-container">
                  <ButtonField
                    className="submit-btn"
                    value="Save"
                    onClick={() => {
                      // AddVehcle();
                      setIsDriver(false);
                    }}
                  />
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div className="user-profile-container">
            <h3> Education </h3>
            <div className="user-profile">
              <button
                onClick={() => {
                  setIsDriver(true);
                  // setIsUser(false);
                }}
                className="user-profile-edit-btn"
              >
                <IoIosAdd fontSize={20} style={{ paddingTop: '3px' }} />
              </button>
              <div>
                {myVehicles ? (
                  <div className="my-vehicles-container">
                    {myVehicles?.map((myVehicle: any, i: number) => {
                      // return <img key={i} src={myVehicle.VehicleType} />;
                      return (
                        <div key={i} className="my-vehicles">
                          <button className="vehicle-type">
                            {myVehicle?.VehicleType}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <>
                    <span
                      style={{ marginLeft: '33px' }}
                      className="no-data-msg"
                    >
                      No vehicle
                    </span>
                  </>
                )}

                {/* <img style={{ width: '100px' }} src={myVehicles.VehicleType} /> */}
              </div>
            </div>
          </div>

        )}
      </div>
    </>
  );

};
export default EducationInfoForm;