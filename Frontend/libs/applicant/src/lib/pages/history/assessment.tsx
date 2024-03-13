import { useCallback, useRef, useState } from 'react';
import { DropDownBox } from 'devextreme-react/drop-down-box';
import { List } from 'devextreme-react/list';
import Table from '../../components/table';
// import { div, div, Container } from 'react-bootstrap';
import student from '../../constants/student';

export default function Assessment() {
  const { assessmentResult } = student.history;
  const { courses, academicAssessments }: { courses: any, academicAssessments: any } = assessmentResult;

  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedCourseData, setSelectedCourseData] = useState<any>(undefined);

  const dropDownBoxRef: any = useRef(null);
  const changeDropDownBoxValue = useCallback((arg: any) => {
    setSelectedCourse(arg.addedItems[0]);
    dropDownBoxRef.current.instance.close();
  }, []);

  const onValueChanged = useCallback((e: any) => {
    const selectedItem = e.value;
    setSelectedCourse(selectedItem);
    setSelectedCourseData(academicAssessments[courses.indexOf(selectedItem)]);
  }, []);

  // const checkObjIsEmpty = obj => Object.keys(obj).length === 0;

  const assessmentTableData = {
    head: [
      'SN',
      'Assessment Name',
      'Assessment Type',
      'Maximum Mark',
      'Result',
    ],
  };

  return (
    <>
      <div className='my-tab-container'>
        <div className='table-container'>
          <div>
            <div>
              {selectedCourseData === undefined && (
                <h3 className='mb-3'>Select Course Enrollment</h3>
              )}
              <DropDownBox
                dataSource={courses}
                value={selectedCourse}
                ref={dropDownBoxRef}
                onValueChanged={onValueChanged}
                label='Course'
                labelMode='floating'
              >
                <List
                  selectionMode='single'
                  dataSource={courses}
                  onSelectionChanged={changeDropDownBoxValue}
                />
              </DropDownBox>
            </div>
            <div>
              <div>
                {selectedCourseData && (
                  <>
                    <p className='mt-3'>
                      <span className='fw-bolder'>Course Code:</span>{' '}
                      {selectedCourseData.courseCode}
                    </p>
                    <p className='mt-3'>
                      <span className='fw-bolder'>Course Name:</span>{' '}
                      {selectedCourseData.courseName}
                    </p>
                    <p className='mt-3'>
                      <span className='fw-bolder'>Course Instructor:</span>{' '}
                      {selectedCourseData.courseInstructor}
                    </p>
                  </>
                )}
              </div>
              <div>
                {selectedCourseData !== undefined && (
                  <>
                    <Table
                      tableData={{
                        ...assessmentTableData,
                        body: selectedCourseData.courseAssessment,
                      }}
                      headBackground={'#dddddd'}
                      className='mt-3'
                    />
                    <div style={{ backgroundColor: '#dddddd' }}>
                      <div className='pt-2'>
                        <div>
                          <h5>Totals</h5>
                        </div>
                        <div>
                          <p className='text-primary'>
                            Maximum Mark: {selectedCourseData.total}
                          </p>
                        </div>
                        <div>
                          <p className='text-primary'>
                            Result: {selectedCourseData.totalResult}
                          </p>
                        </div>
                        <div>
                          <p className='text-primary'>
                            Grade: {selectedCourseData.grade}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
