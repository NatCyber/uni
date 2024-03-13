import React, { useState, useEffect } from 'react';
import { ErrorMessage, Field, FormikValues, FieldArray } from 'formik';
import { FormikStep, FormikStepper } from '../../components/FormikStepper';
import * as Yup from 'yup';
import Input from '../../components/Input';
import Agreement from './Agreement';
import PersonalInformation from './PersonalInfo';
import AddressInfo from './AddressInfo';
import Button from '../../components/Button';
import EducationBack from './EducationBack';
import FinanceInfo from './FinanceInfo';
import { useCreateApplicationMutation } from '@egst.frontend/shared';
import styles from '../../applicant.module.css';


export default function ApplicationForm() {

  const [submitApp, { isLoading, isSuccess }] = useCreateApplicationMutation();

  const onSubmit = async (values: FormikValues, h: any) => {
    const result = submitApp({
      BigObject: values,
    }).then((d) => {
      console.log(d);
      alert('application sent!');
      window.location.reload();
    });
    console.log('res', result);
  };

  if (isSuccess) {
    console.log('data', isSuccess);
  }

  const initialValues = {
    personalInformation: {
      fullName: '',
      phoneNo: '',
      personalTitle: '',
      nationality: '',
      dob: '',
      gender: '',
      occupation: '',
      martialStatus: '',
      spouseName: '',
      noOfChildren: '',
    },
    addressInformation: {
      email: '',
      country: '',
      region: '',
      city: '',
      subcity: '',
      woreda: '',
      houseno: '',
      passportNo: '',
      officePhoneNo: '',
      residentPhoneNo: '',
      mobilePhoneNo: '',
      postalAddress: '',
      fax: '',
    },
    educationBackground: [
      {
        institutionName: '',
        institutionAddress: '',
        admissionYear: '',
        graduationYear: '',
        credentialAwarded: '',
        creditHoursEarned: '',
      },
    ],
    churchAffiliation: {
      domination: '',
      localChurch: '',
      positionMinistryInvolvement: '',
      localChurchPastorElder: '',
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
    },
  };

  // if (data) {
  //   console.log("data", data)
  // }

  // if (error) {
  //   console.log(error)
  // }

  const stepperLabels = [
    'Welcome',
    'Personal Information',
    'Address Information',
    'Educational Background',
    'Church Affiliation',
    'Finance Information',
    'Complete',
  ];

  const validationSchema = {
    personalInformation: Yup.object({
      personalInformation: Yup.object({
        // fullName: Yup.string().required("*"),
        // phoneNo: Yup.string().required("*"),
        // personalTitle: Yup.string().required("*"),
        // nationality: Yup.string().required("*"),
        // dob: Yup.string().required("*"),
        // gender: Yup.string().required("*"),
        // occupation: Yup.string().required("*"),
        // martialStatus: Yup.string().required("*"),
        // spouseName: Yup.string(),
        // noOfChildren: Yup.string(),
      }),
    }),
    addressInformation: Yup.object({
      addressInformation: Yup.object({
        // country: Yup.string().required("*"),
        // region: Yup.string().required("*"),
        // city: Yup.string().required("*"),
        // subcity: Yup.string().required("*"),
        // woreda: Yup.string().required("*"),
        // houseno: Yup.string().required("*"),
        // passportNo: Yup.string().required("*"),
        // officePhoneNo: Yup.string().required("*"),
        // residentPhoneNo: Yup.string().required("*"),
        // mobilePhoneNo: Yup.string().required("*"),
        // postalAddress: Yup.string().required("*"),
        // fax: Yup.string().required("*"),
      }),
    }),
    educationBackground: Yup.object({
      educationBackground: Yup.array().of(
        Yup.object().shape({
          // institutionName: Yup.string().required("*"),
          // institutionAddress: Yup.string().required("*"),
          // admissionYear: Yup.string().required("*"),
          // graduationYear: Yup.string().required("*"),
          // credentialAwarded: Yup.string().required("*"),
          // creditHoursEarned: Yup.string().required("*"),
        })
      ),
    }),
    churchAffiliation: Yup.object({
      churchAffiliation: Yup.object({
        // domination: Yup.string().required("*"),
        // localChurch: Yup.string().required("*"),
        // positionMinistryInvolvement: Yup.string().required("*"),
        // localChurchPastorElder: Yup.string().required("*"),
      }),
    }),
  };

  const selectorStyle = {
    margin: '7px 0',
    padding: '5px',
    fontSize: '1em',
    border: '1px solid #6499E9',
    borderRadius: '5px',
  };

  interface InputProps {
    name: string;
    label?: string;
    type?: string;
    as?: string;
    disabled?: boolean;
    value?: any;
    placeholder?: string;
    className?: string;
    upperClass?: string;
  }

  const FormikInput = ({
    name,
    label,
    placeholder,
    className,
    upperClass,
    as,
    type,
    disabled,
    value,
  }: InputProps) => (
    <div className={`${upperClass}`}>
      <div className="flex flex-col m-3">
        <span className="text-sm text-info">{label}</span>
        <Field
          disabled={disabled}
          value={value}
          as={as}
          type={type}
          name={name}
          placeholder={placeholder}
          className={`border border-primary outline-none focus:outline-none focus:border-2 text-lg py-1 px-2 rounded-md ${className}`}
        />
      </div>
    </div>
  );

  return (
    <div className="application-form">
      <FormikStepper
        initialValues={initialValues}
        onSubmit={onSubmit}
        stepperLabels={stepperLabels}
      >
        <FormikStep>
          <Agreement />
        </FormikStep>
        <FormikStep validationSchema={validationSchema.personalInformation}>
          <PersonalInformation />
        </FormikStep>
        <FormikStep validationSchema={validationSchema.addressInformation}>
          <AddressInfo />
        </FormikStep>
        <FormikStep validationSchema={validationSchema.educationBackground}>
          <EducationBack />
        </FormikStep>
        <div className={styles['church_affiliation-container']}>
          <div className={styles['form-title']}>
            <h3 className=""> Church Affiliation </h3>
          </div>
          <div className={styles['church_affiliation-container-form']}>
            <FormikStep validationSchema={validationSchema.churchAffiliation}>
              <div className={styles['--form']}>
                <Input label="Domination" name="churchAffiliation.domination" />
                <Input
                  label="Local Church"
                  name="churchAffiliation.localChurch"
                />
              </div>
              <div className={styles['--form']}>
                <Input
                  label="Position Ministry Involvement"
                  name="churchAffiliation.positionMinistryInvolvement"
                />
                <Input
                  label="Local Church Pastor Elder"
                  name="churchAffiliation.localChurchPastorElder"
                />
              </div>
            </FormikStep>
          </div>
        </div>
        <FormikStep>
          <FinanceInfo />
        </FormikStep>
        <FormikStep>
          <h4>Personal Information</h4>
          <PersonalInformation />
          <h4>Address Information</h4>
          <AddressInfo />
          <h4>Education Background</h4>
          <FieldArray name="educationBackground">
            {({ push, remove, form }) => {
              const {
                values: { educationBackground },
              } = form;
              return (
                <div>
                  {educationBackground.map((eb: any, index: number) => (
                    <div key={index}>
                      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <Input
                          label="Institution Name"
                          name={`educationBackground[${index}].institutionName`}
                        />
                        <Input
                          label="Institution Address"
                          name={`educationBackground[${index}].institutionAddress`}
                        />
                        <Input
                          label="Admission Year"
                          name={`educationBackground[${index}].admissionYear`}
                        />
                        <Input
                          label="Graduation Year"
                          name={`educationBackground[${index}].graduationYear`}
                        />
                        <Input
                          label="Credential Awarded"
                          name={`educationBackground[${index}].credentialAwarded`}
                        />
                        <Input
                          label="Credit Hours Earned"
                          name={`educationBackground[${index}].creditHoursEarned`}
                        />
                        {index > 0 && (
                          <Button
                            text="Delete"
                            style={{ backgroundColor: '#C70039' }}
                            type="button"
                            onClick={() => remove(index)}
                          />
                        )}
                      </div>

                      {educationBackground.length - 1 === index && (
                        <Button
                          text="Add Institution"
                          type="button"
                          onClick={() =>
                            push({
                              institutionName: '',
                              institutionAddress: '',
                              admissionYear: '',
                              graduationYear: '',
                              credentialAwarded: '',
                              creditHoursEarned: '',
                            })
                          }
                        />
                      )}
                    </div>
                  ))}
                </div>
              );
            }}
          </FieldArray>
          <h4> Church Affiliation </h4>

          <Input label="Domination" name="churchAffiliation.domination" />
          <Input label="Local Church" name="churchAffiliation.localChurch" />
          <Input
            label="Position Ministry Involvement"
            name="churchAffiliation.positionMinistryInvolvement"
          />
          <Input
            label="Local Church Pastor Elder"
            name="churchAffiliation.localChurchPastorElder"
          />
          <h4> Finance Information </h4>

          <FinanceInfo />
        </FormikStep>
      </FormikStepper>
    </div>
  );
}
