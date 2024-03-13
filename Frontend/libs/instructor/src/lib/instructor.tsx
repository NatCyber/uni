import { baseapi, useFileUploadMutation } from '@egst.frontend/shared';
import { DataGrid, FileUploader } from 'devextreme-react';
import { Column, Editing, FormItem } from 'devextreme-react/data-grid';
import CustomStore from 'devextreme/data/custom_store';
import {
  useCreateInstructorMutation,
  useDeleteInstructorMutation,
  useGetInstructorsQuery,
  useUpdateInstructorMutation,
} from 'libs/shared/src/lib/services/InstructorApi';
import {
  getAllInstructors,
  getSelectedInstructor,
  selectInstructor,
} from 'libs/shared/src/lib/state/InstructorSlice';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Instructor = () => {
  const genderEditorOptions = {
    dataSource: [{ gender: 'Male' }, { gender: 'Female' }],
    displayExpr: 'gender',
    valueExpr: 'gender',
  };

  const positionEditorOptions = {
    dataSource: [
      { position: 'Head of Academic Affairs' },
      { position: 'Head of Student Affairs' },
      { position: 'Programme Leader' },
      { position: 'Programme Co-Leader' },
      { position: 'MTh Coordinator' },
      { position: 'PhD Coordinator' },
      { position: 'Chaplain' },
      { position: 'None' },
    ],
    displayExpr: 'position',
    valueExpr: 'position',
  };

  const [selectedFiles, setSelectedFiles] = useState(null);
  const fileUploadRef = useRef(null);
  const dataGridRef = useRef(null);

  const dispatch = useDispatch();
  const { data: allInstructors } = useGetInstructorsQuery(null);
  const selectedInstructorState = useSelector(getSelectedInstructor);
  const selectedInstructor = { ...selectedInstructorState };
  const [createInstructor] = useCreateInstructorMutation();
  const [deleteInstructor] = useDeleteInstructorMutation();
  const [updateInstructor] = useUpdateInstructorMutation();

  const [uploadFile] = useFileUploadMutation();

  const onSelectedFileChanged = useCallback(
    (e) => {
      setSelectedFiles(e.target.files[0]);
      if (selectedInstructor.photo == '') {
        selectedInstructor.photo = '';
      }
    },
    [setSelectedFiles]
  );

  const fileUploaderTemplate = () => {
    return (
      <div
        onClick={() => {
          fileUploadRef.current?.click();

          selectedInstructor.photo = '';
        }}
      >
        Upload File
        <input
          accept="image/*"
          type="file"
          ref={fileUploadRef}
          onChange={onSelectedFileChanged}
        />
        {selectedFiles != null || selectedInstructor.photo != '' ? (
          <img
            src={
              selectedFiles != null
                ? URL.createObjectURL(selectedFiles)
                : selectedInstructor.photo != ''
                ? selectedInstructor.photo
                : ''
            }
            height={200}
            width={140}
          />
        ) : (
          <></>
        )}
      </div>
    );
  };

  const instructorsSource = new CustomStore({
    load: () => allInstructors,
    loadMode: 'raw',

    async insert(values) {
      try {
        if (selectedFiles != null) {
          const formData = new FormData();
          formData.append('file', selectedFiles, selectedFiles.name);
          const uploadedImage = await fetch(
            'https://localhost:5000/api/students/upload',
            { method: 'POST', body: formData }
          );
          var imgName = await uploadedImage.json();
          values.photo = imgName.path;
        }

        const res = await createInstructor(values).unwrap();
        return res;
      } catch (error) {
        throw error;
      }
    },
    async remove(key) {
      const res = await deleteInstructor(key.id).unwrap();
      return res;
    },
    async update(key, values) {
      values.id = selectedInstructor.id;
      const res = await updateInstructor(values).unwrap();
      return res;
    },
  });

  //to handle image update
  const onSaving = async (e) => {
    if (selectedFiles != null) {
      const formData = new FormData();
      formData.append('file', selectedFiles, selectedFiles.name);
      const uploadedImage = await fetch(
        'https://localhost:5000/api/students/upload',
        { method: 'POST', body: formData }
      );
      var imgName = await uploadedImage.json();
      const res = await updateInstructor({
        id: selectedInstructor.id,
        photo: imgName.path,
      })
        .unwrap()
        .catch((e) => console.log(e));
      instructorsSource.update(selectedInstructor, res);
    }
  };

  return (
    <div className="container">
      Instructors Page
      <div>
        <DataGrid
          ref={dataGridRef}
          dataSource={instructorsSource}
          onEditingStart={(e) => dispatch(selectInstructor(e.data))}
          onInitNewRow={() => dispatch(selectInstructor({}))}
          key={'id'}
          onSaving={onSaving}
        >
          <Editing
            allowAdding
            allowUpdating
            allowDeleting
            mode="form"
            useIcons
          />
          <Column dataField={'firstName'} />
          <Column dataField={'lastName'} />
          <Column dataField={'qualification'} />
          <Column dataField={'position'}>
            <FormItem
              editorType="dxSelectBox"
              editorOptions={positionEditorOptions}
            />
          </Column>
          <Column dataField={'personalTitle'} visible={false} />
          <Column dataField={'sex'} visible={false}>
            <FormItem
              editorType="dxSelectBox"
              editorOptions={genderEditorOptions}
            />
          </Column>
          <Column dataField={'denomination'} visible={false} />
          <Column dataField={'mobile'} visible={false} />
          <Column dataField={'email'} visible={false} />
          <Column dataField={'isActive'} visible={false} />
          <Column dataField={'type'} visible={false} />
          <Column
            dataField={'photo'}
            visible={false}
            editCellComponent={fileUploaderTemplate}
          ></Column>
        </DataGrid>
      </div>
    </div>
  );
};

export default Instructor;
