import TextBox from 'devextreme-react/text-box';
import { IOrg, OrgType } from 'libs/shared/src/lib/types/types';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getSelectedOrg } from '../services/Orgslice';
import { Button, TextArea } from 'devextreme-react';
import { useCreateOrgMutation, useUpdateOrgMutation } from '../services/OrgApi';
import styles from '../organization.module.css'; 

interface Orgformprop {
  org?: IOrg;
}

const Orgform = ({ org }: Orgformprop) => {
  const selectedOrg = useSelector(getSelectedOrg);
  const [createOrg, { isLoading, isSuccess, data }] = useCreateOrgMutation();
  const [updateOrg] = useUpdateOrgMutation();

  const [newOrg, setOrg] = useState<IOrg>({
    name: '',
    discription: '',
    parentId: selectedOrg.id?.toString(),
    code: ''
  });

  const [toupdate, setToUpdate] = useState<IOrg>(selectedOrg);

  const handleSubmit = () => {
    org
      ? updateOrg(toupdate)
          .then((s) => console.log(s))
          .catch((e) => console.log(e))
      : createOrg(newOrg)
          .then((s) => console.log(s))
          .catch((e) => console.log(e));
  };
  useEffect(() => {
    org
      ? setToUpdate({
          ...selectedOrg,
        })
      : setOrg({
          ...newOrg,
          parentId: selectedOrg.id?.toString(),
          type: selectedOrg.type?.valueOf()! + 1,
        });
  }, [selectedOrg]);

  return (
    <div className={styles['orgTree-form-container']}>
      <form className={styles['organization-form-container']}>
        
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <TextBox
            name="org-name"
            label="Name"
            labelMode="floating"
            value={org ? selectedOrg.name : newOrg.name}
            onValueChanged={(e) => {
              org
                ? setToUpdate({ ...toupdate, name: e.value })
                : setOrg({ ...newOrg, name: e.value });
            }}
            valueChangeEvent="keyup"
          />
          <TextBox
            name="code"
            label="Code"
            labelMode="floating"
            value={org ? selectedOrg.code : newOrg.code}
            onValueChanged={(e) => {
              org
                ? setToUpdate({ ...toupdate, code: e.value })
                : setOrg({ ...newOrg, code: e.value });
            }}
            valueChangeEvent="keyup"
          />
          <TextArea
            name="org-discription"
            label="Discription"
            labelMode="floating"
            value={org ? selectedOrg.discription : newOrg.discription}
            onValueChanged={(e) => {
              org
                ? setToUpdate({ ...toupdate, discription: e.value })
                : setOrg({ ...newOrg, discription: e.value });
            }}
            valueChangeEvent="keyup"
          />

        </div>
        {/* <div className={styles['org-button-field']}> */}
        <Button text={org ? 'Update' : 'Create'} onClick={handleSubmit} />
        {/* </div> */}
        
      </form>
    </div>
  );
};

export default Orgform;
