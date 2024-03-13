import { ButtonField, InputBox, Splitter } from '@egst.frontend/shared';
import React, { useState } from 'react';
import { IoIosAdd, IoIosClose } from 'react-icons/io';
import styles from '../student.module.css';
import './applicant.css';
import Selector from './FinanceFundSelector';

interface UserValues {
  FinancingParty: string;
  FinancerName: string;
  FianceAmount: number | null;

}
const FinanceInformationForm = () => {
  const [isDriver, setIsDriver] = useState<boolean>(false);
  const [userValues, setUserValues] = useState<UserValues>({
    FinancingParty: '',
    FinancerName: '',
    FianceAmount: null,
  })






  
  const setFinancingParty = (e: any) => {
    setUserValues({ ...userValues, FinancingParty: e.target.value });
  };

  const setFinancerName = (e: any) => {
    setUserValues({ ...userValues, FinancerName: e.target.value });
  };

  const setFianceAmount = (e: any) => {
    setUserValues({ ...userValues, FianceAmount: e.target.value });
  };
  //   console.log(userValues);
  return (
    <>
      <h3> Finances </h3>
      <div className={styles["driver-input-item"]} >
        <Selector
          value={userValues.FinancingParty}
          label='Funding Party'
          className="userDataInputBox half-size-input"
          inputValue={setFinancingParty}
          
        />
      </div>
      <div className={styles["driver-input-item"]}>
        <span style={{ marginLeft: '10px' }}>Name</span>
        <InputBox
          value={userValues.FinancerName}
          style={{
            width: '85%',
            height: 30,
            borderRadius: 5,
            padding: '4px',
            border: '#000 1px solid',
          }}
          inputValue={setFinancerName}
        />
      </div>
      <Splitter />
      <div className={styles["driver-input-item"]}>
        <div className={styles['applicant-input-items']}>
          <span style={{ marginLeft: '10px' }}>Amount of Fund Expected</span>
          <InputBox
            value={userValues.FianceAmount}
            style={{
              width: '85%',
              height: 30,
              borderRadius: 5,
              padding: '4px',
              border: '#000 1px solid',
            }}
            inputValue={setFianceAmount}
          />
        </div>

      </div>

      <div>
        {isDriver === true ? (
          <div className="add-a-vehicle">
            <div className={styles["driver-input-item"]}>
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
                <div className="driver-input-item" style={{ width: '50%' }}>
                  
                  <Selector
                    value={userValues.FinancingParty}
                    label='Funding Party'
                    className="userDataInputBox half-size-input"
                    inputValue={setFinancingParty}
                  />


                </div>
                <div className={styles['driver-container-item']}>
                  <span style={{ marginLeft: '10px' }}>Name</span>
                  <InputBox
                    value={userValues.FinancerName}
                    style={{
                      width: '85%',
                      height: 30,
                      borderRadius: 5,
                      padding: '4px',
                      border: '#000 1px solid',
                    }}
                    inputValue={setFinancerName}
                  />
                </div>
                <Splitter />
                <div className='applicant-input-item'>
                  <div className='applicant-input-items'>
                    <span style={{ marginLeft: '10px' }}>Amount of Fund Expected</span>
                    <InputBox
                      value={userValues.FianceAmount}
                      style={{
                        width: '85%',
                        height: 30,
                        borderRadius: 5,
                        padding: '4px',
                        border: '#000 1px solid',
                      }}
                      inputValue={setFianceAmount}
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
            <h3> Finance </h3>
            <div className="user-profile" style={{ width: '80%' }}>
              <button
                onClick={() => {
                  setIsDriver(true);
                  // setIsUser(false);
                }}
                className="user-profile-edit-btn"
              >
                <IoIosAdd fontSize={20} style={{ paddingTop: '3px' }} />
              </button>

            </div>
          </div>
          // eslint-disable-next-line no-irregular-whitespace
        )}
      </div>
    </>
  );

};
export default FinanceInformationForm;