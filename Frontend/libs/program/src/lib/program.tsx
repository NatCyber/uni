import { Button, Popup } from 'devextreme-react';
import styles from './program.module.css';
import { useEffect, useState } from 'react';
import ProgramForm from './components/program-form';
import ProgramsList from './components/program-list';
import { useNewProgramMutation } from '../../../shared/src/lib/services/programs-api';
import { IoIosAddCircleOutline } from 'react-icons/io';
/* eslint-disable-next-line */
export interface ProgramProps { }

export function Program(props: ProgramProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState();

  const [
    addProgram,
    { isSuccess: Created, isError: CreateErr, isLoading: Creating, error: err },
  ] = useNewProgramMutation();

  const handleSubmission = async (e) => {
    setModalOpen(false);
    const res = await addProgram(formData);
  };

  useEffect(() => {
    setFormData(undefined);
  }, [Created]);

  return (
    <div className={styles['container']}>
      <h1>Programs and Concentrations</h1>
      <Button
        icon='add'
        text="Add New Program"
        onClick={() => {
          setModalOpen(true);
        }}
      />
      <div className='' style={{ marginTop: '20px' }}>
        <Popup
          visible={modalOpen}
          onVisibleChange={() => {
            setModalOpen(!modalOpen);
          }}
        >
          <ProgramForm data={setFormData} />
          <Button text="Save" onClick={handleSubmission} />
          <Button
            text="Cancel"
            onClick={() => {
              setModalOpen(false);
            }}
          />
        </Popup>
        <ProgramsList />
      </div>


    </div>
  );
}

export default Program;
