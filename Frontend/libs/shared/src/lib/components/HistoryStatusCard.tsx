import React, { useState } from 'react';
import styles from '../shared.module.css';
import './HistoryStatusCard.css'

interface Props {
  //icon?: any;
  statuText?: string;
  programText?: string;
  applicationDate?: string;
  key?: number;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}
export const HistoryStatusCard = (props: Props) => {
  const { statuText, programText, applicationDate, key, onClick, className } =
    props;

  const [status, setStatus] = useState<string>('Accepted');

  return (
    // <div className={styles['history-card-container']}>
    <div className='application-history--item' >
      {/* <div key={key} className={styles['history-card-content']}> */}
      <div className='application-history-item--header'
      >
        <p className={styles['history-card-date']}>
          {applicationDate}
        </p>
        <p className={styles['history-card-content-program']}>
          {programText}
        </p>
      </div>

      <div style={{ borderRadius: '7px', width: '100px', textAlign: 'center' }} className={status == 'Rejected' ? 'rejected-style' : status == 'Accepted' ? 'accepted-style' : status == 'Pending' ? 'pending-style' : ""}>
        <p className='history-status-label'>{statuText}</p>
      </div>
    </div>
    // </div>

  );
};
