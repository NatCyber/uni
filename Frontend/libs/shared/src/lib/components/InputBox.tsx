import { useState } from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
// import { validEmail, validPassword, validfullName } from '../regex';
import ErrorMessage from './ErrorMessage';
import styles from '../shared.module.css';
import  '../styles.css';
// import "../Auth.css";
// import { Form, Input } from "antd";
// import { useTranslation } from "react-i18next";


/*
  we are gonna have tp pass className Props as {styles[]}
  
*/


interface Props {
  value: string | any;
  label?: string;
  name: string;
  isEditable?: boolean;
  className?: string;
  type: string;
  placeholder?: string;
  inputValue?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  errMessage: any;
  required?: boolean;
  pattern?: any;
  style: {
    width?: string;
    height?: number;
    fontSize?: number;
    fontWeight?: string;
    fontFamily?: string;
    borderColor?: string;
    color?: string;
    padding?: string | number;
    margin?: number;
    marginTop?: number;
    borderRadius?: number;
    border?: string;
    borderBottom?: string;
  };
}

const InputBox = (props: Props) => {
  // const { t } = useTranslation();

  const errMessageStyle = {
    fontSize: '12px',
    padding: '2px',
    borderRadius: '4px',
    // backgroundColor: '#000',
    display: 'flex',
    color: '#ff5858e5',
  };

  const ErrorEssageStyles = {
    display: 'flex',
    fontSize: '12px',
    padding: '2px',
    borderRadius: '4px',
    color: '#ff5858e5',
  };

  const {
    value,
    label,
    name,
    inputValue,
    placeholder,
    type,
    maxLength,
    className,
    style,
    errMessage,
    required,
    pattern,
  } = props;

  const [isInvalid, setisInvalid] = useState<boolean>(false);

  // const handleFocus =(e: any)=> {
  //   setFocused(true);
  // }

  const handleBlur = (e: any) => {
    setisInvalid(false);
  };

  return (
    <div className={styles['input-box-container']}>
    <span>{label}</span>
      <input
        required={required}
        pattern={pattern}
        // data-focused={focused.toString()}
        className={className}
        value={value}
        onChange={inputValue}
        onInvalid={() => setisInvalid(true)}
        onBlur={handleBlur}
        placeholder={placeholder}
        name={name}
        style={{
          ...style,
        }}
        type={type}
        maxLength={maxLength}
      ></input>

      {isInvalid ? (
        <span
          // className="err-message"
          style={{
            ...errMessageStyle,
          }}
        >
          <ErrorMessage
            errorMessage={errMessage}
            style={{
              ...ErrorEssageStyles,
            }}
          />
        </span>
      ) : (
        <></>
      )}
    </div>
  );
};

InputBox.defaultProps = {
  value: '',
  type: 'text',
  isEditable: true,
  style: {},
};

export default InputBox;

