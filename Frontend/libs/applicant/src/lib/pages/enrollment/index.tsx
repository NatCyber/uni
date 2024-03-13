import { useState, useRef, useCallback } from 'react';
import './enrollment.css';
import TabPanel, { Item } from 'devextreme-react/tab-panel';
import { DropDownBox } from 'devextreme-react/drop-down-box';
import { List } from 'devextreme-react/list';
import student from '../../constants/student';
import Table from '../../components/table';
// import { Alert } from 'react-bootstrap';

export default function Enrollment() {
  const { registrations, addDrop, reAdmission }: { registrations: any, addDrop: any, reAdmission: any } = student.enrollments;
  const { semesterCourses, semesters } = registrations;

  const [selectedSemester, setSelectedSemester] = useState('');
  const [selectedSemesterCourses, setSelectedSemesterCourses] =
    useState([]);
  const [dataSource, setDataSource] = useState(semesters);

  const dropDownBoxRef: any = useRef(null);
  const changeDropDownBoxValue = useCallback((arg: any) => {
    setSelectedSemester(arg.addedItems[0]);
    dropDownBoxRef.current.instance.close();
  }, []);

  const onValueChanged = useCallback((e: any) => {
    const selectedItem = e.value;
    setSelectedSemester(selectedItem);
    setSelectedSemesterCourses(
      semesterCourses[dataSource.indexOf(selectedItem)]
    );
  }, []);

  const registrationTableData = {
    head: ['Course Code', 'Course Title', 'Credit Hour'],
    body: selectedSemesterCourses,
  };

  // const checkObjIsEmpty = (obj: any) => Object.keys(obj).length === 0;

  return (
    <>
      <div className='enrollment-container'>
        <div className='title-container'>
          <i className='fa-solid fa-newspaper text-white'></i>
          <h3>Enrollment Record</h3>
        </div>
        <div className='overview-content'>
          <TabPanel id='tabPanel' swipeEnabled={false}>
            <Item title='Registrations' icon='fa-solid fa-address-card'>
              <div className='my-tab-container'>
                <div className='table-container'>
                  {selectedSemesterCourses === undefined && (
                    <h3 className='mb-3'>Select Registration</h3>
                  )}
                  <DropDownBox
                    dataSource={dataSource}
                    value={selectedSemester}
                    ref={dropDownBoxRef}
                    onValueChanged={onValueChanged}
                    label='Semester'
                    labelMode='floating'
                  >
                    <List
                      selectionMode='single'
                      dataSource={dataSource}
                      onSelectionChanged={changeDropDownBoxValue}
                    />
                  </DropDownBox>
                  {selectedSemesterCourses.length !== 0 && (
                    <Table
                      tableData={registrationTableData}
                      headBackground={'#dddddd'}
                      className='mt-3'
                    />
                  )}
                </div>
              </div>
            </Item>
            <Item title='Add-Drop' icon='fa-solid fa-add'>
              {/* {checkObjIsEmpty(addDrop) && (
                <Alert variant='light mt-3'>No Add-Drop History</Alert>
              )} */}
            </Item>
            <Item title='Re-Admission' icon='fa-solid fa-university'>
              {/* {checkObjIsEmpty(reAdmission) && (
                <Alert variant='light mt-3'>No Re-Admission History</Alert>
              )} */}
            </Item>
          </TabPanel>
        </div>
      </div>
    </>
  );
}
