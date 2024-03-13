
import React, { useState, useEffect } from 'react';
import AddressInformationForm from './addressInformationForm';
import PersonalInformationForm from './personalInformationForm';
import ChurchAffilationInformationForm from './churchAffilationInformationForm';
import AttachementsForm from './attachementsForm';
import EducationInfoForm from './educationInformationForm';
import FinanceInformationForm from './financeInformationForm';
import { IoIosArrowRoundBack } from 'react-icons/io';
import './formStyles.css';
import { useCreateApplicationMutation } from '@egst.frontend/shared';

const Forms: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [ ApplicationData, setpplicationData ] = useState<any>(); 

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };


  useEffect(()=>{
    const getPersonalInformationForm = localStorage.getItem('Personal-Information')
    const personalInfo = JSON.parse(getPersonalInformationForm);
  
    const getAddressInfoForm = localStorage.getItem('Address-Information')
    const addressInfo = JSON.parse(getAddressInfoForm);
  
    const getFinanceInfoForm = localStorage.getItem('financeInfoForm')
    const financeInfo = JSON.parse(getFinanceInfoForm);
  
    const getEducationInfoForm = localStorage.getItem('educationInfoForm')
    const educationInfo = JSON.parse(getEducationInfoForm);
    
    console.log({
      personalInfo,
      addressInfo,
      financeInfo,
      educationInfo
    })

  setpplicationData({
    personalInfo,
    addressInfo,
    financeInfo,
    educationInfo
  })

  },[])



  const renderFormStep = () => {
    switch (step) {
      case 1:
        return <PersonalInformationForm Email={undefined} PhoneNo={''} FirstName={null} LastName={null} StreetName={null} City={null} State={null} ZipCode={null} userId={undefined} DriverId={null} LicenseIssuingState={null} LicenseId={null} LicenseExpDate={null} MarriageStatus={null} />;
      case 2:
        return <AddressInformationForm Country={null} Region={null} City={null} SubCity={null} Woreda={null} HouseNo={null} PassportNo={null} MobilePhoneNo={''} PostalAddress={null} Fax={null} Domination={null} LocalChurch={null} Position={null} />;
      case 3:
        return <EducationInfoForm />;
      case 4:
        return <ChurchAffilationInformationForm Domination={null} LocalChurch={null} Position={null} Referee={null} />;
      case 5:
        return <FinanceInformationForm />;
      case 6:
        return <AttachementsForm />;
      default:
        return <EducationInfoForm />;
    }
  };


  const [submitApp, { data, error }] = useCreateApplicationMutation();

  if (data) {
    console.log(data)
  }

  if (error) {
    console.log(error)
  }


  const SubmitApplication = async () => {
    // const dataToBeSent = localStorage.getItem("Personal-Information");
    // const data = JSON.parse(ApplicationData!);
    const testData = {
      "BigObject": ApplicationData
    }

    const result = submitApp(testData)
    console.log("dataToBeSent", testData)
  }


  return (
    <div>
      <div>
        {step > 1 && (
          <button className="form-back-btn" type="button" onClick={handlePrevStep}>
            <IoIosArrowRoundBack className="back-btn-icon" />
          </button>
        )}
      </div>

      <div className='forms-container'>
        {renderFormStep()}
      </div>

      <div>
        {step < 6 ? (
          <button className="submit-btn" type="button" onClick={handleNextStep}>
            Next
          </button>
        ) : (
          <button className="submit-btn" type="submit" onClick={() => { SubmitApplication() }}> Submit </button>
        )}
      </div>
    </div>
  );
};

export default Forms;
