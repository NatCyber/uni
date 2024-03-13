import './history.css';
import TabPanel, { Item } from 'devextreme-react/tab-panel';
import { DropDownBox } from 'devextreme-react/drop-down-box';
import { List } from 'devextreme-react/list';
import student from '../../constants/student';
import Table from '../../components/table';
// import { div, div, Container } from 'react-bootstrap';
import { useState, useRef, useCallback } from 'react';
import Assessment from './assessment';

export default function History() {
  const { transcript, gpaSummary, gradeReport, assessmentResult } =
    student.history;
  const { semesters, semesterCourses }: { semesters: any, semesterCourses: any } = gradeReport;

  const [selectedSemester, setSelectedSemester] = useState<any>('');
  const [selectedSemesterData, setSelectedSemesterData] = useState<any>(undefined);

  const dropDownBoxRef: any = useRef(null);
  const changeDropDownBoxValue = useCallback((arg: any) => {
    setSelectedSemester(arg.addedItems[0]);
    dropDownBoxRef.current.instance.close();
  }, []);

  const onValueChanged = useCallback((e: any) => {
    const selectedItem = e.value;
    setSelectedSemester(selectedItem);
    setSelectedSemesterData(semesterCourses[semesters.indexOf(selectedItem)]);
  }, []);

  // const checkObjIsEmpty = obj => Object.keys(obj).length === 0;

  const gradeReportTableData = {
    head: [
      'Course Code',
      'Course Title',
      'Credit Hour',
      'Grade',
      'Grade Point',
    ],
  };

  const transcriptTableData = {
    head: ['Code', 'Course Title', 'Credit Hour', 'Grade', 'Points'],
  };

  return (
    <>
      <div className='overview-container'>
        <div className='title-container'>
          <i className='fa-solid fa-history text-white'></i>
          <h3>Academy History</h3>
        </div>
        <div className='overview-content'>
          <TabPanel id='tabPanel' swipeEnabled={false}>
            <Item title='Grade Report' icon='fa-solid fa-4'>
              <div className='my-tab-container'>
                <div className='table-container'>
                  {selectedSemesterData === undefined && (
                    <h3 className='mb-3'>Select Academy Semester</h3>
                  )}
                  <DropDownBox
                    dataSource={semesters}
                    value={selectedSemester}
                    ref={dropDownBoxRef}
                    onValueChanged={onValueChanged}
                    label='Semester'
                    labelMode='floating'
                  >
                    <List
                      selectionMode='single'
                      dataSource={semesters}
                      onSelectionChanged={changeDropDownBoxValue}
                    />
                  </DropDownBox>
                  {selectedSemesterData !== undefined && (
                    <>
                      <Table
                        tableData={{
                          ...gradeReportTableData,
                          body: selectedSemesterData.courses,
                        }}
                        headBackground={'#dddddd'}
                        className='mt-3'
                      />
                      <div
                        className='w-100'
                        style={{ backgroundColor: '#dddddd' }}
                      >
                        <div className='pt-2'>
                          <div>
                            <h5>Semester Total</h5>
                          </div>
                          <div>
                            <p className='text-primary'>
                              Credit Hour:{' '}
                              {selectedSemesterData.semesterTotal.creditHour}
                            </p>
                          </div>
                          <div>
                            <p className='text-primary'>
                              Point:{' '}
                              {selectedSemesterData.semesterTotal.gradePoint}
                            </p>
                          </div>
                          <div>
                            <p className='text-primary'>
                              Average:{' '}
                              {
                                selectedSemesterData.semesterTotal
                                  .gradePointAverage
                              }
                            </p>
                          </div>
                        </div>
                        <div>
                          <div>
                            <h5>Academy Total</h5>
                          </div>
                          <div>
                            <p className='text-primary'>
                              Credit Hour:{' '}
                              {
                                selectedSemesterData.cumulativeAverage
                                  .creditHour
                              }
                            </p>
                          </div>
                          <div>
                            <p className='text-primary'>
                              Point:{' '}
                              {
                                selectedSemesterData.cumulativeAverage
                                  .gradePoint
                              }
                            </p>
                          </div>
                          <div>
                            <p className='text-primary'>
                              Average:{' '}
                              {
                                selectedSemesterData.cumulativeAverage
                                  .gradePointAverage
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </Item>
            <Item title='GPA Summary' icon='fa-solid fa-ranking-star'>
              <div className='my-tab-container'>
                <div className='table-container'>
                  <h2 className=''>Grade Point Average (GPA) Summary</h2>
                  <hr />
                  <h5>Academic Status: {gpaSummary.academicStatus}</h5>
                  <h5>Semester GPA: {gpaSummary.semesterGPA}</h5>
                  <h5>Cumulative GPA: {gpaSummary.cumulativeGPA}</h5>
                </div>
              </div>
            </Item>
            <Item title='Transcript' icon='fa-solid fa-clipboard'>
              <div className='my-tab-container'>
                <div className='table-container'>
                  {transcript.map((t, i) => (
                    <div key={i} className={i === 0 ? 'mt-2' : 'mt-4'}>
                      <h4>
                        {t.semester} {t.year}
                      </h4>
                      <Table
                        tableData={{ ...transcriptTableData, body: t.courses }}
                        headBackground={'#272829'}
                        headColor={'#fff'}
                      />
                      <div style={{ backgroundColor: '#dddddd' }}>
                        <div className='pt-2'>
                          <div>
                            <h5>Semester Total</h5>
                          </div>
                          <div>
                            <p className='text-primary'>
                              Credit Hour: {t.semesterCreditTotal}
                            </p>
                          </div>
                          <div>
                            <p className='text-primary'>
                              Point: {t.semesterPoint}
                            </p>
                          </div>
                          <div>
                            <p className='text-primary'>
                              Average: {t.semesterAverage}
                            </p>
                          </div>
                        </div>
                        <div>
                          <div>
                            <h5>Academy Total</h5>
                          </div>
                          <div>
                            <p className='text-primary'>
                              Credit Hour: {t.totalCreditHour}
                            </p>
                          </div>
                          <div>
                            <p className='text-primary'>
                              Point: {t.totalPoint}
                            </p>
                          </div>
                          <div>
                            <p className='text-primary'>
                              Average: {t.totalAverage}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Item>
            <Item title='Assessment Result' icon='fa-solid fa-record-vinyl'>
              <Assessment />
            </Item>
          </TabPanel>
        </div>
      </div>
    </>
  );
}
