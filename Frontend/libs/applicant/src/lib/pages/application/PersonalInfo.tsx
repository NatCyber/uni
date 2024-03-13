import { useSelector } from 'react-redux';
import Input from '../../components/Input';
import { Field, ErrorMessage } from 'formik';
import { getAllPrograms } from '@egst.frontend/shared';
import { SelectBox } from 'devextreme-react';

export default function PersonalInformation() {
  type DropDownOption = {
    key: string;
    value: string;
    disabled?: boolean;
    defaultCheck?: boolean;
  };

  const genderOptions: Array<DropDownOption> = [
    {
      key: 'Please Select',
      value: '',
      disabled: true,
      defaultCheck: true,
    },
    {
      key: 'Male',
      value: 'male',
    },
    {
      key: 'Female',
      value: 'female',
    },
    {
      key: 'Other',
      value: 'other',
    },
  ];

  const martialStatusOptions: Array<DropDownOption> = [
    {
      key: 'Please Select',
      value: '',
      disabled: true,
      defaultCheck: true,
    },
    {
      key: 'Single',
      value: 'single',
    },
    {
      key: 'Married',
      value: 'married',
    },
    {
      key: 'Engaged',
      value: 'engaged',
    },
    {
      key: 'Widowed',
      value: 'widowed',
    },
    {
      key: 'Divorced',
      value: 'divorced',
    },
    {
      key: 'Remarried',
      value: 'remarried',
    },
  ];

  return (
    <div className="application-content">
      <div className="form-display">
        <div>
          <h3 className=""> Personal Information </h3>
        </div>
        <div className="form-section">
          <Input
            className="input-man"
            name="personalInformation.fullName"
            placeholder="Berry Alan"
            label="Full Name"
          />
          <Input
            className="input-man"
            type="tel"
            name="personalInformation.phoneNo"
            placeholder="Phone"
            label="Phone"
          />
        </div>

        <div className="form-section">
          <Input
            className="input-man"
            type="date"
            name="personalInformation.dob"
            label="Date of birth"
          />
        </div>

        <div className="form-section">
          <Input
            className="input-man"
            name="personalInformation.personalTitle"
            placeholder="Mr / Mrs"
            label="Personal Title"
          />
          <Input
            className="input-man"
            name="personalInformation.occupation"
            placeholder="Software Engineer"
            label="Occupation"
          />
        </div>

        <div className="form-section">
          <Input
            className="input-man"
            name="personalInformation.nationality"
            placeholder="Ethiopian"
            label="Nationality"
          />
        </div>

        <div className="form-section">
          <Input
            className="input-man"
            as="select"
            label="Gender"
            name="personalInformation.gender"
            options={genderOptions}
          />
        </div>

        <div className="form-section">
          <Input
            className="input-man"
            as="select"
            label="Martial Status"
            name="personalInformation.martialStatus"
            options={martialStatusOptions}
          />
        </div>
        <div>
          <h3 className=""> Program </h3>
        </div>
      </div>
    </div>
  );
}
