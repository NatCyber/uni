import styles from './applicant.module.css';
import ApplicationForm from './pages/application/ApplicationForm';
import Navbar from './components/navbar';
import AppSidebar from './components/sidebar';


/* eslint-disable-next-line */
export interface ApplicantProps { }

export function Applicant(props: ApplicantProps) {

  const userObj = localStorage.getItem("user")
  const user = JSON.parse(userObj)

  return (
    <div className={styles['container']}>
      <Navbar
      // sidebarMode={3}
      />
      <div style={{ display: 'flex' }}>
        {user != null && (
          <AppSidebar
            sidebarMode={1}

          />
        )}
        <div style={{ width: '80%', margin: '0 auto' }}>

          <ApplicationForm />
        </div>

      </div>

    </div>
  );
}

export default Applicant;
