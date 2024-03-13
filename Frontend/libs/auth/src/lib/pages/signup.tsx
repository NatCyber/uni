import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../auth.module.css';

import { FcGoogle } from 'react-icons/fc';
import {
  InputBox,
  ButtonField,
  LinkField,
  Splitter,
  ErrorMessage,
} from '@egst.frontend/shared';

import { useSignupMutation } from '../../../../shared/src/lib/services/authApi';
import { useSelector } from 'react-redux';
import { getRegstrationStatus } from '../../../../shared/src/lib/state/authSlice';

function Signup() {
  const navigate = useNavigate();
  // const dispatch = useAppDispatch();
  const [authErr, setAuthErr] = useState<string>('');
  const [showErr, setShowErr] = useState<boolean>(false);

  const [userValues, setUserValues] = useState<any>({
    email: '',
    password: '',
    fullName: '',
  });

  const status = useSelector(getRegstrationStatus);

  // const [loginUser, { isLoading, isError, error, isSuccess }] =
  //   useLoginUserMutation();

  // const LoginWithEmailandPassword = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   // setLoggingIn(true);
  //   loginUser(userValues).then((data: any) => {
  //     if (data.error) {
  //       // console.log(data.error.data.msg);
  //       setAuthErr(data.error.data.msg.toString());
  //       setShowErr(true);
  //       // setLoggingIn(false);
  //       setTimeout(() => {
  //         setShowErr(false);
  //       }, 5000);
  //     } else {
  //       dispatch(setUser(data));
  //       localStorage.setItem('token', data.data.token);
  //       // setLoggingIn(false);
  //       navigate('/');
  //     }
  //   });
  // };

  // console.log(userValues);

  const goToSignup = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    navigate('/');
  };

  const withWithGoogle = {
    width: '99%',
    padding: '11px',
    marginTop: 30,
    background: '#fff',
    color: '#000',
    fontWeight: 100,
    fontSize: 13,
    borderRadius: 10,
    cursor: 'pointer',
    border: '#bfbfbf 1px solid',
    display: 'flex',
    justifyContent: 'center',
  };

  const InputBoxStyle = {
    width: '94%',
    maxWidth: '',
    fontSize: 13,
    paddingLeft: '2%',
    height: 35,
    border: 'none',
    borderBottom: '1px solid #000',
    padding: '5px 10px',
    outline: 'none',
    outlineBottom: '3px solid #000',
    marginTop: 20,
  };

  const createAccountBtnStyle = {
    background: 'none',
    border: 'none',
    color: 'black',
    width: '100%',
    marginTop: 15,
    cursor: 'pointer',
    textDecoration: 'none',
  };

  const submitBtnStyle = {
    width: '100%',
    height: 35,
    marginTop: 20,
    background: '#000',
    color: '#fff',
    fontWeight: 300,
    // borderRadius: 10,
    cursor: 'pointer',
    border: 'none',
  };

  const ErrorMessageStyles = {
    display: 'flex',
    fontSize: '12px',
    marginTop: '15px',
    background: '#ff5858e5',
    color: '#ffffff',
    padding: '5px',
    borderRadius: '5px',
  };

  // console.log("user values", userValues);

  const inputs = [
    {
      id: 1,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errMessage: 'Enter a valid email',
      pattern: '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$',
      required: true,
      className: 'input-style',
    },
    {
      id: 2,
      name: 'fullName',
      type: 'text',
      placeholder: 'Full Name',
      errMessage: 'Enter your full name',
      pattern: '^[a-zA-Z]+ [a-zA-Z]+$',
      required: true,
      className: 'input-style',
    },
    {
      id: 3,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errMessage:
        'Password must be at least 1 upper case, numeric, and special character',
      // pattern: '^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$',
      required: true,
      className: 'input-style',
    },
    {
      id: 4,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm password',
      errMessage: 'Password do not match',
      pattern: userValues.password,
      required: true,
      className: 'input-style',
    },
  ];


  const [registerUser, { isLoading: registering, isSuccess:registered, isError:regErr }] = useSignupMutation();
 
  const setUserData = (e: any) => {
    setUserValues({ ...userValues, [e.target.name]: e.target.value });
  };

  const SignupWithEmailandPassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    registerUser(userValues)
      .then(() => {
       status === 'success' ? navigate('/login') : navigate('/signup');
       console.log('stat: ', status)
      })
      .catch((error) => {
        // console.error("Error:", error);
      });
    // console.log("user data", userValues)
  };
  
  console.log('stat 2: ', status)
  
  return (
    <div className={styles['auth-page']}>
      <div
        style={
          {
            // backgroundImage: `url(${authBg})`,
          }
        }
        className={styles['auth-headline']}
      ></div>

      <div className={styles['auth-container']}>
        <div className={styles['auth-header']}>
          <h2> Create an EGST account </h2>
          <p
            style={{
              color: '#6a6a6a',
              fontSize: '13px',
              paddingTop: '7px',
            }}
          >
            Ethiopian Graduate School of Theology
          </p>
        </div>
        <div className={styles['auth-form']}>
          <div className={styles['continue-with-google']}>
            <ButtonField
              value="Log in with Google"
              name="Log in with Google"
              icon={
                <FcGoogle style={{ fontSize: '15px', marginRight: '5px' }} />
              }
              style={{
                ...withWithGoogle,
              }}
            />
          </div>

          <Splitter value="or" />

          <form onSubmit={SignupWithEmailandPassword}>
            {inputs.map((input) => (
              <InputBox
                key={input.id}
                {...input}
                className={styles[input.className]}
                value={userValues[input.name]}
                inputValue={setUserData}
              />
            ))}
            {/* {isLoading == false && ( */}
            <ButtonField
              value="Log in"
              style={{
                ...submitBtnStyle,
              }}
            />
            {/* )}  */}

            {/*
            {isLoading == true && (
              <Preloader
                alt="logging in"
                src={Preloading}
                style={{
                  width: '97%',
                  height: '26px',
                  padding: '5px',
                  top: '15px',
                  margin: '4px auto 15px',
                  backgroundColor: '#e7e7e78c',
                  position: 'relative',
                  borderRadius: '10px',
                }}
              />
            )} */}
          </form>
        </div>
        <div className={styles['create-account']}>
          <LinkField
            onClick={goToSignup}
            name="create an account"
            style={{
              ...createAccountBtnStyle,
            }}
            value={
              <p>
                Don't have an accout?
                <span style={{ color: 'orange' }}> Sign up for free </span>
              </p>
            }
          />
        </div>
        {showErr === true ? (
          <ErrorMessage
            errorMessage={authErr}
            style={{ ...ErrorMessageStyles }}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Signup;
