import { useSelector } from 'react-redux';
import { getSelectedProgram } from '@egst.frontend/shared';
import { Button, List, Popup } from 'devextreme-react';
import { useEffect, useState } from 'react';
import { useNewConcentrationMutation } from '../../../../shared/src/lib/services/ConcentrationsApi';
import { useNavigate } from 'react-router-dom';
import ConcentrationForm from './concentrationForm';
import { getConcentrations } from 'libs/shared/src/lib/state/ConcentrationsSlice';

export const ProgramEdit = () => {
  const selectedProgram = useSelector(getSelectedProgram);
  const allConcentration = useSelector(getConcentrations);
  const [concentrationModal, setConcentrationModal] = useState<boolean>(false);
  const [newConcentration, setNewConcetration] = useState({
    programId: selectedProgram.id,
  });
  const [addConcentration] = useNewConcentrationMutation();

  const navigate = useNavigate();

  const submitConcentration = () => {
    addConcentration(newConcentration);
    setConcentrationModal(false);
    setNewConcetration({ programId: selectedProgram.id });
  };

  useEffect(() => {
    if (selectedProgram.name === '') {
      navigate('/programs');
    }
  });

  return (
    <div>
      <h2 className="title--text">Program Detail</h2>
      <div className="program-detail-container">
        <div className="program-description">
          <div className="program-description--head">
            <h3>Program Name: {selectedProgram.name}</h3>
            <b>Code: {selectedProgram.code}</b>
          </div>
          {/* <br /> */}
          <p className="Description"> {selectedProgram.description}</p>
        </div>
        <div className="program-Modules-Concentrations">
          <h4>Concentrations</h4>
          <div className="program-Concentrations">
            <Button
              text="Add New Concentration"
              onClick={() => {
                setConcentrationModal(true);
              }}
            />
            <List
              width={500}
              dataSource={allConcentration.filter(
                (c) => c.programId == selectedProgram.id
              )}
              displayExpr={'name'}
            ></List>
            <Popup
              width={500}
              visible={concentrationModal}
              onVisibleChange={() => {
                setConcentrationModal(!concentrationModal);
              }}
            >
              <ConcentrationForm data={setNewConcetration} />
              <Button text="Save" onClick={submitConcentration} />
              <Button
                text="Cancel"
                onClick={() => {
                  setConcentrationModal(false);
                }}
              />
            </Popup>
          </div>
        </div>
      </div>
    </div>
  );
};
