import { DateBox } from 'devextreme-react';
import DropDownSelector from './components/DropDownSelector';
import { Field } from 'formik';
import CustomInput from './components/CustomInput';

const StepOne = () => {
  const Titles = [{ title: 'Mr' }, { title: 'Mrs' }, { title: 'Mis' }];

  const Gender = [{ gender: 'Male' }, { gender: 'Female' }];

  const MaritalStatus = [
    { maritalStatus: 'Single' },
    { maritalStatus: 'Married' },
    { maritalStatus: 'Engaged' },
    { maritalStatus: 'Widowed' },
    { maritalStatus: 'Divorced' },
    { maritalStatus: 'Remarried' },
  ];

  return (
    <>
      <p className="my-2">Personal Information</p>
      <div className="flex gap-6 flex-wrap w-[950px]">
        <CustomInput name="personalInformation.firstName" label="First Name" />
        <CustomInput
          name="personalInformation.middleName"
          label="Middle Name"
        />
        <CustomInput name="personalInformation.lastName" label="Last Name" />
        <DropDownSelector
          name="personalInformation.personalTitle"
          options={Titles}
          displayExpr={'title'}
          valueExpr={'title'}
          label={'Select Title'}
        />
        <DropDownSelector
          name="personalInformation.nationality"
          options={Titles}
          displayExpr={''}
          valueExpr={''}
          label={'Nationality'}
        />
        <CustomInput
          name="personalInformation.dob"
          type="date"
          label="Birth Date"
          height={34}
        />
        <DropDownSelector
          name="personalInformation.gender"
          options={Gender}
          displayExpr={'gender'}
          valueExpr={'gender'}
          label={'Gender'}
        />
        <CustomInput name="personalInformation.occupation" label="Occupation" />
      </div>
      <p className="my-2">Current Address</p>
      <div className="flex flex-wrap gap-6 w-[950px]">
        <CustomInput name="address.country" label="Country" />
        <CustomInput name="address.region" label="Region" />
        <CustomInput name="address.city" label="City" />
        <CustomInput name="address.subcity" label="Sub-City" />
        <CustomInput name="address.woreda" label="Woreda" />
        <CustomInput name="address.houseNo" label="House No." />
        <CustomInput name="address.passportNo" label="Passport No." />
        <CustomInput name="address.mobileNo" label="Phone" />
        <CustomInput name="address.postNo" label="Postal Address" />
        <CustomInput name="address.email" label="Email" />
        <CustomInput name="address.fax" label="Fax No." />
      </div>
      <p className="my-2">Church Affiliation</p>
      <div className="flex flex-col flex-wrap w-[650px]">
        <div className="flex gap-9">
          <CustomInput
            name={'churchAffiliation.denomination'}
            label="Denomination"
          />
          <CustomInput
            name={'churchAffiliation.localChurch'}
            label="Local Church"
          />
        </div>
        <textarea
          name={'churchAffiliation.positionMinistryInvolvement'}
          placeholder="Position/Ministry Involvement "
          className=" border rounded-md p-3 mt-3 w-[600px] h-[100px]"
        />
      </div>
      <div className="flex gap-6 my-4">
        <DropDownSelector
          name={'personalInformation.maritalStatus'}
          options={MaritalStatus}
          valueExpr={'maritalStatus'}
          displayExpr={'maritalStatus'}
          label={'Marital Status'}
        />
        <CustomInput
          name={'personalInformation.spouseName'}
          label="Spouse's Name"
        />
        <CustomInput
          name={'personalInformation.noOfChildren'}
          type="number"
          label={'Number of Children'}
        />
      </div>
    </>
  );
};

export default StepOne;
