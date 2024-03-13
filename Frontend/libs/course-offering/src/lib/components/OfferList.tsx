import { DataGrid, SelectBox } from 'devextreme-react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllPrograms,
  getSelectedProgram,
  selectProgram,
} from '@egst.frontend/shared';
import DataSource from 'devextreme/data/data_source';
import { Column, Lookup } from 'devextreme-react/data-grid';
import { useEffect, useRef, useState } from 'react';
import {
  useGetOfferingsQuery,
  useSaveOfferingsMutation,
} from '../../../../shared/src/lib/services/CourseOfferApi';
import {
  getAllBatches,
  getSelectedBatch,
  selectBatch,
} from 'libs/shared/src/lib/state/BatchSlice';

export const OfferList = () => {
  const allPrograms = useSelector(getAllPrograms);
  const dispatch = useDispatch();
  const selectedProgram = useSelector(getSelectedProgram);
  const selectedBatch = useSelector(getSelectedBatch);
  const [programId, setProgramId] = useState();
  const [academicYear, setAcademicYear] = useState();
  const [selectedYear, setSelectedYear] = useState();
  const [saveOffering] = useSaveOfferingsMutation();
  const { data: allOfferings } = useGetOfferingsQuery(null);
  const allBatches = useSelector(getAllBatches);

  const programIdRef = useRef();
  programIdRef.current = programId;

  const Years = [
    { id: 1, Year: 'Year1' },
    { id: 2, Year: 'Year2' },
    { id: 3, Year: 'Year3' },
    { id: 4, Year: 'Year4' },
  ];

  const Semesters = [
    { id: 1, Semester: 'Semester1', yearId: 0 },
    { id: 2, Semester: 'Semester2', yearId: 0 },
    { id: 3, Semester: 'Semester3', yearId: 0 },
    { id: 4, Semester: 'Semester4', yearId: 1 },
    { id: 5, Semester: 'Semester5', yearId: 1 },
    { id: 6, Semester: 'Semester6', yearId: 1 },
    { id: 7, Semester: 'Semester7', yearId: 2 },
    { id: 8, Semester: 'Semester8', yearId: 2 },
    { id: 9, Semester: 'Semester9', yearId: 2 },
    { id: 10, Semester: 'Semester10', yearId: 3 },
    { id: 11, Semester: 'Semester11', yearId: 3 },
    { id: 12, Semester: 'Semester12', yearId: 3 },
  ];

  const dataSource = new DataSource({
    store: allOfferings,
    filter: [
      ['programId', '=', selectedProgram.id],
      'and',
      ['batchId', '=', selectedBatch.id],
    ],
  });

  const batchSource = new DataSource({
    store: allBatches,
    filter: [['academicYear', '=', selectedYear]],
  });

  useEffect(() => {
    if (allBatches !== undefined) {
      const years = allBatches.map((b) => b.academicYear);
      const uniqueYears = [...new Set(years)];
      setAcademicYear(uniqueYears);
    }
  }, [allBatches]);


  dataSource.sort('course.name');
  return (
    <div>
      <div style={{ display: 'flex', marginBottom: 10 }}>
        <SelectBox
          dataSource={allPrograms}
          width={400}
          displayExpr={'name'}
          onSelectionChanged={(e) => {
            dispatch(selectProgram(e.selectedItem));
          }}
        />
        <SelectBox
          dataSource={academicYear}
          width={200}
          onValueChange={(e) => {
            setSelectedYear(e);
          }}
        />
        <SelectBox
          dataSource={batchSource}
          width={400}
          displayExpr={'name'}
          label="Select Batch"
          onSelectionChanged={(e) => {
            dispatch(selectBatch(e.selectedItem));
          }}
        />
      </div>

      <DataGrid
        dataSource={dataSource}
        hoverStateEnabled
        showBorders={true}
        rowAlternationEnabled={true}
        selection={{ allowSelectAll: true }}
      >
        <Column dataField="course.id" visible={false} />
        <Column dataField="course.name" allowEditing={false} />
        <Column dataField="course.code" allowEditing={false} />
        <Column dataField="course.credit" allowEditing={false} />
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
