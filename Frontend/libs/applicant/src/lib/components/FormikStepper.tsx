import React, { ReactNode, useState } from "react";
import { Formik, Form, ErrorMessage, Field, FormikValues, FormikConfig, FormikHelpers } from "formik";
import Stepper from "./Stepper";
import Button from "./Button";

interface FormikStepProps extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {
}

interface FormikStepWithValueProps extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema' | 'initialValues'> {
}

export function FormikStepWithValue({ children, initialValues }: FormikStepWithValueProps) {
  return <>{children}</>
}

export function FormikStep({ children }: FormikStepProps) {
  return <>{children}</>
}

interface FormikStepperProps {
  stepperLabels: Array<string>,
}

export function FormikStepper({ children, ...props }: { children: ReactNode } & FormikConfig<FormikValues> & FormikStepperProps) {
  const childrenArray = React.Children.toArray(children) as React.ReactElement<FormikStepProps>[];
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step] as React.ReactElement<FormikStepProps>;
  const stepperLabels = props.stepperLabels;
  const stepperLength = childrenArray.length - 1;

  const isLastStep = () => step === stepperLength;
  const isFirstStep = () => step === 0;
  return (
    <Formik {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values: FormikValues, helpers: FormikHelpers<FormikValues>) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
        } else {
          setStep(s => s + 1)
        }
      }}
      className='formik'
    > 
      <Form autoComplete="false">
        <Stepper stepperLabels={stepperLabels} step={step} />
        {currentChild}
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '95%', margin: '10px 20px' }}>
          {step > 0 ? <Button style={{ backgroundColor: '#D49B54' }} type="button" onClick={() => setStep(step - 1)} text="Back" /> : <div></div>}
          <Button text={isLastStep() ? 'Submit' : isFirstStep() ? 'Start' : 'Next'} type="submit" />
        </div>
      </Form>
    </Formik>
  )
}
