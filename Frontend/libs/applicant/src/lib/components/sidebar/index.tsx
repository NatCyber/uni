import './sidebar.css';
import { GrOverview } from 'react-icons/gr';
import { PiStudentBold } from 'react-icons/pi';
import { AiOutlineLogout, AiOutlineHistory } from "react-icons/ai";
import { BsFillRecordCircleFill } from 'react-icons/bs';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { isApplicant, isStudent } from '../../auth';
import { FaUniversity, FaWpforms } from 'react-icons/Fa';

interface Props {
  sidebarMode: number,
  setSidebarMode: any
}

export default function AppSidebar({ sidebarMode, setSidebarMode }: Props) {

  const navigate = useNavigate();

  const [activeIndex, setActiveIndex] = useState(0);
  const { pathname } = useLocation();

  const studentRoutes = [
    { index: 0, path: '/student', icon: <GrOverview />, text: 'Overview' },
    {
      index: 1,
      path: '/student/profile',
      icon: <PiStudentBold />,
      text: 'Student Profile',
      child: [],
    },
    {
      index: 2,
      path: '/student/enrollments',
      icon: <BsFillRecordCircleFill />,
      text: 'Enrollment Record',
    },
    {
      index: 3,
      path: '/student/history',
      icon: <AiOutlineHistory />,
      text: 'Academy History',
    },
    {
      index: 4,
      path: '/student/academics',
      icon: <FaUniversity />,
      text: 'Academics',
    },
  ];

  const applicantRoutes = [
    { index: 0, path: '/applicant', icon: <GrOverview />, text: 'Overview' },
    {
      index: 1,
      path: '/application',
      icon: <FaWpforms />,
      text: 'Application',
      child: [],
    },
  ];

  const sidebarData = () => {
    if (isApplicant()) {
      return applicantRoutes;
    } if (isStudent()) {
      return studentRoutes;
    }
    return [];
  }

  const boxStyle = {
    paddingLeft: '0',
    justifyContent: 'center',
  };

  const logoutStyle = {
    marginLeft: '0',
    justifyContent: 'center',
  };

  const iconOnlyStyle = sidebarMode === 2 ? boxStyle : {};
  const iconOnlyStyle2 = sidebarMode === 2 ? logoutStyle : {};
  // 12 is for computer mode
  const SidbarMode12 = () => (
    <div
      className={
        sidebarMode === 2 ? 'sidebar-container icon-only' : 'sidebar-container'
      }
    >
      <div className='side-contents'>
        <div className='nav-taps'>
          {sidebarData().map((s, i) => (
            <Link
              key={i}
              to={s.path}
              className={
                s.index === activeIndex
                  ? 'side-nav-box active'
                  : 'side-nav-box'
              }
              style={{ ...iconOnlyStyle, textDecoration: 'none', fontSize: '1.2em', color: '#000' }}
              onClick={() => setActiveIndex(s.index)}

            >
              {s.icon}
              {sidebarMode === 1 && <h5>{s.text}</h5>}
            </Link>
          ))}
        </div>
        <div className='nav-logout' style={iconOnlyStyle2}>
          <div className='logout' style={iconOnlyStyle2}>
            {<AiOutlineLogout color='#fff' style={{ fontSize: '1.2em' }} />}
            {sidebarMode === 1 && <h5
            style={{ cursor: 'pointer' }} 
            onClick={() => {
              localStorage.removeItem("persist:root")
              navigate("/")
              location.reload();
            }}>Logout</h5>}
          </div>
        </div>
      </div>
    </div>
  );
  // 34 is for mobile mode
  const SidbarMode34 = () => (
    <div
      className={
        sidebarMode === 4
          ? 'sidebar-container mobile hidden'
          : 'sidebar-container mobile'
      }
    >
      <div className='side-contents'>
        <div className='nav-taps'>
          {sidebarData().map((s, i) => (
            <Link
              key={i}
              to={s.path}
              className={
                s.index === activeIndex
                  ? 'side-nav-box active'
                  : 'side-nav-box'
              }
              style={iconOnlyStyle}
              onClick={() => {
                setActiveIndex(s.index);
                setSidebarMode(4);
              }}
            >
              {s.icon}
              <h5>{s.text}</h5>
            </Link>
          ))}
        </div>
        <div className='nav-logout'>
          <div className='logout w-100' style={{ margin: '0 5px 20px 5px' }}>
            <AiOutlineLogout />
            <h5 onClick={() => {
              navigate("/")
            }}>Logout</h5>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {sidebarMode === 1 || sidebarMode === 2 ? <SidbarMode12 /> : ''}
      {sidebarMode === 3 || sidebarMode === 4 ? <SidbarMode34 /> : ''}
    </>
  );
}
