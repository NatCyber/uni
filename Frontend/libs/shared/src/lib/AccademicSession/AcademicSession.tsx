import { Button, Popup, TextBox } from 'devextreme-react';
import React, { useRef, useState } from 'react';

const AcademicSession = () => {
  const [yearVal, setYearVal] = useState();
  const [modalOpen, setModalOpen] = useState<boolean>();
  const handleSubmit = () => {};
  return (
    <div>
      <div>AcademicSession</div>
      <Button
        text="Add New Session"
        onClick={() => {
          setModalOpen(true);
        }}
      />
      <Popup visible={modalOpen}>
        <TextBox
          label="Year"
          placeholder="eg:2024 "
          onValueChange={(e) => {
            setYearVal(e.value);
          }}
        />
        <Button text="Save" onClick={handleSubmit} />
        <Button
          text="Cancel"
          onClick={() => {
            setModalOpen(false);
          }}
        />
      </Popup>
    </div>
  );
};

export default AcademicSession;
