import Input from "../../components/Input"
import { Field, ErrorMessage } from "formik";

export default function AddressInfo() {

  return (
    <div className="application-content">
      <div className="form-display">
      <div>
          <h3 className=""> Address Information </h3>
        </div>
        <div className="form-section">
          <Input className="input-man" name="addressInformation.country" placeholder="Ethiopia" label="Country" />
          <Input className="input-man" name="addressInformation.region" placeholder="Addis Ababa" label="Region" />
          <Input className="input-man" name="addressInformation.city" placeholder="Addis Ababa" label="City" />
        </div>

        <div className="form-section">
          <Input className="input-man" name="addressInformation.subcity" placeholder="Lideta" label="Sub City" />
          <Input className="input-man" name="addressInformation.woreda" placeholder="Woreda" label="Woreda" />
          <Input className="input-man" name="addressInformation.houseno" placeholder="1122" label="House No." />
        </div>

        <div className="form-section">
          <Input className="input-man" name="addressInformation.email" placeholder="251911223344" label="Mobile Tel." />
          <Input className="input-man" name="addressInformation.mobilePhoneNo" placeholder="251911223344" label="Mobile Tel." />
          <Input className="input-man" name="addressInformation.officePhoneNo" placeholder="011222334455" label="Office Tel." />
          <Input className="input-man" name="addressInformation.residentPhoneNo" placeholder="0012345678" label="Resident Tel." />
        </div>

        <div className="form-section">
          <Input className="input-man" name="addressInformation.passportNo" placeholder="B12345" label="Passport No." />
          <Input className="input-man" name="addressInformation.postalAddress" placeholder="1111" label="Postal Code" />
          <Input className="input-man" name="addressInformation.fax" placeholder="1122" label="Fax No." />
        </div>



        {/* <div className="form-section">
                <Input name="addressInformation.martialStatus" label="Martial Status" />
              </div> */}
      </div>
    </div>
  )
};
