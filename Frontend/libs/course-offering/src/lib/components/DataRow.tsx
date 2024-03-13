import { SelectBox } from 'devextreme-react';
import ArrayStore from 'devextreme/data/array_store';
import DataSource from 'devextreme/data/data_source';
import React, { useState } from 'react';

const DataRow = ({ data }: any) => {

  console.log(data)
  return (
    <tr>
      <td>
        <SelectBox
          dataSource={data.yearSemester.year}
          displayExpr={'text'}
          // onValueChange={(e) => {
          //   setSemester(e.semesters);
          // }}
        />
      </td>
      <td>
        <SelectBox
          dataSource={data}
          displayExpr={'text'}
        />
      </td>
      <td>name</td>
      <td>credit</td>
      <td>credit</td>
    </tr>
  );
};

export default DataRow;
