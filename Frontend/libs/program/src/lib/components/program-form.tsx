import { Button, TextArea, TextBox } from 'devextreme-react';

const ProgramForm = ({ data }) => {
  
  const prepareData = (e) => {
    const name = e.event.currentTarget.name;
    data((prevData) => ({ ...prevData, [name]: e.value }));
  };

  return (
    <div>
      <TextBox
        label="Name"
        name={'name'}
        labelMode="floating"
        onValueChanged={prepareData}
      />
      <TextBox
        label="Code"
        name={'code'}
        labelMode="floating"
        onValueChanged={prepareData}
      />
      <TextArea
        label="Description"
        name={'description'}
        labelMode="floating"
        onValueChanged={prepareData}
      />
    </div>
  );
};

export default ProgramForm;
