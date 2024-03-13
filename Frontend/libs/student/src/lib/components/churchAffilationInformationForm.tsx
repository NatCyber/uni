import React, { useState , useCallback , useContext  } from 'react';

import styles from '../student.module.css';
import './applicant.css';

import {
  IoLogoFacebook,
  IoLogoApple,
  IoIosArrowForward,
  IoIosArrowBack,
  IoMdCreate,
  IoIosAdd,
  IoIosClose,
} from 'react-icons/io';
import { InputBox, ButtonField } from '@egst.frontend/shared';
import { createContext } from 'vm';

interface ChurchAffilationInformation {
  Domination: string | number | null;
  LocalChurch: string | number | null;
  Position: string | number | null;
  Referee: string | null;
}

  const ChurchAffilationInformationForm: React.FC<ChurchAffilationInformation> = (props) => {
    const [data, setData] = useState<any>({});
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setData({ ...data, [name]: value });
    };

    const [isUser, setIsUser] = useState<boolean>(false);
    const [driverProfileExist, setDriverProfileExist] = useState<boolean>(false);
    const [isDriver, setIsDriver] = useState<boolean>(false);
    const [userValues, setUserValues] = useState<ChurchAffilationInformation>({
          Domination: '',
          LocalChurch: '',
          Position: '',
          Referee: '',
    });

    console.log(userValues);

  const setDomination = (e: any) => {
    setUserValues({ ...userValues, Domination: e.target.value });
  };

  const setLocalChurch = (e: any) => {
    setUserValues({ ...userValues, LocalChurch: e.target.value });
  };

  const setPosition = (e: any) => {
    setUserValues({ ...userValues, Position: e.target.value });
  };

  const setReferee = (e: any) => {
    setUserValues({ ...userValues, Referee: e.target.value });
  };

  return (
      <div className={styles['application-form-container']}>
        {isUser === false && (
          <div className={styles['applicant-input-container']}>
            <form>
              <div className="edit-your-profile">
                <div className="title-bar">
                  <h3> Church Affilation </h3>
                </div>

                <div className={styles["driver-input-item"]}>
                    <InputBox
                      value={userValues.Domination}
                      label="Domination"
                      className="userDataInputBox"
                      inputValue={setDomination}
                    />
                  </div>
                  <div className={styles["driver-input-item"]}>
                    <InputBox
                      value={userValues.LocalChurch}
                      label="Local Church"
                      className="userDataInputBox"
                      inputValue={setLocalChurch}
                    />
                  </div>
                  <div className={styles["driver-input-item"]}>
                    <InputBox
                      value={userValues.Position}
                      label="Position/Ministry Involvement"
                      className="userDataInputBox"
                      inputValue={setPosition}
                    />
                  </div>
                  <div className={styles["driver-input-item"]}>
                    <InputBox
                      value={userValues.Referee}
                      label="Local Church: Pastor or Elder"
                      className="userDataInputBox"
                      inputValue={setReferee}
                    />
                  </div>
              </div>
            </form>
          </div>
        ) 
        }
      </div>

  );
}

export default ChurchAffilationInformationForm;
