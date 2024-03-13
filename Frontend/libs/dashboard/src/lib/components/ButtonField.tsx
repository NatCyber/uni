import React from 'react';
// import { Button } from 'antd'
// import { useTranslation } from 'react-i18next'
// import { COLORS } from 'assets/stlyes/theme'
// import Icon from '../icons/customIcon'

interface Props {
  value: string;
  icon?: any;
  name?: string;
  className?: string;
  children?: any;
  style?: {
    background?: string;
    fontSize?: number;
    fontWeight?: number;
    width: string;
    height?: number;
    padding?: string | number;
    marginTop?: number;
    color?: string;
    borderColor?: string;
    borderRadius?: number;
    border?: string;
    cursor?: string;
    display?: string;
  };
  // htmlType?: 'submit' | 'button' | 'reset' | undefined
  // type: 'primary'
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const ButtonField = (props: Props) => {
  // const { t } = useTranslation()
  const { value, icon, style, onClick, className, children } = props;
  const id = `${value}TextArea`;
  return (
    <button
      style={{
        ...style,
      }}
      className={className}
      onClick={onClick}
      // type={type}
      // htmlType={htmlType}
    >
      {icon} {value} <span style={{ marginLeft: 'auto', paddingTop: '2.5px'}}>{children} </span>
    </button>
  );
};
ButtonField.defaultProps = {
  value: '',
  // style: {
  //   background: '#000',
  //   borderColor: '#000',
  //   color: '#fff',
  //   alignSelf: 'right',
  //   width: '100%',
  //   height: 28,
  //   padding: 2,
  // },
};

export default ButtonField;
