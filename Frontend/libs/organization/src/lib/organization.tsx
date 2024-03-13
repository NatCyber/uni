import Orgform from './components/Orgform';
import Orgtreelist from './components/Orgtreelist';
import styles from './organization.module.css';
/* eslint-disable-next-line */

export const Organization = () => {
  return (
    <div className={styles['container']}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Orgtreelist />
      </div>
    </div>
  );
};

export default Organization;
