import React from 'react';
import styles from "../dashboard.module.css";
import { useGetStudentApplicationsQuery } from '@egst.frontend/shared';

interface Props {
  notificationicon: any,
  notificationcount?: number | null,
  className?: string,
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const Notification = (props: Props) => {

  const { notificationicon, notificationcount, onClick, className } = props;

  const { data, error } = useGetStudentApplicationsQuery(null);

  return (
    <div
      onClick={onClick}
      className={className}>
      <div>
        {notificationicon}
      </div>
      <span
        className={styles['notification-counter']}
      >
        {data ? data.length : 0}
      </span>
    </div>
  );
}

export default Notification;

