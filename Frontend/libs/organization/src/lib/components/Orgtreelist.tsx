import { Column, TreeList } from 'devextreme-react/tree-list';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectedOrg, getUnits, selectOrg } from '../services/Orgslice';
import { Button, ContextMenu, Popup } from 'devextreme-react';
import { OrgType } from 'libs/shared/src/lib/types/types';
import { useEffect, useState } from 'react';
import Orgform from './Orgform';
import styles from '../organization.module.css'; 

const Orgtreelist = () => {
  const departments = useSelector(getUnits);
  const dispatch = useDispatch();
  const selectedOrg = useSelector(getSelectedOrg);
  const [type, setType] = useState<any>();
  const [visible, setVisible] = useState<boolean>();

  const handlevisiblity = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    setType(OrgType[selectedOrg.type + 1]);
  }, [selectedOrg]);

  return (
    <div className={styles['orgTree-form-container']}>
      <div className={styles['organization-input-items']}>
        <h3>Organizational Structure</h3>
        <div id="orglist" className={styles['org-list']}>
          <TreeList
            onRowClick={(props) => {
              dispatch(selectOrg(props.data.id));
            }}
            dataSource={departments}
            rootValue={null}
            keyExpr="id"
            parentIdExpr="parentId"
            focusedRowEnabled
            showRowLines={false}
            showBorders={true}
            columnAutoWidth={true}
          >
            <Column dataField={'name'} />
          </TreeList>
        </div>
      </div>
      <div className={styles['organization-input-items']}>
          <ContextMenu
              dataSource={type !== undefined ? [{ text: `Create ${type}` }] : []}
              width={200}
              target="#orglist"
              onItemClick={handlevisiblity}
          />
          <Popup visible={visible} contentRender={() => <Orgform />} className={styles['organization-form-popup']}></Popup>
      </div>
       <div className={styles['orgTree-form-container']}>
          <Orgform org={selectedOrg} />
      </div>
    </div>
  );
};

export default Orgtreelist;
