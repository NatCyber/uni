import styles from '../shared.module.css';
import { ProgressLine } from './ProgressLine';

interface Statuscard {
  label?: string;
  status?: string; 
}

export const StatusCard = (props: Statuscard) => {
  const { label, status } = props;

  return (
    <div className={styles['card']}>
      <div className={styles[`${status}`]}></div>
      <div className={styles['card-item']}>
        <p> {label} </p>
      </div>
    </div>
  );
};
