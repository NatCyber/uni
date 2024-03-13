import React from 'react';
import styles from '../dashboard.module.css';

interface Props {
  icon?: any;
  labelText?: string;
  figure?: string;
  maxLength?: number;
  key?: number;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}
const Card = (props: Props) => {
  const { labelText, icon, figure, key, onClick, className } = props;
  return (
    <div key={key} className={className}>
      <div className={styles['icon-container']}> {icon}</div>
      <div className={styles['card-content']}>
        <span className={styles['card-content-label']}> {labelText} </span>
        <h1 className={styles['card-content-figure']}>{figure}</h1>
      </div>
    </div>
  );
};

export default Card;
