import React, { useEffect, useState } from 'react';
import './imgUploadBox.css';
import { FcUpload } from 'react-icons/fc';
import { BsFolder2Open } from 'react-icons/bs';
import { GiCancel } from 'react-icons/gi';
import { AiFillFileText } from 'react-icons/ai';

const FileUpload = () => {

  // Upload file using standard upload

  const [files, setFiles] = useState([]);
  const [currentUser, setCurrentUser] = useState<string>();

  const setfiles2 = (e: any) => {
    files.push(e.target.files[0] as never);
    setFiles([...files]);
  };

  useEffect(() => {
    // getUser();
    // getDocs();
  }, []);



  //   async function uploadFile() {
  //     for (let i = 0; i <= files.length - 1; i++) {
  //     //   let typename = i == 0 ? 'doc' : 'doc(1)';
  //       let error 
  //     //   const { data, error } = await supabase.storage
  //     //     .from(`drivers_Documents/${currentUser}`)
  //     //     .upload(typename, files[i]);
  //       if (error) {
  //         // Handle error
  //         console.log(error);
  //       } else {

  //       let data
  //         // Handle success
  //         console.log('success', data);
  //         // if (data.path == 'doc(1)') {
  //         //   alert('files submited');
  //         // }
  //       }
  //     }
  //   }

  return (
    <>
      <div>
        <label>
          <input
            multiple
            style={{ display: 'block', visibility: 'hidden' }}
            type="file"
            onChange={(e) => {
              if (files.length <= 1) {
                setfiles2(e);
              } else {
                alert('only 2 files are allowed!');
              }
            }}
          />
          <p>
            <BsFolder2Open className="upload-icon" />
          </p>
        </label>
      </div>
      <div className="upload-files-queue">
        {files.length > 0 ? (
          files.map((file, i) => {
            return (
              <div key={i}>
                <div
                  style={{
                    width: '100px',
                    height: '100px',
                    backgroundSize: 'cover',
                    backgroundImage: `url(${URL.createObjectURL(file)})`,
                    border: '#000 2px solid',
                    borderRadius: '10px',
                  }}
                // src={URL.createObjectURL(file)}
                > <AiFillFileText style={{ width: '100px', height: '50px', marginTop: '30px' }} /> </div>
                <GiCancel
                  className="cancel-queue-file-btn"
                  onClick={() => {
                    files.splice(i, 1);
                    setFiles([...files]);
                  }}
                />
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
      <button
        className="upload-button"
        onClick={() => {
          if (files.length == 2) {
            // uploadFile();
            // Done
          } else {
            alert('please select your files first!');
          }
        }}
      >
        <FcUpload fontSize={16} style={{ paddingRight: '5px' }} /> Upload
      </button>
    </>
  );
};

export default FileUpload;