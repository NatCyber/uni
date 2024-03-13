import {
  Button,
  CheckBox,
  DataGrid,
  RadioGroup,
  SelectBox,
} from 'devextreme-react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllPrograms,
  getSelectedProgram,
  selectProgram,
} from '@egst.frontend/shared';
import styles from '../course-offering.module.css';
import DataSource from 'devextreme/data/data_source';
import { Column, Editing, Lookup } from 'devextreme-react/data-grid';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useSaveOfferingsMutation } from '../../../../shared/src/lib/services/CourseOfferApi';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'libs/shared/src/lib/store';
import {
  getSelectedBatch,
  selectBatch,
} from 'libs/shared/src/lib/state/BatchSlice';
import {
  getConcentrations,
  getSelectedConcentration,
  selectConcetration,
} from 'libs/shared/src/lib/state/ConcentrationsSlice';
import { getAllModules } from 'libs/shared/src/lib/state/ModulesSlice';
import { getAllCourses } from 'libs/shared/src/lib/state/Courseslice';
import { Semesters, Years, TheoBackground, ProgramStream } from '../Constants';

const OfferForm = () => {
  const allPrograms = useSelector(getAllPrograms);
  const allModules = useSelector(getAllModules);
  const allCourses = useSelector(getAllCourses);
  const allBatches = useAppSelector((state) => state.Batches.batches);
  const allConcentrations = useSelector(getConcentrations);
  const selectedProgram = useSelector(getSelectedProgram);
  const selectedBatch = useSelector(getSelectedBatch);
  const selectedConcentration = useSelector(getSelectedConcentration);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [programCourses, setProgramCourses] = useState([]);
  const [programId, setProgramId] = useState();
  const [batchId, setBatchId] = useState();
  const [concentrationId, setConcentrationId] = useState();
  const [theoBackgoround, setTheoBackground] = useState();
  const [stream, setStream] = useState();

  const [saveOffering] = useSaveOfferingsMutation();

  const programIdRef = useRef();
  const batchIdRef = useRef();
  const concentrationIdRef = useRef();

  programIdRef.current = programId;
  concentrationIdRef.current = concentrationId;
  batchIdRef.current = batchId;

  useEffect(() => {
    programCourses.splice(0);
    if (selectedProgram !== undefined || null) {
      setProgramId(selectedProgram.id);

      const programModules = allModules.filter(
        (m) => m.programId == selectedProgram.id
      );

      //load common courses here
      programModules.forEach((m) => {
        if (m.concentrationId == null) {
          allCourses.forEach((cr) => {
            if (cr.moduleId == m.id) {
              programCourses.push(cr);
            }
          });
        }
      });
      if (
        selectedConcentration !== undefined ||
        selectedConcentration !== null
      ) {
        setConcentrationId(selectedConcentration.id);

        //load concentration courses here
        const programConcentration = allConcentrations.filter(
          (con) => con.programId == selectedProgram.id
        );

        const ConcentrationModule = programModules.find(
          (m) => m.concentrationId == selectedConcentration.id
        );

        allCourses.forEach((cr) => {
          if (cr.moduleId == ConcentrationModule?.id) {
            programCourses.push(cr);
          }
        });
      }
    }
  }, [selectedProgram, selectedConcentration]);

  useEffect(() => {
    if (selectedBatch !== undefined || null) {
      setBatchId(selectedBatch.id);
    }
  }, [selectedBatch]);

  const programsSource = new DataSource({
    store: programCourses,
    key: 'id',
  });

  const batchesSource = new DataSource({
    store: allBatches,
    key: 'id',
  });

  async function sendBatchRequest(changes) {
    changes = { offerings: changes };

    const result = await saveOffering(changes)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        throw err.Message;
      });
  }

  async function processBatchRequest(changes: [], component) {
    let offers = [];
    changes.forEach((c) => {
      offers.push({
        courseId: c.key.id,
        programId: programIdRef.current,
        concentrationId: concentrationIdRef.current,
        yearId: c.data.year,
        semesterId: c.data.semester,
        batchId: batchIdRef.current,
        theoBackgoroundId: theoBackgoround.id,
        streamId: stream.id,
      });
    });

    await sendBatchRequest(offers);

    await component.refresh(true);
    component.cancelEditData();
  }

  const onSaving = useCallback((e) => {
    e.cancel = true;
    if (e.changes.length) {
      e.promise = processBatchRequest(e.changes, e.component);
    }
  }, []);

  const theoRadio = useCallback(
    (e) => {
      setTheoBackground(e.value);
    },
    [setTheoBackground]
  );

  const streamRadio = useCallback(
    (e) => {
      setStream(e.value);
    },
    [setStream]
  );

  programsSource.sort('name');
  return (
    <div>
      <Button
        className={styles['']}
        icon="tags"
        text="Previous Offerings"
        onClick={() => {
          navigate('/OfferList');
        }}
      />
      <br />
      <div>
        <div style={{ display: 'flex', marginBottom: 10, marginTop: '10px' }}>
          <SelectBox
            dataSource={allPrograms}
            width={400}
            displayExpr={'name'}
            label="Select Program"
            onSelectionChanged={(e) => {
              dispatch(selectProgram(e.selectedItem));
            }}
          />
          <SelectBox
            dataSource={allConcentrations.filter(
              (c) => c.programId == selectedProgram.id
            )}
            width={400}
            displayExpr={'name'}
            label="Select Concentration"
            onSelectionChanged={(e) => {
              dispatch(selectConcetration(e.selectedItem));
            }}
          />
          <SelectBox
            dataSource={batchesSource}
            width={400}
            displayExpr={'name'}
            label="Select Batch"
            onSelectionChanged={(e) => {
              dispatch(selectBatch(e.selectedItem));
            }}
          />
        </div>

        <RadioGroup
          name="theo"
          layout="horizontal"
          displayExpr={'text'}
          items={TheoBackground}
          onValueChanged={theoRadio}
          hoverStateEnabled
          stylingMode="filled"
          value={theoBackgoround}
        />
        <RadioGroup
          name="stream"
          layout="horizontal"
          displayExpr={'text'}
          items={ProgramStream}
          onValueChanged={streamRadio}
          hoverStateEnabled
          stylingMode="filled"
          value={stream}
        />
      </div>
      <DataGrid
        dataSource={programsSource}
        hoverStateEnabled
        showBorders={true}
        rowAlternationEnabled={true}
        selection={{ allowSelectAll: true }}
        remoteOperations
        onSaving={onSaving}
      >
        <Editing mode={'batch'} allowUpdating={true} refreshMode="reshape" />

        <Column dataField="id" visible={false} />
        <Column dataField="name" allowEditing={false} />
        <Column dataField="code" allowEditing={false} />
        <Column dataField="credit" allowEditing={false} />
        <Column dataField={`year`} key={'id'}>
          <Lookup dataSource={Years} valueExpr={'id'} displayExpr={'Year'} />
        </Column>
        <Column dataField={'semester'} key={'id'}>
          <Lookup
            dataSource={Semesters}
            valueExpr={'id'}
            displayExpr={'Semester'}
          />
        </Column>
      </DataGrid>
    </div>
  );
};

export default OfferForm;
