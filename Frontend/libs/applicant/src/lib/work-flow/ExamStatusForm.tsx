import { useState } from 'react';
import { Button, DateBox, SelectBox } from 'devextreme-react';
import { getSelectedApplication } from 'libs/shared/src/lib/state/StudentApplicationSlice';
import { useSelector } from 'react-redux';

const ExamStatusForm = () => {
  const [examStatus, setExamStatus] = useState(0);
  const selectedApplication = useSelector(getSelectedApplication);

  const ExamStatusEnum = [
    { id: 0, text: 'Pending' },
    { id: 1, text: 'Pass' },
    { id: 2, text: 'Fail' },
  ];

  return (
    <div className="container m-4 flex gap-5">
      <div className="my-4 ">
        <p className="font-semibold">
          Exam Date:

          <span className="font-normal"> {selectedApplication.examDate}</span>
        </p>
      </div>
      <div>
        <SelectBox
          label="Exam Status"
          dataSource={ExamStatusEnum}
          value={ExamStatusEnum[examStatus]}
          width={380}
          onValueChange={(e) => setExamStatus(e.id)}
          displayExpr={'text'}
        />
        {examStatus == 1 && (
          <div className="mt-4 border-1 w-96 bg-slate-50 p-1">
            <p className="m-3">Set Date for an Interview</p>
            <div className="m-3">
              <DateBox width={400} />
            </div>
            <div className="m-3">
              <Button text="Save" />
            </div>
          </div>
        )}
        {examStatus == 2 && (
          <div className="mt-3">
            <Button text="Reject and Remove Applicaiton" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ExamStatusForm;
