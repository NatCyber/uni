import { StatusCard } from '@egst.frontend/shared';
import styles from '../student.module.css';
import { ProgressLine } from 'libs/shared/src/lib/components/ProgressLine';

import Forms from './Forms';
import NavBar from '../navBar';


interface Props { }

const Application = () => {

  return (
    <div className={styles['application']}>
      <div
        style={{ marginBottom: "30px" }}>
        <NavBar />
      </div>

      <div className={styles['application-container']}>
        <div className={styles['application-stage']}>
          <h4> Application Status </h4>
          <StatusCard status="stage-dot_active" label="Personal Information" />

          <ProgressLine />
          <StatusCard status="stage-dot" label="Address Information" />
          <ProgressLine />
          <StatusCard status="stage-dot" label="Educational Backgroung" />
          <ProgressLine />
          <StatusCard status="stage-dot" label="Church Affilation " />
          <ProgressLine />
          <StatusCard status="stage-dot" label="Finances" />
          <ProgressLine />
          <StatusCard status="stage-dot" label="Programme of Study" />
          <ProgressLine />
          <StatusCard status="stage-dot" label="Attachments" />

          <ProgressLine />
          <StatusCard status="stage-dot" label="Complete" />
        </div>
        <div className={styles['application-main-container']}>
          {/* <h2> Application </h2> */}
          <Forms />
        </div>
      </div>
    </div>
  );
};

export default Application;
