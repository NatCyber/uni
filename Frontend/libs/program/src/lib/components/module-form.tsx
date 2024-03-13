import { getSelectedProgram } from '@egst.frontend/shared';
import { SelectBox, TextBox } from 'devextreme-react';
import { getConcentrations } from 'libs/shared/src/lib/state/ConcentrationsSlice';
import { useSelector } from 'react-redux';

const ModuleForm = ({ data }) => {
  const allConcentrations = useSelector(getConcentrations);
  const selectedProgram = useSelector(getSelectedProgram);

  const prepareData = (e) => {
    const name = e.event.currentTarget.name;
    if (name === 'name') {
      data((prev) => ({ ...prev, [name]: e.value }));
    }
    data((prev) => ({ ...prev, [name]: e.id }));
  };

  return (
    <div>
      <TextBox
        name={'name'}
        label="Name"
        labelMode="floating"
        onValueChanged={(e) => {
          data((prev) => ({ ...prev, name: e.value }));
        }}
        width={300}
      />
      <SelectBox
        name={'concentrationId'}
        dataSource={allConcentrations.filter(
          (c) => c.programId == selectedProgram.id
        )}
        displayExpr={'name'}
        onValueChanged={(e) => {
          data((prev) => ({ ...prev, concentrationId: e.value.id }));
        }}
      />
    </div>
  );
};

export default ModuleForm;
