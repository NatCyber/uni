import { FieldArray } from "formik";
import Input from "../../components/Input";
import Button from "../../components/Button";

const EducationBack = () => {
  return (
    <FieldArray name="educationBackground">
      {({ push, remove, form }) => {
        const { values: { educationBackground } } = form;

        return (
          <div>
            {educationBackground.map((eb: any, index: number) => (
              <div key={index}>

                <div style={{ width: '70%', display: 'flex', flexDirection: 'column', background: '#F8F8F8', padding: '20px', marginBottom: '10px' }}>
                  <h3> Educational Background </h3>
                  <div style={{ display: 'flex' }} >
                    <Input
                      style={{
                        width: '300px',
                        padding: '6px',
                        borderRadius: '5px',
                        marginTop: '8px',
                        border: "skyBlue 1px solid"
                      }}
                      label="Institution Name"
                      name={`educationBackground[${index}].institutionName`}
                    />
                    <Input
                      style={{
                        width: '300px',
                        padding: '6px',
                        borderRadius: '5px',
                        marginTop: '8px',
                        border: "skyBlue 1px solid"
                      }}
                      label="Institution Address"
                      name={`educationBackground[${index}].institutionAddress`}
                    />
                  </div>
                  <div style={{ display: 'flex' }} >
                    <Input
                      style={{
                        width: '300px',
                        padding: '6px',
                        borderRadius: '5px',
                        marginTop: '8px',
                        border: "skyBlue 1px solid"
                      }}
                      label="Admission Year" name={`educationBackground[${index}].admissionYear`} />
                    <Input
                      style={{
                        width: '300px',
                        padding: '6px',
                        borderRadius: '5px',
                        marginTop: '8px',
                        border: "skyBlue 1px solid"
                      }}
                      label="Graduation Year" name={`educationBackground[${index}].graduationYear`} />
                  </div>
                  <div style={{ display: 'flex' }} >
                    <Input
                      style={{

                        width: '300px',
                        padding: '6px',
                        borderRadius: '5px',
                        marginTop: '8px', border: "skyBlue 1px solid"
                      }}
                      label="Credential Awarded" name={`educationBackground[${index}].credentialAwarded`} />
                    <Input
                      style={{
                        width: '300px',
                        padding: '6px',
                        borderRadius: '5px',
                        marginTop: '8px',
                        border: "skyBlue 1px solid"
                      }}
                      label="Credit Hours Earned" name={`educationBackground[${index}].creditHoursEarned`} />
                  </div>
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