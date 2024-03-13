import { Field, FieldArray } from 'formik';
import React from 'react';
import CustomInput from './CustomInput';
import DropDownSelector from './DropDownSelector';
import { Button } from 'devextreme-react';

const LanguageFields = () => {
  const fluency = [
    { fluency: 'Excellent' },
    { fluency: 'Very Good' },
    { fluency: 'Good' },
  ];
  return (
    <>
      <CustomInput name={'language.motherTongue'} label={'Mother Tongue'} />
      <FieldArray name="language.otherLanguages">
        {({ push, remove, form }) => {
          const {
            values: { language },
          } = form;
          return language.otherLanguages.map((lang, index: number) => (
            <div className="flex flex-wrap gap-6 py-3 w-[900px]" key={index}>
              <CustomInput
                name={`language.otherLanguages[${index}].language`}
                label="Other Language"
              />
              <DropDownSelector
                name={`language.otherLanguages[${index}].fluency`}
                options={fluency}
                valueExpr={'fluency'}
                displayExpr={'fluency'}
                label={'Fluency'}
              />
              {index > 0 && (
                <Button text="Remove" onClick={() => remove(index)} />
              )}
              <Button
                text=" Add Language"
                onClick={() => push({ language: '', fluency: '' })}
              />
            </div>
          ));
        }}
      </FieldArray>
    </>
  );
};

export default LanguageFields;
