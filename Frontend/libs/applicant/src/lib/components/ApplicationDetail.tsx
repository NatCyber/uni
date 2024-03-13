import TabPanel, { Item } from 'devextreme-react/tab-panel';
import ApplicationFormDetail from '../work-flow/ApplicationFormDetail';
import ExamStatusForm from '../work-flow/ExamStatusForm';
import InterviewStatusForm from '../work-flow/InterviewStatusForm';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getSelectedApplication } from 'libs/shared/src/lib/state/StudentApplicationSlice';
import { StudentApplicationStatus } from 'libs/shared/src/lib/types/types';

const ApplicationDetail = () => {
  const selectedApplication = useSelector(getSelectedApplication);
  const [personalInfo, setPersonalInfo] = useState();

  useEffect(() => {
    setPersonalInfo(
      selectedApplication.bigObject.BigObject?.personalInformation
    );
  }, []);
  return (
    <div>
      <div className="border-orange-300 border p-4 flex ">
        <div className="flex flex-col gap-4">
          <h3 className="">APPLICANT INFORMATION</h3>
          <p className="font-semibold">
            Full Name:
            <span className="font-normal"> {personalInfo?.fullName}</span>
          </p>
          <p className="font-semibold">
            Gender:
            <span className="font-normal"> {personalInfo?.gender}</span>
          </p>
          <p className="font-semibold">
            Phone:
            <span className="font-normal"> {personalInfo?.phoneNo}</span>
          </p>
          <p className="font-semibold">
            Email:
            <span className="font-normal"> {personalInfo?.email}</span>
          </p>
        </div>
        <div className="flex flex-col gap-4 mt-10">
          <p className="font-semibold">
            Applied Program:
            <span className="font-normal"> {selectedApplication.program}</span>
          </p>
          <p className="font-semibold">
            Application Stage:
            <span className="font-normal">
              {StudentApplicationStatus[selectedApplication?.status]}
            </span>
          </p>
        </div>
      </div>
      <TabPanel width={1000}>
        <Item title={'Application Form'}>
          <ApplicationFormDetail />
        </Item>
        <Item
          disabled={
            selectedApplication.status == StudentApplicationStatus.Applicant
          }
          title={'Exam'}
        >
          <ExamStatusForm />
        </Item>
        <Item
          disabled={
            selectedApplication.status == StudentApplicationStatus.Exam ||
            selectedApplication.status == StudentApplicationStatus.Applicant
          }
          title={'Interview'}
        >
          <InterviewStatusForm />
        </Item>
      </TabPanel>
    </div>
  );
};

export default ApplicationDetail;
