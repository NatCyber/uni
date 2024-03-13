import styles from '../shared.module.css';

interface ProgressLine {}

export const ProgressLine = () => {
  return (
    <div className={styles['progress-line-container']}>
      <div className={styles['vertical']}></div>
      {/* <div className={styles['horizontal']}></div> */}
    </div>
  );
};
