import { Field } from 'formik';
import CustomInput from './components/CustomInput';
import FinanceFields from './components/FinanceFields';
import { getAllPrograms } from '@egst.frontend/shared';
import { useSelector } from 'react-redux';
import DropDownSelector from './components/DropDownSelector';

const StepThree = () => {
  const allPrograms = useSelector(getAllPrograms);
  
  return (
    <div className="flex-col gap-3">
      <p className="mt-3">
        <strong>Local Church:</strong> Pastor or Elder, who has completed the
        recommendation form
      </p>
      <div className="flex gap-3 mt-3">
        <CustomInput name="recommendation.recommenderName" label="Name" />
        <CustomInput name="recommendation.recommenderAddress" label="Address" />
      </div>
      <FinanceFields />
      <DropDownSelector
        name="program.id"
        label="Programme of Study: (Programme you wish to pursue, Check one)"
        options={allPrograms}
        displayExpr={'name'}
        valueExpr={'id'}
      />
    </div>
  );
};

export default StepThree;
