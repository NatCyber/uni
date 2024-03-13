import { FieldArray, Field } from 'formik';
import CustomInput from './CustomInput';
import { Button } from 'devextreme-react';

const EducationFields = () => (
  <FieldArray name="educationBackground">
    {({ push, remove, form }) => {
      const {
        values: { educationBackground },
      } = form;
      return (
        <div>
          {educationBackground.map((edu, index: number) => (
            <div className="flex flex-wrap gap-6 p-4 w-[900px]" key={index}>
              <CustomInput
                name={`educationBackground[${index}].institutionName`}
                label="University Name"
              />
              <CustomInput
                name={`educationBackground[${index}].location`}
                label="Location"
              />
              <CustomInput
                name={`educationBackground[${index}].degree`}
                label="Degree/Credential"
              />
              <CustomInput
                name={`educationBackground[${index}].creditHour`}
                label="Credit Hour Earned"
              />
              {/* <div className="space-x-3"> */}
              {/* <span>From</span>{' '} */}
              <CustomInput
                name={`educationBackground[${index}].from`}
                type="date"
                label={'From'}
              />{' '}
              {/* <span>To</span>{' '} */}
              <CustomInput
                name={`educationBackground[${index}].to`}
                type="date"
                label={'To'}
              />
              {/* </div> */}
              <div className="w-full">
                {index > 0 && (
                  <Button text="Remove" onClick={() => remove(index)} />
                )}

                {educationBackground.length - 1 === index && (
                  <Button
                    text="Add Educational Background"
                    onClick={() =>
                      push({
                        institutionName: '',
                        location: '',
                        degree: '',
                        creditHour: '',
                        from: '',
                        to: '',
                      })
                    }
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      );
    }}
  </FieldArray>
);

export default EducationFields;
