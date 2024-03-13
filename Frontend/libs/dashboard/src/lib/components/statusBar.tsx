import styles from '../dashboard.module.css';
import { FaUserGraduate, FaChalkboardTeacher } from 'react-icons/Fa';
import { IoIosPeople, IoIosBusiness } from 'react-icons/io';
import { GiTeacher } from 'react-icons/gi';
import Card from './card';
import HeaderBar from './headerBar';

const Cards = [
  {
    id: 1,
    icon: <FaUserGraduate style={{ fontSize: '45px' }} />,
    label: 'Students',
    figure: '34',
    className: 'card-1',
  },
  {
    id: 2,
    icon: <FaChalkboardTeacher style={{ fontSize: '45px' }} />,
    label: 'Teachers',
    figure: '34',
    className: 'card-2',
  },
  {
    id: 3,
    icon: <IoIosPeople style={{ fontSize: '45px' }} />,
    label: 'Employees',
    figure: '30',
    className: 'card-3',
  },
  {
    id: 4,
    icon: <IoIosBusiness style={{ fontSize: '45px' }} />,
    label: 'Departments',
    figure: '10',
    className: 'card-4',
  },
  {
    id: 5,
    icon: <GiTeacher style={{ fontSize: '45px' }} />,
    label: 'Classes',
    figure: '5',
    className: 'card-5',
  },
];

const StatusBar = () => {
  // const iconCall = () => {

  // }

  return (
    <div className={styles['status-bar']}>
      <div>
        {/* <div className={styles['title']}>
          <h3> Status </h3>
        </div> */}
        {Cards.map((card) => (
          <button className={styles['status-message-button']}>
            <Card
              key={card.id}
              icon={card.icon}
              labelText={card.label}
              figure={card.figure}
              className={styles[card.className]}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default StatusBar;
