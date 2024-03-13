import React from 'react';
import { useNavigate } from 'react-router-dom';
import LinkField from '../components/LinkField';
import { IoMdArrowBack } from 'react-icons/io';

function NotFound() {
  const navigate = useNavigate();

  const goBack = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    navigate(-1);
  };

  const gobackbtn = {
    width: '70px',
    margin: '25px auto',
    textDecoration: 'none',
    background: 'none',
    border: 'none',
    color: 'orange',
    display: 'flex',
    cursor: 'pointer',
  };

  return (
    <div
      style={{
        width: '30%',
        margin: '40vh auto',
        textAlign: 'center',
      }}
    >
      <h1> Oops! You seem to be lost </h1>
      <LinkField
        name="back to home"
        style={{
          ...gobackbtn,
        }}
        value="Go back"
        icon={<IoMdArrowBack />}
        onClick={goBack}
      />
    </div>
  );
}

export default NotFound;
