import styles from './dashboard.module.css';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { IoIosKeypad, IoIosMenu, IoMdClose } from 'react-icons/io';
import SideBar from './components/sideBar';
import StatusBar from './components/statusBar';

export const Dashboard = () => {
  return (
    <div className={styles['container']}>
      {/* <SideBar /> */}
      <StatusBar />
    </div>
  );
}

export default Dashboard;
