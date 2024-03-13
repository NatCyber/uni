import { useGetStudentApplicationsQuery } from '@egst.frontend/shared';
import { DataGrid } from 'devextreme-react';
import { Column } from 'devextreme-react/data-grid';
import DataSource from 'devextreme/data/data_source';
import { selectApplication } from 'libs/shared/src/lib/state/StudentApplicationSlice';
import { StudentApplicationStatus } from 'libs/shared/src/lib/types/types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ForApproval = () => {
  const { data: applicantsData } = useGetStudentApplicationsQuery(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const datasource = new DataSource({
    store: applicantsData,
    key: 'id',
  });

  return (
    <div>
      <h2>Waiting for Approval</h2>
      <DataGrid
        dataSource={datasource}
        onRowClick={(e) => dispatch(selectApplication(e.data))}
        onRowDblClick={() => {
          navigate(`/application-detail`);
        }}
        showBorders
      >
        <Column
          dataField={'bigObject.BigObject.personalInformation.fullName'}
          caption={'Full Name'}
        />
        <Column dataField={'bigObject.BigObject.program'} caption={'Program'} />
        <Column dataField={'applicationDate'} caption={'Application Date'} />
        <Column
          dataField={'status'}
          calculateDisplayValue={(r) => StudentApplicationStatus[r.status]}
        />
      </DataGrid>
    </div>
  );
};

export default ForApproval;
