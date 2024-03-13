import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  IoIosContacts,
  IoIosKeypad,
  IoIosPeople,
  IoIosSchool,
  IoMdClose,
} from 'react-icons/io';
import { GoFileSubmodule } from 'react-icons/go';
import { MdClass } from 'react-icons/md';

import { AiOutlineDownCircle, AiOutlineUpCircle } from 'react-icons/ai';
import { TiGroup } from 'react-icons/ti';

import { useNavigate } from 'react-router-dom';
import { RiNotificationBadgeLine } from 'react-icons/ri';
import { GiClassicalKnowledge, GiTeacher } from 'react-icons/gi';
import { TbReport } from 'react-icons/tb';
import {
  MdAccountCircle,
  MdAppRegistration,
  MdHistoryEdu,
  MdOutlineManageAccounts,
  MdSpaceDashboard,
  MdSupervisorAccount,
} from 'react-icons/md';
import styles from '../dashboard.module.css';
import Logo from '../assets/egst-logo.png';
import LogoSmall from '../assets/egst-logo-small.png';
import ButtonField from './ButtonField';
import { BsPeopleFill } from 'react-icons/bs';

const SideBar = ({ children }: any) => {
  const navigate = useNavigate();
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(true);
  const [activeIndex, setActiveIndex] = useState();

  const buttons = [
    {
      id: 1,
      name: 'Dashboard',
      value: 'Dashboard',
      className: 'link',
      url: '/dashboard',
      icon: <MdSpaceDashboard style={{ marginRight: '10px' }} />,
    },
    {
      id: 2,
      name: 'Students',
      value: 'Students',
      className: 'link',
      url: '',
      icon: <IoIosContacts style={{ marginRight: '10px' }} />,
      subRoutes: [
        {
          id: 1,
          name: 'Applicants',
          url: '/applicants',
          icon: <GoFileSubmodule style={{ marginRight: '10px' }} />,
          class: 'option',
        },
        {
          id: 2,
          name: 'Current Students',
          url: '/Students',
          icon: <BsPeopleFill style={{ marginRight: '10px' }} />,
          class: 'option',
        },
      ],
    },
    {
      id: 3,
      name: 'Instructors',
      url: '/instructors',
      value: 'Instructors',
      className: 'link',
      icon: <GiTeacher style={{ marginRight: '10px' }} />,
    },
    {
      id: 4,
      name: 'Academics',
      value: 'Academic',
      className: 'link',
      icon: <IoIosSchool style={{ marginRight: '10px' }} />,
      subRoutes: [
        {
          id: 1,
          name: 'Courses',
          url: '/course',
          icon: <MdHistoryEdu style={{ marginRight: '10px' }} />,
          class: 'option',
        },
        {
          id: 2,
          name: 'Programs',
          url: '/programs',
          class: 'option',
          icon: <GiClassicalKnowledge style={{ marginRight: '10px' }} />,
        },
        {
          id: 3,
          name: 'Course Offering',
          url: '/course-offering',
          icon: <MdClass style={{ marginRight: '10px' }} />,
          class: 'option',
        },
        {
          id: 4,
          name: 'Batch Management',
          url: '/batch',

          icon: <TiGroup style={{ marginRight: '10px' }} />,
          class: 'option',
        },
      ],
    },
    // {
    //   id: 5,
    //   name: 'Notice Board',
    //   value: 'Notice Board',
    //   className: 'link',
    //   icon: <RiNotificationBadgeLine style={{ marginRight: '10px' }} />,
    // },
    {
      id: 6,
      name: 'Admission',
      url: '#',
      value: 'Admission',
      className: 'link',
      icon: <MdAppRegistration style={{ marginRight: '10px' }} />,
    },
    {
      id: 7,
      name: 'Marks & Result',
      value: 'Marks & Result',
      className: 'link',
      icon: <TbReport style={{ marginRight: '10px' }} />,
    },
    {
      id: 8,
      name: 'Account',
      value: 'Account',
      url: '/dashboard/profile',
      className: 'link',
      icon: <MdAccountCircle style={{ marginRight: '10px' }} />,
    },
    {
      id: 9,
      name: 'Users',
      value: 'Users',
      className: 'link',
      icon: <MdSupervisorAccount style={{ marginRight: '10px' }} />,
    },
    {
      id: 10,
      name: 'Session',
      value: 'Session',
      className: 'link',
      url: '/sessions',
      icon: <MdOutlineManageAccounts style={{ marginRight: '10px' }} />,
    },
  ];

  return (
    <div style={{ display: 'flex' }}>
      {isSideBarOpen == true ? (
        <div>
          <div className={styles['logo-container']}>
            <img className={styles['logo']} src={Logo} />
          </div>
          <div className={styles['side-bar']}>
            <div className={styles['side-bar-container']}>
              <div className={styles['title-bar']}>
                <h2> Dashboard </h2>
                <span
                  style={{
                    position: 'relative',
                    right: '-10px',
                    height: 'fit-content',
                    fontSize: '20px',
                    fontWeight: '700',
                    padding: '20px',
                    paddingBottom: '0',
                    paddingTop: '20px',
                    cursor: 'pointer',
                    float: 'right',
                  }}
                  onClick={() => {
                    setIsSideBarOpen(isSideBarOpen === true ? false : true);
                  }}
                >
                  <IoMdClose />
                </span>
              </div>
              <div className={styles['links']}>
                {buttons.map((button, id) =>
                  button.subRoutes ? (
                    <div key={id}>
                      <div style={{ display: 'flex' }}>
                        <ButtonField
                          value={isSideBarOpen == true ? button.name : ''}
                          className={styles[button.className]}
                          style={
                            activeIndex == button.id
                              ? {
                                  color: 'orange',
                                }
                              : {}
                          }
                          icon={button.icon}
                          onClick={() => {
                            setActiveIndex(button.id);
                          }}
                        >
                          {activeIndex == button.id ? (
                            <AiOutlineDownCircle />
                          ) : (
                            <AiOutlineUpCircle />
                          )}
                        </ButtonField>
                      </div>
                      {activeIndex == button.id &&
                        button.subRoutes.map((option) => {
                          return (
                            <ButtonField
                              key={option.id}
                              icon={option.icon}
                              className={styles[option.class]}
                              value={isSideBarOpen == true ? option.name : ''}
                              onClick={() => {
                                navigate(option.url);
                              }}
                            />
                          );
                        })}
                    </div>
                  ) : (
                    <ButtonField
                      icon={button.icon}
                      key={button.id}
                      className={styles[button.className]}
                      value={isSideBarOpen == true ? button.value : ''}
                      onClick={() => {
                        navigate(button.url);
                      }}
                    />
                  )
                )}
              </div>
              <div className={styles['copyright']}>
                <p>
                  Copyright © Cybersoft p.l.c. <br />
                  All rights reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        isSideBarOpen == false && (
          <>
            <div className={styles['logo-container-small']}>
              <img className={styles['logo-small']} src={LogoSmall} />
            </div>
            <div className={styles['side-bar-container']}>
              <div className={styles['side-bar-mini']}>
                <span
                  style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    padding: '20px',
                    paddingBottom: '0',
                    height: 'fit-content',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    setIsSideBarOpen(isSideBarOpen === false ? true : true);
                  }}
                >
                  {isSideBarOpen === false ? <IoIosKeypad /> : <IoMdClose />}
                </span>
                <div className={styles['links']}>
                  {buttons.map(
                    (button) =>
                      // <div className={styles['link']}>
                      button.subRoutes ? (
                        <>
                          <div style={{ display: 'flex' }}>
                            <ButtonField
                              value={isSideBarOpen == true ? button.name : ''}
                              className={styles[button.className]}
                              style={
                                activeIndex == button.id
                                  ? {
                                      color: 'orange',
                                    }
                                  : {}
                              }
                              icon={button.icon}
                              onClick={() => {
                                setIsOption(!isOption);
                              }}
                            >
                              {activeIndex == button.id ? (
                                <AiOutlineDownCircle />
                              ) : (
                                <AiOutlineUpCircle />
                              )}
                            </ButtonField>
                          </div>
                          {activeIndex == button.id &&
                            button.subRoutes.map((option) => {
                              return (
                                <ButtonField
                                  icon={option.icon}
                                  key={option.id}
                                  className={styles[option.class]}
                                  value={
                                    isSideBarOpen == true ? option.name : ''
                                  }
                                  onClick={() => {
                                    navigate(option.url);
                                  }}
                                />
                              );
                            })}
                        </>
                      ) : (
                        <ButtonField
                          icon={button.icon}
                          key={button.id}
                          className={styles[button.className]}
                          value={isSideBarOpen == true ? button.value : ''}
                          onClick={() => {
                            navigate(button.url);
                          }}
                        />
                      )

                    // </div>
                  )}
                  {/* <ButtonField /> */}
                </div>
              </div>
              <div className={styles['copyright']}>
                <p>
                  Copyright © Cybersoft p.l.c. <br />
                  All rights reserved
                </p>
              </div>
            </div>
          </>
        )
      )}
      <div className="">{children}</div>
    </div>
  );
};

export default SideBar;
