import { DataGrid, SelectBox } from 'devextreme-react';
import { Column, Editing, Form, Selection } from 'devextreme-react/data-grid';
import { Item, SimpleItem } from 'devextreme-react/form';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllPrograms,
  getSelectedProgram,
  selectProgram,
} from '@egst.frontend/shared';
import {
  getAllCourses,
  getSelectedCourse,
  removeCourse,
  selectCourse,
} from '../../../shared/src/lib/state/Courseslice';
import DataSource from 'devextreme/data/data_source';

import {
  useAddCourseMutation,
  useDeleteCourseMutation,
  useGetcoursesQuery,
  useUpdateCourseMutation,
} from '../../../shared/src/lib/services/CourseApi';

import { useEffect, useMemo, useRef, useState } from 'react';
import CustomStore from 'devextreme/data/custom_store';
import { GradeType } from 'libs/shared/src/lib/types/types';
import {
  getSelectedModule,
  selectModule,
} from 'libs/shared/src/lib/state/ModulesSlice';
import { array } from 'yup';
import { getConcentrations } from 'libs/shared/src/lib/state/ConcentrationsSlice';

/* eslint-disable-next-line */
export interface CourseProps {}

export function Course(props: CourseProps) {
  const allPrograms = useSelector(getAllPrograms);
  const selectedProgram = useSelector(getSelectedProgram);
  const selectedCourse = useSelector(getSelectedCourse);
  const { data: allCourses, refetch } = useGetcoursesQuery(null);
  const allConcentrations = useSelector(getConcentrations);
  const [gradeType, setGType] = useState();
  const [concentrationId, setConcentrationId] = useState();
  const [insertCourse] = useAddCourseMutation();
  const [updateCourse] = useUpdateCourseMutation();
  const [deleteCourse] = useDeleteCourseMutation();
  const dataGridRef = useRef(null);
  const dispatch = useDispatch();

  const [programConcentration, setProgramConcentration] = useState();

  const store = useMemo(
    () =>
      new CustomStore({
        key: 'id',
        loadMode: 'raw',
        load: () => allCourses.filter((c) => c.programId == selectedProgram.id),
        insert: async (values) => {
          const data = {
            ...values,
            programId: selectedProgram?.id,
            gradeType: gradeType,
            concentrationId: concentrationId,
          };
          await insertCourse(data).unwrap();
          refetch();
          // return result;
        },
        update: async (key, values) => {
          const toUpdate = {
            Id: key,
            ...(values?.name !== undefined && { name: values.name }),
            ...(values?.code !== undefined && { code: values.code }),
            ...(values?.description !== undefined && {
              description: values.description,
            }),
            ...(values?.credit !== undefined && { credit: values.credit }),
            ...(values?.gradeType !== undefined && {
              gradeType: values.gradeType,
            }),
          };
          await updateCourse(toUpdate).unwrap();

          refetch();
        },
        remove: async (key) => {
          const result = deleteCourse(key)
            .unwrap()
            .finally(() => removeCourse(key));
          refetch();
        },
      }),
    [allCourses, selectedProgram]
  );

  useEffect(() => {
    if (selectedProgram) {
      const concentrations = allConcentrations.filter(
        (c) => c.programId === selectedProgram.id
      );
      setProgramConcentration(concentrations);
    } else {
      setProgramConcentration([]); // Reset to empty array if no program is selected
    }
  }, [selectedProgram, allConcentrations]);

  const gradeTypeEnum = useMemo(
    () => [
      { id: 0, type: 'Pass/Fail' },
      { id: 1, type: 'Credit' },
    ],
    []
  );

  const gradeTypeComponent = () => {
    return (
      <SelectBox
        dataSource={gradeTypeEnum}
        value={
          selectedCourse
            ? gradeTypeEnum[selectedCourse.gradeType]
            : gradeTypeEnum[gradeType]
        }
        displayExpr={'type'}
        onValueChange={(e) => {
          setGType(e.id);
        }}
      />
    );
  };

  return (
    <div>
      <h1> Courses</h1>
      <div style={{ display: 'flex' }}>
        <SelectBox
          label="Program"
          dataSource={allPrograms}
          displayExpr={'name'}
          width={300}
          onSelectionChanged={(e) => {
            dispatch(selectProgram(e.selectedItem));
          }}
        />
        <div style={{ marginLeft: '10px' }}>
          <SelectBox
            label="Concentration"
            dataSource={programConcentration}
            displayExpr={'name'}
            width={300}
            onSelectionChanged={(e) => {
              dispatch(selectModule(e.selectedItem));
            }}
          />
        </div>
      </div>
      <div style={{ width: 'auto' }}>
        <DataGrid
          ref={dataGridRef}
          dataSource={store}
          onEditingStart={(e) => {
            dispatch(selectCourse(e.data));
          }}
          showBorders
          showColumnLines
          showRowLines
          hoverStateEnabled
          remoteOperations
          paging={{ enabled: false }}
          onInitNewRow={() => {
            dispatch(selectCourse({}));
          }}
        >
          <Editing mode="form" allowAdding allowUpdating allowDeleting useIcons>
            <Form>
              <SimpleItem dataField={'name'} />
              <SimpleItem dataField={'code'} />
              <SimpleItem dataField={'credit'} />
              <SimpleItem dataField={'description'} editorType="dxTextArea" />
              <SimpleItem dataField={'gradeType'} />
              <SimpleItem
                dataField={'concentrationId'}
                editorOptions={{
                  valueExpr: 'id',
                  displayExpr: 'name',
                  value: selectedCourse
                    ? selectedCourse.concentrationId
                    : concentrationId,
                  dataSource: programConcentration,
                  onValueChanged: (e) => {
                    setConcentrationId(e.value);
                  },
                }}
                editorType={'dxSelectBox'}
              />
            </Form>
          </Editing>
          <Selection mode={'single'} />
          <Column dataField={'code'} width={100} />
          <Column dataField={'name'} />
          <Column dataField={'credit'} dataType="number" width={70} />
          <Column dataField={'description'} />
          <Column
            dataField={'gradeType'}
            calculateDisplayValue={(d) => GradeType[d.gradeType]}
            editCellComponent={gradeTypeComponent}
          />
        </DataGrid>
      </div>
    </div>
  );
}

export default Course;
