import React, { useEffect, useState } from 'react';
import styles from '../applicant.module.css';
import exp from 'constants';
import { Splitter } from '@egst.frontend/shared';
// import { useGetStudentApplicationsQuery } from "../services/StudentApplicationApi";
import { useNavigate, useParams } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { getSelectedApplication } from 'libs/shared/src/lib/state/StudentApplicationSlice';
import { Button, DateBox, Popup } from 'devextreme-react';
import { useChangeApplicationStatusMutation } from 'libs/shared/src/lib/services/StudentApplicationApi';
import { StudentApplicationStatus } from 'libs/shared/src/lib/types/types';
const ApplicationFormDetail = () => {
  const [studenData, setStudentData] = useState<any>(null);
  const selectedApplication = useSelector(getSelectedApplication);

  const [approve] = useChangeApplicationStatusMutation();

  const [selectedApp, setSelectedApplicationData] = useState<any>(null);
  const [personalInfo, setPersonalInfo] = useState<any>(null);
  const [examPopup, setExamPopup] = useState(false);
  const [examDate, setExamDate] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setSelectedApplicationData(selectedApplication);
    selectedApplication?.id != '' && setStudentData(true);
    setPersonalInfo(
      selectedApplication.bigObject.BigObject?.personalInformation
    );
  }, []);

  const ApproveApplication = async () => {
    const ApprovalDto = {
      id: selectedApplication.id,
      status: StudentApplicationStatus.Exam,
      examDate: examDate,
    };
    const res = await approve(ApprovalDto).unwrap();
    console.log(res);
  };
  return (
    <>
      <BiArrowBack
        className={styles['back--arrow-btn']}
        onClick={() => {
          navigate(-1);
        }}
      />
      {studenData != null ? (
        <>
          <div>
            <Popup
              width={400}
              height={400}
              visible={examPopup}
              onVisibleChange={() => {
                setExamPopup(!examPopup);
              }}
            >
              Set Enterance Exam Date
              <DateBox onValueChange={(value) => setExamDate(value)} />
              <Button text="Save" onClick={ApproveApplication} />
            </Popup>
          </div>
          <div className={styles['application-container']}>
            <p className={styles['application-date']}>
              {' '}
              Application Date: {selectedApp?.applicationDate.split('T')[0]}
            </p>
            <p className={styles['application-title']}> Application Detail </p>
            <div className={styles['applicant-detail-card-container']}>
              <div className={styles['applicant-detail-card']}>
                <div>
                  <h4 className={styles['applicant-card-title']}>
                    {' '}
                    Enrollment{' '}
                  </h4>
                  <Splitter />
                </div>
                <div className={styles['application-row']}>
                  <p className={styles['application-label']}>Application No.</p>
                  <p className={styles['application-data']}>
                    <span style={{ fontSize: '10px' }}> {selectedApp.id} </span>
                  </p>
                </div>
                <div className={styles['application-row']}>
                  <p className={styles['application-label']}>Enrolled</p>
                  <p className={styles['application-data']}>{'enrolled'}</p>
                </div>
                <div className={styles['application-row']}>
                  <p className={styles['application-label']}>Stream</p>
                  <p className={styles['application-data']}>{'stream'}</p>
                </div>
                <div className={styles['application-row']}>
                  <p className={styles['application-label']}>Term</p>
                  <p className={styles['application-data']}>{'term'}</p>
                </div>
              </div>
              <div className={styles['applicant-detail-card']}>
                <div>
                  <h4 className={styles['applicant-card-title']}>
                    Personal Information
                  </h4>
                  <Splitter />
                </div>
                <div className={styles['application-row']}>
                  <p className={styles['application-label']}>Name</p>
                  <p className={styles['application-data']}>
                    {personalInfo.fullName}
                  </p>
                </div>
                <div className={styles['application-row']}>
                  <p className={styles['application-label']}>Phone</p>
                  <p className={styles['application-data']}>
                    {personalInfo.phoneNo}
                  </p>
                </div>
                <div className={styles['application-row']}>
                  <p className={styles['application-label']}>Personal Title</p>
                  <p className={styles['application-data']}>
                    {personalInfo.personalTitle}
                  </p>
                </div>
                <div className={styles['application-row']}>
                  <p className={styles['application-label']}>Nationality</p>
                  <p className={styles['application-data']}>
                    {personalInfo.nationality}
                  </p>
                </div>
                <div className={styles['application-row']}>
                  <p className={styles['application-label']}>DoB</p>
                  <p className={styles['application-data']}>
                    {personalInfo.dob}
                  </p>
                </div>
                <div className={styles['application-row']}>
                  <p className={styles['application-label']}>Gender</p>
                  <p className={styles['application-data']}>
                    {personalInfo.gender}
                  </p>
                </div>
                <div className={styles['application-row']}>
                  <p className={styles['application-label']}>Occupation</p>
                  <p className={styles['application-data']}>
                    {personalInfo.occupation}
                  </p>
                </div>
                <div className={styles['application-row']}>
                  <p className={styles['application-label']}>Martial Status</p>
                  <p className={styles['application-data']}>
                    {personalInfo.martialStatus}
                  </p>
                </div>
                <div className={styles['application-row']}>
                  <p className={styles['application-label']}>Spouse Name</p>
                  <p className={styles['application-data']}>
                    {personalInfo.spouseName != ''
                      ? personalInfo.spouseName
                      : 'N/A'}
                  </p>
                </div>
                <div className={styles['application-row']}>
                  <p className={styles['application-label']}>No. of Children</p>
                  <p className={styles['application-data']}>
                    {personalInfo.noOfChildren != ''
                      ? personalInfo.noOfChildren
                      : 'N/A'}
                  </p>
                </div>
              </div>
              <div className={styles['applicant-detail-card']}>
                <div>
                  <h4 className={styles['applicant-card-title']}>
                    Address Information
                  </h4>
                  <Splitter />
                </div>
                <div className={styles['application-row']}>
                  <p className={styles['application-label']}>Country</p>
                  <p className={styles['application-data']}>{'country'}</p>
                </div>
                <div className={styles['application-row']}>
                  <p className={styles['application-label']}>Region</p>
                  <p className={styles['application-data']}>{'region'}</p>
                </div>
                <div className={styles['application-row']}>
                  <p className={styles['application-label']}>City</p>
                  <p className={styles['application-data']}>{'city'}</p>
                </div>
                <div className={styles['application-row']}>
                  <p className={styles['application-label']}>Sub-city</p>
                  <p className={styles['application-data']}>{'subcity'}</p>
                </div>
                <div className={styles['application-row']}>
                  <p className={styles['application-label']}>Woreda</p>
                  <p className={styles['application-data']}>{'woreda'}</p>
                </div>
                <div className={styles['application-row']}>
                  <p className={styles['application-label']}>House No.</p>
                  <p className={styles['application-data']}>{'houseno'}</p>
                </div>
                <div className={styles['application-row']}>
                  <p className={styles['application-label']}>Passport No.</p>
                  <p className={styles['application-data']}>{'passportNo'}</p>
                </div>
                <div className={styles['application-row']}>
                  <p className={styles['application-label']}>
                    Office Phone No.
                  </p>
                  <p className={styles['application-data']}>
                    {'officePhoneNo'}
                  </p>
                </div>
                <div className={styles['application-row']}>
                  <p className={styles['application-label']}>
                    Resident Phone No.
                  </p>
                  <p className={styles['application-data']}>
                    {'residentPhoneNo'}
                  </p>
                </div>
                <div className={styles['application-row']}>
                  <p className={styles['application-label']}>
                    Mobile Phone No.
                  </p>
                  <p className={styles['application-data']}>
                    {'mobilePhoneNo'}
                  </p>
                </div>
                <div className={styles['application-row']}>
                  <p className={styles['application-label']}>Postal Address</p>
                  <p className={styles['application-data']}>
                    {'postalAddress'}
                  </p>
                </div>
                <div className={styles['application-row']}>
                  <p className={styles['application-label']}>Fax</p>
                  <p className={styles['application-data']}>{'fax'}</p>
                </div>
              </div>
              <div className={styles['applicant-detail-card']}>
                <div>
                  <h4 className={styles['applicant-card-title']}>
                    Educational Background
                  </h4>
                  <Splitter />
                </div>
                <div className={styles['application-row']}>
                  <p className={styles['application-label']}>
                    Institution Name
                  </p>
                  <p className={styles['application-data']}>
                    {'institutionName'}
                  </p>
                </div>
                <div className={styles['application-row']}>
                  <p className={styles['application-label']}>
                    Institution Address
                  </p>
                  <p className={styles['application-data']}>
                    {'institutionAddress'}
                  </p>
                </div>
                <div className={styles['application-row']}>
                  <p className={styles['application-label']}>Admission Year</p>
                  <p className={styles['application-data']}>
                    {'admissionYear'}
                  </p>
                </div>
                <div className={styles['application-row']}>
                  <p className={styles['application-label']}>Graduation Year</p>
                  <p className={styles['application-data']}>
                    {'graduationYear'}
                  </p>
                </div>
                <div className={styles['application-row']}>
                  <p className={styles['application-label']}>
                    Credential Awarded
                  </p>
                  <p className={styles['application-data']}>
                    {'credentialAwarded'}
                  </p>
                </div>
                <div className={styles['application-row']}>
                  <p className={styles['application-label']}>
                    Credit Hours Earned
                  </p>
                  <p className={styles['application-data']}>
                    {'creditHoursEarned'}
                  </p>
                </div>
              </div>
              <div className={styles['applicant-detail-card']}>
                <h4 className={styles['applicant-card-title']}>
                  Church Affilation
                </h4>
                <Splitter />
                <div className={styles['application-row']}>
                  <p className={styles['application-label']}>Domination</p>
                  <p className={styles['application-data']}>{'domination'}</p>
                </div>
                <div className={styles['application-row']}>
                  <p className={styles['application-label']}>Local Church</p>
                  <p className={styles['application-data']}>{'localChurch'}</p>
                </div>
                <div className={styles['application-row']}>
                  <p className={styles['application-label']}>
                    Position/Ministry Involvement
                  </p>
                  <p className={styles['application-data']}>
                    {'positionMinistryInvolvement'}
                  </p>
                </div>
                <div className={styles['application-row']}>
                  <p className={styles['application-label']}>
                    Local Church: Pastor or Elder
                  </p>
                  <p className={styles['application-data']}>
                    {'localChurchPastorElder'}
                  </p>
                </div>
              </div>
              <div className={styles['applicant-detail-card']}>
                <div>
                  <h4 className={styles['applicant-card-title']}>
                    Finance Information
                  </h4>
                  <Splitter />
                </div>
                <div className={styles['application-row']}>
                  <p className={styles['application-label']}>Funding Party</p>
                  <p className={styles['application-data']}>{'fundingParty'}</p>
                </div>
                <div className={styles['application-row']}>
                  <p className={styles['application-label']}>Name</p>
                  <p className={styles['application-data']}>
                    {'fundingPartyName'}
                  </p>
                </div>
                <div className={styles['application-row']}>
                  <p className={styles['application-label']}>
                    Amount of Fund Expected
                  </p>
                  <p className={styles['application-data']}>
                    {'amountofFundExpected'}
                  </p>
                </div>
              </div>
              <div className={styles['applicant-detail-card']}>
                <div className={styles['application-row']}>
                  {selectedApplication.status ==
                    StudentApplicationStatus.Applicant && (
                    <Button text="Approve" onClick={() => setExamPopup(true)} />
                  )}
                  {selectedApplication.status !==
                    StudentApplicationStatus.Applicant && (
                    <p className="border border-blue-300 p-3 w-full">
                      This Application is Promoted to the next step
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div
          style={{
            width: '20%',
            margin: '27vh auto',
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
          }}
        >
          {' '}
          Loading{' '}
          <img src="https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif" />{' '}
        </div>
      )}
    </>
  );
};

export default ApplicationFormDetail;
