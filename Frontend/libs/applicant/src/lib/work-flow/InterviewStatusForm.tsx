import { useState } from 'react';
import { Button, DateBox, SelectBox } from 'devextreme-react';

const InterviewStatusForm = () => {
  const [interviewStatus, setInterviewStatus] = useState(0);

  const InterviewStatusEnum = [
    { id: 0, text: 'Pending' },
    { id: 1, text: 'Pass' },
    { id: 2, text: 'Fail' },
  ];

  return (
    <div className="container m-3">
      <div className="my-4 ">
        <p className="font-semibold">Interview Date</p>
      </div>
      <div>
        <SelectBox
          label="Exam Status"
          dataSource={InterviewStatusEnum}
          value={InterviewStatusEnum[interviewStatus]}
          width={380}
          onValueChange={(e) => setInterviewStatus(e.id)}
          displayExpr={'text'}
        />
        {interviewStatus == 1 && (
          <div className="mt-4 border-1 w-96 bg-slate-50 ">
            <div className="m-3">
              <Button text="Accept" />
            </div>
          </div>
        )}
        {interviewStatus == 2 && (
          <div className="mt-3">
            <Button text="Reject and Remove Applicaiton" />
          </div>
        )}
      </div>
    </div>
  );
};

export default InterviewStatusForm;
