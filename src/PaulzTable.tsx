import React, { createRef } from 'react';
import { PaulzTableProps } from './types';
import { Table } from './components/Table/Table';

const PaulzTable = (props: PaulzTableProps) => {
  const { height, width } = props;

  const rootElem = createRef<HTMLDivElement>();

  return (
    <div ref={rootElem} style={{ width: width, height: height }}>
      <Table {...props} />
    </div>
  );
};

export default PaulzTable;
