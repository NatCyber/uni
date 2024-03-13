import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountCard from './accountCard';
import { FaBell, FaAngleDown, FaUserCircle } from 'react-icons/Fa';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import Avatar from 'libs/shared/src/lib/components/Avatar';
import styles from '../dashboard.module.css';
import Notification from './notification';

import { useSelector } from 'react-redux';
import { getUser } from '@egst.frontend/shared';
import { Splitter } from '@egst.frontend/shared';
import { useGetStudentApplicationsQuery } from '@egst.frontend/shared';

const HeaderBar = () => {

  const navigate = useNavigate();

  // const user = useSelector(getUser);
  const userObj = localStorage.getItem("user");
  const user = JSON.parse(userObj);


  const { data, error } = useGetStudentApplicationsQuery(null);
  const [isNotification, setIsNotification] = useState(false);

  return (
    <div className={styles['header-bar']}>
      <div className={styles['account-container']}>
        <div className={styles['notification-container']}>

          <Avatar userAvatar={user.email} className={styles['avatar']} />

          <AccountCard
            userrole={user.role}
            username={user.fullName}
            dropicon={<FaAngleDown fill="#fff" fontSize="20px" />}
            className={styles['account-card']}


          />
        </div>
        <Notification
          notificationicon={<FaBell fill="#fff" fontSize="20px" />}
          className={styles['notification-bell']}
          onClick={() => {
            isNotification == false ? setIsNotification(true) : setIsNotification(false)
          }
          }
        />
      </div>

      {isNotification == true && (
        <>
          <div onClick={() => {
            setIsNotification(false);
          }} className={styles['pop-over--background']}>

          </div>
          <div className={styles['notification--lists']}>
            <div className={styles['Notifications-label']}>
              <h4> Notifications </h4>
            </div>
            <Splitter />
            <div className={styles['notification--list']}>
              <span
                className={styles['notification-link']}
                onClick={() => {
                  navigate("/applicants")
                  setIsNotification(false);
                }}> {data?.length} application(s) are waiting to be reviewed </span>
            </div>

          </div>

        </>
      )}



    </div>
  );
};

export default HeaderBar;
