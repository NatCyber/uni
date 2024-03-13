import { useState } from 'react';
import Button from '../../components/Button';
import './applicant.css';
import ApplicationForm from './ApplicationForm';
import RecentApplications from './RecentApplications';

export default function Application() {

  // const [page, setPage] = useState('default');

  // const DefaultPage = () => <div>
  //   <div>
  //     <h1>Start new application now</h1>
  //     <Button text='New Application' onClick={() => setPage('application')} />
  //   </div>
  //   <div>
  //     <RecentApplications />
  //   </div>
  // </div>

  // let CurrentPage = null
  // switch (page) {
  //   case 'default':
  //     CurrentPage = DefaultPage();
  //     break;
  //   case 'application':
  //     CurrentPage = ApplicationForm();
  //     break;
  //   default:
  //     break;
  // }

  return (
    <div className='es-container'>
      <div className='title-container'>
        <i className='fa-solid fa-columns text-white'></i>
        <h3>Application</h3>
      </div>
      <div className="es-content">
        {/* {CurrentPage} */}
        <ApplicationForm />
      </div>
    </div>
  )
};