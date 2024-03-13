import { Button } from 'devextreme-react';
import { useCallback, useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import { Formik, Form } from 'formik';
import StepThree from './StepThree';
import StepFour from './StepFour';

const AppForm1 = () => {
  const [currentStep, setStep] = useState(1);
  const [docs, setDocs] = useState([]);
 
  const changeStep = useCallback(
    (e) => {
      if (e.element.id == '0') {
        setStep((prevStep) => prevStep - 1);
      } else {
        setStep((prevStep) => prevStep + 1);
      }
    },
    [setStep]
  );
  
  const initialValues = {
    personalInformation: {
      firstName: '',
      middleName: '',
      lastName: '',
      phoneNo: '',
      personalTitle: '',
      nationality: '',
      dob: '',
      gender: '',
      occupation: '',
      maritalStatus: '',
      spouseName: '',
      noOfChildren: '',
      photo: '',
    },
    address: {
      email: '',
      country: '',
      region: '',
      city: '',
      subcity: '',
      woreda: '',
      houseNo: '',
      passportNo: '',
      mobileNo: '',
      postNo: '',
      fax: '',
    },
    educationBackground: [
      {
        institutionName: '',
        location: '',
        degree: '',
        creditHour: '',
        from: '',
        to: '',
      },
    ],
    language: {
      motherTongue: '',
      otherLanguages: [
        {
          language: '',
          fluency: '',
        },
      ],
    },
    churchAffiliation: {
      denomination: '',
      localChurch: '',
      positionMinistryInvolvement: '',
    },
    recommendation: {
      recommenderName: '',
      recommenderAddress: '',
      recommendationFile: '',
    },
    financeInformation: [
      {
        id: '1',
        anticipate: 'My Denomination',
        givenName: '',
        fund: 0,
        active: false,
      },
      {
        id: '2',
        anticipate: 'My Local Church',
        givenName: '',
        fund: 0,
        active: false,
      },
      {
        id: '3',
        anticipate: 'Donor Organization',
        givenName: '',
        fund: 0,
        active: false,
      },
      {
        id: '4',
        anticipate: 'My Office',
        givenName: '',
        fund: 0,
        active: false,
      },
      {
        id: '5',
        anticipate: 'Friends',
        givenName: '',
        fund: 0,
        active: false,
      },
      {
        id: '6',
        anticipate: 'Personal Funds',
        givenName: '',
        fund: 0,
        active: false,
      },
      {
        id: '7',
        anticipate: 'Other Sources',
        givenName: '',
        fund: 0,
        active: false,
      },
    ],
    program: {
      programId: '',
      programName: '',
      stream: '',
    },
    documents: [],
  };

  return (
    <div className="container mx-auto">
      <div className=" flex flex-col gap-3  p-4 bg-[#fafafa] my-4 overflow-auto h-[750px]">
        <Formik
          initialValues={initialValues}
          // validationSchema={validationSchema}
          onSubmit={async (values, { setValues }) => {
            try {
              const urls = [];

              docs.forEach(async (element) => {
                const formData = new FormData();
                formData.append('file', element, element.name);
                const uploadedImage = await fetch(
                  'https://localhost:5000/api/students/upload',
                  { method: 'POST', body: formData }
                );
                const imgName = await uploadedImage.json();
                const url = { url: imgName.path };
                urls.push(url);
              });
              setValues({ ...values, documents: urls });
            } catch (ex) {
              console.log(ex);
              throw ex;
            }

            console.log(values);
          }}
        >
          <Form autoComplete="false">
            {currentStep == 1 && <StepOne />}
            {currentStep == 2 && <StepTwo />}
            {currentStep == 3 && <StepThree />}
            {currentStep == 4 && <StepFour setFiles={setDocs} />}
          </Form>
        </Formik>
        <div className="self-end">
          <Button
            id="0"
            text="Back"
            onClick={changeStep}
            disabled={currentStep <= 1}
          />
          {currentStep != 4 && (
            <Button id="1" text="Next" onClick={changeStep} />
          )}
          {currentStep == 4 && <button type="submit">Submit</button>}
        </div>
      </div>
    </div>
  );
};

export default AppForm1;
