import { Field, FieldArray } from 'formik';
import React from 'react';
import CustomInput from './CustomInput';

const FinanceFields = () => {
  return (
    <div>
      <p className="my-3">
        <strong>Finances:</strong> How do you anticipate financing your studies?
        Please check as necessary.
      </p>
      <FieldArray name="financeInformation">
        {({ push, remove, form }) => (
          <div>
            {form.values.financeInformation.map((finance, index) => (
              <div key={index} className="">
                <div className="flex items-center gap-3 mt-5">
                  <Field
                    name={`financeInformation[${index}].active`}
                    type="checkbox"
                  />
                  <p className="w-[150px]"> {finance.anticipate}</p>
                  <CustomInput
                    name={`financeInformation[${index}].givenName`}
                    label="Given Name"
                    disabled={!form.values.financeInformation[index].active}
                  />
                  <CustomInput
                    name={`financeInformation[${index}].fund`}
                    label="Amount/Fund in ETB"
                    type="number"
                    disabled={!form.values.financeInformation[index].active}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </FieldArray>
    </div>
  );
};

export default FinanceFields;
