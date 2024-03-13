import React, { useState } from 'react';
import './navbar.css';
import { getUser } from '@egst.frontend/shared';
import { useSelector } from 'react-redux';
import { BiSolidUser } from "react-icons/bi";
// import { FaTimes, FaBars, FaAngleDown, FaBell } from "react-icons/fa";
// import { AccountCard, Avatar, styles } from '@egst.frontend/shared';
import { AccountCard, Notification } from '@egst.frontend/dashboard';
import { Avatar } from '@egst.frontend/shared';
import Logo from '../../resources/img/egst-logo.png'
import { FaAngleDown, FaBars, FaTimes } from 'react-icons/Fa';

interface Props {
  handleSidebar: any,
  sidebarMode: number
}

export default function Navbar({ handleSidebar, sidebarMode }: Props) {

  // const user = useSelector(getUser);
  const userObj = localStorage.getItem("user");
  const user = JSON.parse(userObj)
  const width = window.innerWidth;
  const [isNotification, setIsNotification] = useState(false);

  return (
    <>
      <div className='nav-container'>
        <div className={width <= 1000 ? 'logo-container w-100' : 'logo-container'}>
          <div className='logo'>
            <div className='logo-container--'>
              <img className='logo--' src={Logo} />
              <h5 style={{ margin: '10px' }}> Web portal </h5>
            </div>


            <div className='sidebar-controller' onClick={handleSidebar} style={{ fontSize: '1.2em' }}>
              {sidebarMode === 1 || sidebarMode === 3 ? <FaTimes style={{ cursor: 'pointer' }} /> : <FaBars style={{ cursor: 'pointer' }} />}
              {/* {sidebarMode === 1 || sidebarMode === 3 ? <> I </> : <> I </>} */}
            </div>
          </div>
        </div>
        {width >= 1000 && (
          <>
            <div>
              <h3>EGST Student Portal</h3>
            </div>

            <div className='action-container'>
              {user != null && (
                <div className='sidebar-controller'>
                  {/* <BiSolidUser style={{ fontSize: '1.2em' }} /> */}
                  <div className='header-bar'>
                    <div className='account-container'>
                      <div className='notification-container'>
                        <Avatar
                          userAvatar={user.email}
                          className='avatar'
                        />
                        <AccountCard
                          userrole={user.role}
                          username={user.fullName}
                          dropicon={<FaAngleDown fill="#fff" fontSize="20px" />}
                          className='account-card'
                        />
                        {/* <Notification
                        notificationicon={<FaBell fill="#fff" fontSize="20px" />}
                        className='notification-bell'
                        onClick={() => {
                          isNotification == false ? setIsNotification(true) : setIsNotification(false)
                        }
                        }
                      /> */}
                      </div>

                    </div>
                  </div>
                </div>
              )}
            </div>



          </>
        )}
      </div>
    </>
  );
}
