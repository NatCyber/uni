import { FileUpload } from '@egst.frontend/shared';
import React, { useState } from 'react';
import styles from '../student.module.css';
import { IoIosAdd, IoIosClose } from 'react-icons/io';


interface Attachements {
  Attachements?: string | null;
}

const AttachementsForm = () => {
  const [isUser, setIsUser] = useState<boolean>(false);
  const [isUploadingDocs, setIsUploadingDocs] = useState<boolean>();
  const [isDriver, setIsDriver] = useState<boolean>(true);
  const [docs, setDocs] = useState<any>([]);

  return (
    <div>
      {isUploadingDocs === true ? (
        <div className="add-a-vehicle">
          <div className={styles['driver-input-container']}>
            <div className="title-bar">
              <h4> Add your Certifications </h4>
              <IoIosClose
                className="close-button"
                onClick={() => {
                  setIsUploadingDocs(false);
                }}
              />
            </div>

            {/* <DocumentUpload f={setImages} /> */}
            <FileUpload
            // Done={() => {
            //   setIsUploadingDocs(false);
            // }}
            />
            {/* <ButtonField icon={""} onClick={} className="upload-btn" value="Upload" /> */}
          </div>
        </div>
      ) : (
        <div className={styles['applicant-input-item']}>
          <h3> Attachements </h3>
          <div className="user-profile attachements-container">
            <button
              onClick={() => {
                setIsUploadingDocs(true);
                setIsUser(false);
                setIsDriver(false);
              }}
              className="user-profile-edit-btn"
            >
              <IoIosAdd fontSize={20} style={{ paddingTop: '3px' }} />
            </button>
            {docs.length > 0 ? (
              <div className="driver-docs-display">
                {docs.map((doc: any, i: string) => {
                  return (
                    <div key={i}>
                      {/* <img src={CDNURL + currentUser + '/' + doc.name} /> */}
                    </div>
                  );
                })}
              </div>
            ) : (
              <span className="no-data-msg"> No Documents </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default AttachementsForm;
