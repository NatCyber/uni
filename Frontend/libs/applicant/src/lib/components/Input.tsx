import { ErrorMessage, Field } from "formik";

type DropDownOption = {
  key: string,
  value: string,
  disabled?: boolean,
  defaultCheck?: boolean
}

interface Props {
  name: string,
  placeholder?: string,
  component?: string,
  type?: string,
  disabled?: boolean,
  label?: string,
  className?: string,
  as?: string,
  options?: Array<DropDownOption>,
  style?: {
    padding?: string,
    margin?: string,
    width?: string,
    border?: string,
    borderRadius?: string,
  }
}

export default function Input({ name, type, disabled, label, className, placeholder, component, style, ...props }: Props) {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', margin: '10px' }}>
      <div style={{ display: 'flex' }}>
        <label htmlFor={name}>{label}</label>
        <div style={{ color: 'red', margin: '0 5px' }}>
          <ErrorMessage name={name} component={component} />
        </div>
      </div>
      {
        props.as === "select" ?
          <Field as={props.as} className={className} disabled={disabled} style={style} type={type} onFocus={(e: any) => { e.target.style.outline = '2px solid #6499E9'; e.target.style.border = 'none'; }} onBlur={(e: any) => { e.target.style.outline = '1px solid #6499E9'; }} name={name} placeholder={placeholder}>
            {props.options?.map((option: DropDownOption) => (
              <option disabled={option.disabled} key={option.key} value={option.value}>{option.key}</option>
            ))}
          </Field> :
          <Field as={props.as} className={className} disabled={disabled} style={style} type={type} onFocus={(e: any) => { e.target.style.outline = '2px solid #6499E9'; e.target.style.border = 'none'; }} onBlur={(e: any) => { e.target.style.outline = '1px solid #6499E9'; }} name={name} placeholder={placeholder} />
      }
    </div>
  )
};

Input.defaultProps = {
  component: 'span',
  type: 'text',
  style: {
    margin: '7px 0',
    padding: '5px',
    fontSize: '1em',
    border: '1px solid #6499E9',
    borderRadius: '5px'
  }
}
