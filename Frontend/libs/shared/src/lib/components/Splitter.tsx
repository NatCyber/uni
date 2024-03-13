import React from 'react';

interface Props {
  value: string;
  style: {
    width: string;
    height?: number;
    fontSize?: number;
    fontWeight?: string;
    fontFamily?: string;
    borderColor?: string;
    color?: string;
    padding?: number;
    paddingLeft?: number;
    margin?: number;
    marginTop?: number;
    borderRadius?: number;
    border?: string;
    borderBottom?: string;
  };
}

const SplitterTxtStyle = {
  margin: '-9px auto',
  backgroundColor: '#ffffff',
  color: 'gray',
  width: 'fit-content',
  padding: '10px',
  paddingTop: '0',
  paddingBottom: '0',
};

const Splitter = (props: Props) => {
  const { style, value } = props;

  return (
    <div
      style={{
        ...style,
      }}
    >
      <p
        style={{
          ...SplitterTxtStyle,
        }}
      >
        {value}
      </p>
    </div>
  );
};

Splitter.defaultProps = {
  value: '',
  style: {
    width: '100%',
    height: '1px',
    backgroundColor: '#e6e6e6',
    marginTop: '33px',
    marginBottom: '17px',
  },
};

export default Splitter;
