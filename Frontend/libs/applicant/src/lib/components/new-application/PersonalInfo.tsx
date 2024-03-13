import Input from "./Input"
import { Field, ErrorMessage } from "formik";
import styles from "../../applicant.module.css"

export default function PersonalInformation() {


  type DropDownOption = {
    key: string,
    value: string,
    disabled?: boolean,
    defaultCheck?: boolean
  }

  const genderOptions: Array<DropDownOption> = [
    {
      key: "Please Select",
      value: "",
      disabled: true,
      defaultCheck: true,
    },
    {
      key: "Male",
      value: "male",
    },
    {
      key: "Female",
      value: "female",
    },
    {
      key: "Other",
      value: "other",
    }
  ];

  const martialStatusOptions: Array<DropDownOption> = [
    {
      key: "Please Select",
      value: "",
      disabled: true,
      defaultCheck: true,
    },
    {
      key: "Single",
      value: "single",
    },
    {
      key: "Married",
      value: "married",
    },
    {
      key: "Engaged",
      value: "engaged",
    },
    {
      key: "Widowed",
      value: "widowed",
    },
    {
      key: "Divorced",
      value: "divorced",
    },
    {
      key: "Remarried",
      value: "remarried",
    },

  ]

  return (
    <div className={styles.applicationContent}>
      <div className={styles.formDisplay}>
        <div className={styles.formSection}>
          <Input className="input-man" name="personalInformation.fullName" placeholder="Berry Alan" label="Full Name" />
          <Input type="tel" name="personalInformation.phoneNo" placeholder="Phone" label="Phone" />
        </div>

        <div className={styles.formSection}>
          <Input type="date" name="personalInformation.dob" label="Date of birth" />
        </div>

        <div className={styles.formSection}>
          <Input name="personalInformation.personalTitle" placeholder="Mr / Mrs" label="Personal Title" />
          <Input name="personalInformation.occupation" placeholder="Software Engineer" label="Occupation" />
        </div>

        <div className={styles.formSection}>
          <Input name="personalInformation.nationality" placeholder="Ethiopian" label="Nationality" />
        </div>

        <div className={styles.formSection}>
          <Input as='select' label="Gender" name='personalInformation.gender' options={genderOptions} />
        </div>

        <div className={styles.formSection}>
          <Input as='select' label="Martial Status" name='personalInformation.martialStatus' options={martialStatusOptions} />
        </div>
      </div>
    </div>
  )
};
