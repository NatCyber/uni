import { Field, Formik, Form, FormikValues } from "formik";
import { useState } from "react";

const FinanceInfo = () => {
  const finances = [
    {
      id: '1',
      anticipate: 'My Denomination',
      givenName: '',
      fund: 0,
      active: false,
    },
    {
      id: '2',
      anticipate: 'My Local Church',
      givenName: '',
      fund: 0,
      active: false,
    },
    {
      id: '3',
      anticipate: 'Donor Organization',
      givenName: '',
      fund: 0,
      active: false,
    },
    {
      id: '4',
      anticipate: 'My Office',
      givenName: '',
      fund: 0,
      active: false,
    },
    {
      id: '5',
      anticipate: 'Friends',
      givenName: '',
      fund: 0,
      active: false,
    },
    {
      id: '6',
      anticipate: 'Personal Funds',
      givenName: '',
      fund: 0,
      active: false,
    },
    {
      id: '7',
      anticipate: 'Other Sources',
      givenName: '',
      fund: 0,
      active: false,
    },
  ]

  interface InputProps {
    name: string,
    label?: string,
    type?: string,
    as?: string,
    disabled?: boolean,
    value?: any
    placeholder?: string,
    className?: string,
    upperClass?: string,
  }

  const FormikInput = ({ name, label, placeholder, className, upperClass, as, type, disabled, value }: InputProps) => (
    <div className={`${upperClass}`}>
      <div className='flex flex-col m-3'>
        <span className="text-sm text-info">{label}</span>
        <Field
          disabled={disabled}
          value={value}
          as={as}
          type={type}
          name={name}
          placeholder={placeholder}
          className={`border border-primary outline-none focus:outline-none focus:border-2 text-lg py-1 px-2 rounded-md ${className}`}
        />
      </div>
    </div>
  )

  const initialValues: any = {
    finances: finances
  };


  return (
    <div className="mt-6 finance-information_cont">
      {/* <h4 className='text-primary text-xl mx-2 mt-2'>Funds Expected. <i>Apply if any.</i></h4> */}
      {finances.map((s, i) => (
        <div key={i} style={{ width: 'fit-content', display: 'flex', flexDirection: 'column'}} className='sm:w-full flex ml-3 finance-information_cont--block'> <h4>{s.anticipate}</h4>
          <div style={{ width: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

            <div className='flex items-center justify-start w-full h-full'>

            </div>
          </div>
          {/* <div className='w-full flex flex-wrap'> */}

          <div className='' style={{ }}>  {/* funds-container */}
         
            <span style={{ position: 'relative', bottom: '-10px', left: '15px' }}> Give Name </span>
            <FormikInput
              // label='Give Name'
              upperClass='sm:w-1/2 min-[0px]:w-full'
              name={`financeInformation[${i}].givenName`}
              disabled={false}
              className="input-man"
            // disabled={!values.finances[i]?.active}
            // value={
            //   values.finances[i]?.active
            //     ? values.finances[i].givenName
            //     : ''
            // }
            />
            <span style={{ position: 'relative', bottom: '-10px', left: '15px' }}> Amount of Funds Expected (ETB) </span>
            <FormikInput
              upperClass='sm:w-1/2 min-[0px]:w-full'
              // label='Amount of Funds Expected (ETB)'
              type="number"
              name={`financeInformation[${i}].fund`}
              disabled={false}
              className="input-man"
            // disabled={!values.finances[i]?.active}
            // value={
            //   values.finances[i]?.active
            //     ? values.finances[i].fund
            //     : ''
            // }  
            />
          </div>
          <div className="checkbox--block">
            <Field
              className='mr-2 h-4 w-4 rounded border-primary text-indigo-600 focus:ring-primary'
              type="checkbox"
              name={`finances[${i}].active`}
              onClick={ ()=> console.log(finances[i].active)}
            />
            <label style={{ marginLeft: '3px' }} htmlFor={`finances[${i}].anticipate`}>{s.anticipate}</label>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FinanceInfo;
