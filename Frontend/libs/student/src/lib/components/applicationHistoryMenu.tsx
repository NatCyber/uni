import styles from '../student.module.css';
//import { FaUserGraduate, FaChalkboardTeacher } from 'react-icons/Fa';
//import { IoIosPeople, IoIosBusiness } from 'react-icons/io';
//import { GiTeacher } from 'react-icons/gi';
import { HistoryStatusCard } from '@egst.frontend/shared';
//import HeaderBar from './headerBar';

const AppHistoryCards = [
  {
    id: 1,
    programName: 'PGD',
    appStatus: 'Pending',
    appDate: 'Dec 09, 9009',
    className: 'historyCard-1',
  },
  {
    id: 2,
    programName: 'PGD',
    appStatus: 'Accepted',
    appDate: 'Dec 09, 9009',
    className: 'historyCard-2',
  },
  {
    id: 3,
    programName: 'PGD',
    appStatus: 'Rejected',
    appDate: 'Dec 09, 9009',
    className: 'historyCard-3',
  },
];

const ApplicationHistoryMenu = () => {

  return (
    <div className={styles['application-history-menu-container']}>
      <h3> Application History </h3>
      {/* <div className={styles['application-history-menu-container']}> */}
        {AppHistoryCards.map((card) => (
          // <button className={styles['status-message-button']}>
            <HistoryStatusCard
              key={card.id}
              programText={card.programName}
              applicationDate={card.appDate}
              statuText={card.appStatus}
              className={styles[card.className]}
            />
          // </button>
        ))}
      {/* </div> */}
    </div>
  );
};

export default ApplicationHistoryMenu;
