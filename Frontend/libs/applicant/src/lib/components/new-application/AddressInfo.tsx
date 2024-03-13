import Input from "./Input"
import { Field, ErrorMessage } from "formik";
import styles from "../../applicant.module.css"
export default function AddressInfo() {

  return (
    <div className={styles.applicationContent}>
      <div className={styles.formDisplay}>

        <div className={styles.formSection}>
          <Input name="addressInformation.country" placeholder="Ethiopia" label="Country" />
          <Input name="addressInformation.region" placeholder="Addis Ababa" label="Region" />
          <Input name="addressInformation.city" placeholder="Addis Ababa" label="City" />
        </div>

        <div className={styles.formSection}>
          <Input name="addressInformation.subcity" placeholder="Lideta" label="Sub City" />
          <Input name="addressInformation.woreda" placeholder="Woreda" label="Woreda" />
          <Input name="addressInformation.houseno" placeholder="1122" label="House No." />
        </div>

        <div className={styles.formSection}>
          <Input name="addressInformation.mobilePhoneNo" placeholder="251911223344" label="Mobile Tel." />
          <Input name="addressInformation.officePhoneNo" placeholder="011222334455" label="Office Tel." />
          <Input name="addressInformation.residentPhoneNo" placeholder="0012345678" label="Resident Tel." />
        </div>

        <div className={styles.formSection}>
          <Input name="addressInformation.passportNo" placeholder="B12345" label="Passport No." />
          <Input name="addressInformation.postalAddress" placeholder="1111" label="Postal Code" />
          <Input name="addressInformation.fax" placeholder="1122" label="Fax No." />
        </div>



        {/* <div className="form-section">
                <Input name="addressInformation.martialStatus" label="Martial Status" />
              </div> */}
      </div>
    </div>
  )
};
