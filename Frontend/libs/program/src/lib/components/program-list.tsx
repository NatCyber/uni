import { DataGrid } from 'devextreme-react';
import React from 'react';
import {
  useGetAllProgramsQuery,
  useUpdateProgramMutation,
} from '../../../../shared/src/lib/services/programs-api';
import { Column, Editing, Selection } from 'devextreme-react/data-grid';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllPrograms,
  getSelectedProgram,
  selectProgram,
} from '../../../../shared/src/lib/state/programs-slice';
import { useNavigate } from 'react-router-dom';
import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';

const ProgramsList = () => {
  // const { data: allPrograms } = useGetAllProgramsQuery(undefined);
  const allPrograms = useSelector(getAllPrograms);
  const [updateProgram] = useUpdateProgramMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setCurrentProg = (e) => {
    dispatch(selectProgram(e.data));
  };

  const store = new CustomStore({
    key: 'id',
    loadMode: 'raw',
    load: () => allPrograms,
    update: async (key, values) => {
      const toupate = {
        Id: key,
        ...(values.name !== undefined && { name: values.name }),
        ...(values.code !== undefined && { code: values.code }),
        ...(values.description !== undefined && {
          description: values.description,
        }),
      };
      const result = await updateProgram(toupate)
        .unwrap()
        .then(() => {
          datasource.reload();
        });
      return result;
    },
    // remove: async (key, value) => {

    // }
  });

  const datasource = new DataSource({
    store: store,
  });

  return (
    <div>
      <DataGrid
        dataSource={datasource}
        showColumnHeaders
        //focusedRowEnabled
        remoteOperations
        showBorders
        hoverStateEnabled
        onRowClick={setCurrentProg}
        onRowDblClick={() => {
          navigate('/program-detail');
        }}
      >
        <Editing mode="form" allowUpdating allowDeleting useIcons />
        <Selection mode={'single'} />
        <Column dataField={'name'} />
        <Column dataField={'code'} />
        <Column dataField={'description'} />
      </DataGrid>
    </div>
  );
};

export default ProgramsList;
