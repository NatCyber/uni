import {
  Button,
  DataGrid,
  NumberBox,
  SelectBox,
  TextBox,
} from 'devextreme-react';
import styles from './batch.module.css';
import { useSelector } from 'react-redux';
import { useAppSelector } from 'libs/shared/src/lib/store';
import { useNewBatchMutation } from 'libs/shared/src/lib/services/BatchApi';
import {
  Batch as BatchType,
  TheoBackground,
} from 'libs/shared/src/lib/types/types';
import { useState } from 'react';
import { Column, Editing, Form } from 'devextreme-react/data-grid';
import { SimpleItem } from 'devextreme-react/form';

export const Batch = () => {
  const allBatches = useAppSelector((state) => state.Batches.batches);
  const allPrograms = useAppSelector((state) => state.Programs.programs);
  const [newBatch, setNewBatch] = useState<BatchType>({
    name: '',
    programId: '',
    academicYear: 0,
  });

  const [addBatch] = useNewBatchMutation();

  const change = (e) => {
    console.log(e);
  };

  return (
    <div>
      <div>
        <DataGrid dataSource={allBatches}>
          <Editing allowAdding allowUpdating allowDeleting mode={'form'}>
            <Form>
              <SimpleItem dataField={'name'} />
              <SimpleItem
                dataField={'programId'}
                editorType={'dxSelectBox'}
                editorOptions={{
                  dataSource: allPrograms,
                  displayExpr: 'name',
                  valueExpr: 'id',
                }}
              />
              <SimpleItem
                dataField={'programStream'}
                editorType={'dxSelectBox'}
                editorOptions={{
                  dataSource: [
                    { id: 0, name: 'Full Time' },
                    { id: 1, name: 'Part Time' },
                  ],
                  displayExpr: 'name',
                  valueExpr: 'id',
                }}
              />
              <SimpleItem
                dataField={'theoBackground'}
                editorType={'dxSelectBox'}
                editorOptions={{
                  dataSource: [
                    { id: 0, name: 'Theological' },
                    { id: 1, name: 'Non-Theological' },
                  ],
                  displayExpr: 'name',
                  valueExpr: 'id',
                }}
              />
            </Form>
          </Editing>
          <Column dataField={'name'} />
          <Column dataField={'programId'} />
          <Column dataField={'programStream'} />
          <Column dataField={'theoBackground'} />
        </DataGrid>
      </div>
    </div>
  );
};

export default Batch;
