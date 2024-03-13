import { Field } from 'formik';
import EducationFields from './components/EducationFields';
import LanguageFields from './components/LanguageFields';

const StepTwo = () => {
  return (
    <div>
      <p className='my-2'>
        <strong>Education:</strong>
        Give information on post-secondary schools attended.
      </p>
      <div className="flex gap-6 flex-wrap">
        <EducationFields />
        <LanguageFields />
      </div>
    </div>
  );
};

export default StepTwo;
