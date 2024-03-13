import React, { useState } from 'react';
import styles from '../dashboard.module.css';
import '../style.css'
import { Link } from 'react-router-dom';
import { Splitter } from '@egst.frontend/shared';


interface Props {
  username?: string;
  userrole?: string;
  dropicon?: any;
  className?: any;
}

const AccountCard = (props: Props) => {
  const { username, userrole, dropicon, className } = props;
  
  const handleLogout = () => {
    localStorage.removeItem("persist:root")
    localStorage.removeItem("user")
  }

  const [isProfile, setIsProfile] = useState<boolean>(false)

  return (
    <>
      <div onClick={() => {
        setIsProfile(isProfile == false ? true : false)
      }} className={className}>
        <div className={styles['account-content']}>
          <span className={styles['account-role']}>{userrole}</span>
          <span className={styles['account-name']}>{username}</span>
        </div>
        <div className={styles['account-Icon-container']}>{dropicon}</div>
      </div>
      {isProfile && (
        <>
          <div className='panel-background' onClick={() => {
            setIsProfile(false);
          }}> </div>
          <div className='user-profile-panel'>
            <Splitter />
            <Link to={"/"} onClick={handleLogout}> <p className='user-profile-panel--link'> Sign Out </p>  </Link>
          </div>

        </>

      )}

    </>
  );
};

export default AccountCard;
