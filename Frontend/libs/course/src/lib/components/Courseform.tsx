import { NumberBox, TextArea, TextBox } from 'devextreme-react';
import React from 'react';

const Courseform = () => {
  return (
    <div>
      <form style={{ width: 500 }}>
        <TextBox name="name" label="Name" labelMode="floating" />
        <TextBox name="code" label="Code" labelMode="floating" />
        <TextArea name="desctiption" label="Description" labelMode="floating" />
        <NumberBox name="credit" label="Credit" labelMode="floating" />
      </form>
    </div>
  );
};

export default Courseform;
