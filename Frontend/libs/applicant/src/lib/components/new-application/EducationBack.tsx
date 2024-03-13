import { FieldArray } from "formik";
import Input from "./Input";
import Button from "./Button";

const EducationBack = () => {
  return (
    <FieldArray name="educationBackground">
      {({ push, remove, form }) => {
        const { values: { educationBackground } } = form;

        return (
          <div>
            {educationBackground.map((eb: any, index: number) => (
              <div key={index}>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                  <Input label="Institution Name" name={`educationBackground[${index}].institutionName`} />
                  <Input label="Institution Address" name={`educationBackground[${index}].institutionAddress`} />
                  <Input label="Admission Year" name={`educationBackground[${index}].admissionYear`} />
                  <Input label="Graduation Year" name={`educationBackground[${index}].graduationYear`} />
                  <Input label="Credential Awarded" name={`educationBackground[${index}].credentialAwarded`} />
                  <Input label="Credit Hours Earned" name={`educationBackground[${index}].creditHoursEarned`} />
                  {
                    index > 0 && <Button text="Delete" style={{ backgroundColor: '#C70039' }} type="button" onClick={() => remove(index)} />
                  }
                </div>

                {
                  educationBackground.length - 1 === index && <Button
                    text="Add Institution"
                    type="button"
                    onClick={() => push({
                      institutionName: '',
                      institutionAddress: '',
                      admissionYear: '',
                      graduationYear: '',
                      credentialAwarded: '',
                      creditHoursEarned: '',
                    })}
                  />
                }
              </div>
            ))}
          </div>
        );
      }}
    </FieldArray>
  )
}

export default EducationBack