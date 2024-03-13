import styles from './student.module.css';
import NavBar from './navBar';
import Application from './components/application';
import ApplicationHistory from './components/applicationHistory';

/* eslint-disable-next-line */
export interface StudentProps { }

export function Student(props: StudentProps) {
  return (
    <div className={styles['container']}>
      <div
        style={{ marginBottom: "30px" }}>
        <NavBar />
      </div>
      <ApplicationHistory />
      {/* <Application /> */}
    </div>
  );
}

export default Student;
