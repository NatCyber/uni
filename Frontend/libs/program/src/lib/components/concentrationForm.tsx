import { TextBox } from 'devextreme-react';

const ConcentrationForm = ({ data }) => {
  const prepareData = (e) => {
    const name = e.event.currentTarget.name;
    data((prev) => ({ ...prev, [name]: e.value }));
  };

  return (
    <div>
      <div>Concentration Form</div>
      <TextBox
        name={'name'}
        label="Name"
        labelMode="floating"
        onValueChanged={prepareData}
        width={300}
      />
      <TextBox
        name={'code'}
        label="Code"
        labelMode="floating"
        onValueChanged={prepareData}
        width={300}
      />
    </div>
  );
};

export default ConcentrationForm;
