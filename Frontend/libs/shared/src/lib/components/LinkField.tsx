import React from "react";


interface Props {
  value: any;
  icon?: any;
  name: string;
  style: {
    background?: string;
    fontSize?: number;
    fontWeight?: number;
    width?: string;
    height?: number;
    padding?: string;
    margin?: string;
    marginTop?: number;
    marginRight?: string; 
    color?: string;
    borderColor?: string;
    borderRadius?: number;
    border?: string;
    cursor?: string;
    textDecoration: string;
    display?: string; 
   
  };
  // htmlType?: 'submit' | 'button' | 'reset' | undefined
  // type: 'primary'
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const LinkField = (props: Props) => {
  // const { t } = useTranslation()
  const { value, icon, style, onClick } = props;
  const id = `${value}TextArea`;
  return (
    <button
      style={{
        ...style,
      }}
      onClick={onClick}
      // type={type}
      // htmlType={htmlType}
    >
     {icon} {value}
    </button>
  );
};
LinkField.defaultProps = {
  value: "",
//   type: "primary",
//   isEditable: true,
  style: {
    background: "none",
    border: 'none',
    color: "#0094c1",
    alignSelf: "right",
    textDecoration: 'none',
    width: '100%',
    height: 28,
    padding: 2,
  },
};

export default LinkField;
