import './overview.css';
import Form, { SimpleItem, Label, GroupItem } from 'devextreme-react/form';
// import { Alert } from 'react-bootstrap';
// import student from '../../constants/student';
import { AdminProfile } from '@egst.frontend/dashboard';

import { useSelector } from 'react-redux';
import { getUser, UpcomingEvents } from '@egst.frontend/shared';

export default function Overview() {

  const user = useSelector(getUser);

  // const {
  //   profile: { personal, applicant },
  // } = student;

  return (
    <>
      <div className='overview-container'>
        <div className='title-container'>
          <i className='fa-solid fa-columns text-white'></i>
          <h3>Student Overview</h3>
        </div>
        <div className='overview-content'>
          {/* <div className='welcome w-25 mt-3 mx-3'>
            
          </div> */}
          <div className='personal col-later'>
            <div className='profile-img'>
              {/* <img src={personal.profileImage} alt='profile' width={'100%'} /> */}
              <div className='xl-avatar'>
                <p>{Array.from(user.email)[0].toLocaleUpperCase()}</p>
              </div>
              
            </div>
            <div className='w-60 full-later'>
              <p className='fs-4'>
                <div className='fw-bolder'> <span style={{ fontSize: '12px'}}> Email: </span> {user.email} </div> 
              </p>
              <p className='fs-4'>
                <div className='fw-bolder'> <span style={{ fontSize: '12px'}}> Full Name: </span>{user.fullName}  </div> 
              </p>
              <p className='fs-4'>
                <div className='fw-bolder'> <span style={{ fontSize: '12px'}}> Current Year: </span> {' '} </div>
                {/* {applicant.year} */}
              </p>
            </div> 

            {/* <AdminProfile /> */}
          </div>
          <div className='upcoming-events--container'>
            <h3>
              Upcoming Event
            </h3>
            {/* <Alert>No event for now</Alert> */}
          </div>
         <UpcomingEvents />
        </div>
      </div>
    </>
  );
}
