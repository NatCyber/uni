import styles from './course-offering.module.css';
import OfferForm from './components/OfferForm';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { resetProgram } from 'libs/shared/src/lib/state/programs-slice';

export function CourseOffering() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetProgram);
  }, []);
  return (
    <div className={styles['container']}>
      <h1>Welcome to CourseOffering!</h1>
      <OfferForm />
    </div>
  );
}

export default CourseOffering;
