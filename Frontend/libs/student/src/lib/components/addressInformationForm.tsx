import React, { useState, useCallback, useContext, useEffect } from 'react';

import styles from '../student.module.css';
import './applicant.css';

import {
  IoLogoFacebook,
  IoLogoApple,
  IoIosArrowForward,
  IoIosArrowBack,
  IoMdCreate,
  IoIosAdd,
  IoIosClose,
} from 'react-icons/io';
import { InputBox, ButtonField } from '@egst.frontend/shared';
import { createContext } from 'vm';

interface AddressInformation {
  Country: string | null;
  Region: string | null;
  City: string | number | null;
  SubCity: string | number | null;
  Woreda: string | number | null;
  HouseNo: string | number | null;
  PassportNo: string | number | null;
  OfficePhoneNo?: number | string;
  ResidentPhoneNo?: number | string;
  MobilePhoneNo: number | string;
  PostalAddress: string | number | null;
  Fax: string | number | null;
  Domination: string | number | null;
  LocalChurch: string | number | null;
  Position: string | number | null;
}

const AddressInformationForm: React.FC<AddressInformation> = (props) => {
  const [data, setData] = useState<any>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const [isUser, setIsUser] = useState<boolean>(false);
  const [driverProfileExist, setDriverProfileExist] = useState<boolean>(false);
  const [isDriver, setIsDriver] = useState<boolean>(false);
  const [userValues, setUserValues] = useState<AddressInformation>({
    Country: '',
    Region: '',
    City: '',
    SubCity: '',
    Woreda: '',
    HouseNo: '',
    PassportNo: '',
    OfficePhoneNo: '',
    ResidentPhoneNo: '',
    MobilePhoneNo: '',
    PostalAddress: '',
    Fax: '',
    Domination: '',
    LocalChurch: '',
    Position: '',
  });

  console.log(userValues);

  useEffect(() => {
    localStorage.setItem("Address-Information", JSON.stringify(userValues));
    var applicationData = localStorage.getItem("Address-Information")
    // setUserValues(...userValues, JSON.parse(applicationData))
  }, [])

  const setCountry = (e: any) => {
    setUserValues({ ...userValues, Country: e.target.value });
  };
  const setRegion = (e: any) => {
    setUserValues({ ...userValues, Region: e.target.value });
  };
  const setCity = (e: any) => {
    setUserValues({ ...userValues, City: e.target.value });
  };
  const setSubCity = (e: any) => {
    setUserValues({ ...userValues, SubCity: e.target.value });
  };
  const setWoreda = (e: any) => {
    setUserValues({ ...userValues, Woreda: e.target.value });
  };
  const setHouseNo = (e: any) => {
    setUserValues({ ...userValues, HouseNo: e.target.value });
  };

  const setPassportNo = (e: any) => {
    setUserValues({ ...userValues, PassportNo: e.target.value });
  };
  const setOfficePhoneNo = (e: any) => {
    setUserValues({ ...userValues, OfficePhoneNo: e.target.value });
  };

  const setResidentPhoneNo = (e: any) => {
    setUserValues({ ...userValues, ResidentPhoneNo: e.target.value });
  };

  const setMobilePhoneNo = (e: any) => {
    setUserValues({ ...userValues, MobilePhoneNo: e.target.value });
  };

  const setPostalAddress = (e: any) => {
    setUserValues({ ...userValues, PostalAddress: e.target.value });
  };

  const setFax = (e: any) => {
    setUserValues({ ...userValues, Fax: e.target.value });
  };

  const setDomination = (e: any) => {
    setUserValues({ ...userValues, Domination: e.target.value });
  };

  const setLocalChurch = (e: any) => {
    setUserValues({ ...userValues, LocalChurch: e.target.value });
  };

  const setPosition = (e: any) => {
    setUserValues({ ...userValues, Position: e.target.value });
  };

  return (
    <div className={styles['application-form-container']}>
      {isUser === false && (
        <div className={styles['applicant-input-container']}>
          <form>
            <div className="edit-your-profile">
              <div className="title-bar">
                <h3> Address Information </h3>
              </div>

              <div className="applicant-input-item">
                <div className="applicant-input-items">
                  <InputBox
                    value={userValues.Country}
                    label="Country"
                    className="userDataInputBox"
                    inputValue={setCountry}
                  />
                </div>

                <div className="applicant-input-items">
                  <InputBox
                    value={userValues.Region}
                    label="Region"
                    className="userDataInputBox"
                    inputValue={setRegion}
                  />
                </div>
              </div>

              <div className="applicant-input-item">
                <div className="applicant-input-items">
                  <InputBox
                    value={userValues.City}
                    label="City"
                    className="userDataInputBox"
                    inputValue={setCity}
                  />
                </div>
                <div className="applicant-input-items">
                  <InputBox
                    value={userValues.SubCity}
                    label="Sub-City"
                    className="userDataInputBox"
                    inputValue={setSubCity}
                  />
                </div>

              </div>
              <div className="applicant-input-items">
                <InputBox
                  value={userValues.Woreda}
                  label="Woreda"
                  className="userDataInputBox"
                  inputValue={setWoreda}
                />
              </div>
              <div className="applicant-input-items">
                <InputBox
                  value={userValues.HouseNo}
                  label="House No."
                  className="userDataInputBox"
                  inputValue={setHouseNo}
                />
              </div>
              <div className="applicant-input-items">
                <InputBox
                  value={userValues.PassportNo}
                  label="Passport No."
                  className="userDataInputBox"
                  inputValue={setPassportNo}
                />
              </div>
              <div className="applicant-input-items">
                <InputBox
                  value={userValues.OfficePhoneNo}
                  label="Office Phone No."
                  className="userDataInputBox"
                  inputValue={setOfficePhoneNo}
                />
              </div>
              <div className="applicant-input-items">
                <InputBox
                  value={userValues.ResidentPhoneNo}
                  label="Resident Phone No."
                  className="userDataInputBox"
                  inputValue={setResidentPhoneNo}
                />
              </div>
              <div className="applicant-input-items">
                <InputBox
                  value={userValues.MobilePhoneNo}
                  label="Mobile Phone No."
                  className="userDataInputBox"
                  inputValue={setMobilePhoneNo}
                />
              </div>
              <div className="applicant-input-item">


                <div className="applicant-input-items">
                  <InputBox
                    value={userValues.PostalAddress}
                    label="Postal Address"
                    className="userDataInputBox"
                    inputValue={setPostalAddress}
                  />
                </div>
                <div className="applicant-input-items">
                  <InputBox
                    value={userValues.Fax}
                    label="Fax "
                    className="userDataInputBox"
                    inputValue={setFax}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      )
      }
    </div>

  );
}

export default AddressInformationForm;
