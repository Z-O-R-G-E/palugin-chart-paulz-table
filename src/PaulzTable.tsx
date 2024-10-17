import React, { FC, createRef } from 'react';
import { PaulzTableProps } from './types';
import { Table } from './components/Table/Table';

const PaulzTable: FC<PaulzTableProps> = props => {
  const { height, width, data } = props;
  const rootElem = createRef<HTMLDivElement>();
  console.log('PaulzTable', data);
  return (
    <div ref={rootElem} style={{ width: width, height: height }}>
      <Table />
    </div>
  );
};

export default PaulzTable;
