import styles from './auth.module.css';
import { getUser } from './service/authSlice';
/* eslint-disable-next-line */
export interface AuthProps {}

export function Auth(props: AuthProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Auth!</h1>
    </div>
  );
}

export default Auth;
