import styles from './student.module.css';
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Avatar } from '@egst.frontend/shared';
// import { FaUserCircle } from 'react-icons/Fa';
import { IoIosLogOut } from 'react-icons/io';
import Logo from 'libs/dashboard/src/lib/assets/egst-logo.png';
import Application from './components/application';
import Student from './student';
import ApplicationHistory from './components/applicationHistory';
import { AiFillHome } from 'react-icons/ai';
import { GoFileSubmodule } from 'react-icons/go';

interface Props {
  logo?: string;
  buttons?: any;
}

export function NavBar(props: Props) {
  const [menuisopen, setMenuisopen] = useState<boolean>(false);
  const [isUser, setIsUser] = useState<boolean>(false);

  const navigate = useNavigate();
  const { logo, buttons } = props;

  const logout = () => {
    localStorage.removeItem('sb-liluqjugzijkaigwhiti-auth-token');
    navigate('/');
  };
  return (
    <div className={styles['nav-bar-container']}>
      <div>
        <img className={styles['logo']} src={Logo} />
      </div>
      {menuisopen == true && (
        <div className={styles['user-menu-phone']}>
          <NavLink className={styles['user-menu-link']} to="/student">
            <AiFillHome fontSize={17} style={{ paddingRight: '10px' }} /> Home
          </NavLink>
          <NavLink className={styles['user-menu-link']} to={'/student/apply'}>
            <GoFileSubmodule fontSize={17} style={{ paddingRight: '10px' }} /> Apply
          </NavLink>
          {/* <NavLink className={styles['user-menu-link']} to="/zzzz">
            Application History
          </NavLink> */}
          <span
            className={styles['user-menu-link']}
            style={{ color: '#f13333' }}
          // onClick={() => { }}
          >
            <IoIosLogOut fontSize={17} style={{ paddingRight: '10px' }} />
            Logout
          </span>
        </div>
      )}

      <div className={styles['user-menu']}>
        <div className={styles['menu-items']}>
          <NavLink className={styles['user-menu-link']} to="/student">
            Home
          </NavLink>
          <NavLink className={styles['user-menu-link']} to="/student/apply">
            Apply
          </NavLink>
          {/* <NavLink
            className={styles['user-menu-link']}
            to="/student/applicationhistory"
          >
            Application History
          </NavLink> */}
          <span
            className={styles['user-menu-link']}
            style={{ color: '#f13333' }}
          // onClick={() => { }}
          >
            <IoIosLogOut fontSize={17} style={{ paddingRight: '10px' }} />
            Logout
          </span>
        </div>

        {/* </div> */}
      </div>
      <Avatar
        onClick={() => {
          setMenuisopen(menuisopen === false ? true : false);
        }}
        userAvatar={'eyosaft'}
        className={styles['avatar']}
      />
      {/* <div className={styles['nav-links']}>   */}

      {/* </div>  */}
    </div>
  );
}

export default NavBar;
