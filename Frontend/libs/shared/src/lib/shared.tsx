import styles from './shared.module.css';
import AcademicSession from './AccademicSession/AcademicSession';

/* eslint-disable-next-line */
export interface SharedProps {}

export function Shared(props: SharedProps) {
  
  return (
    <div className={styles['container']}>
      <h1>Welcome to Shared!</h1>
    </div>
  );
}

export default Shared;
