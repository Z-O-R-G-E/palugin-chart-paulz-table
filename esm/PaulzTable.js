import React, { createRef } from 'react';
import { Table } from './components/Table/Table';
var PaulzTable = props => {
  var {
    height,
    width
  } = props;
  var rootElem = /*#__PURE__*/createRef();
  return /*#__PURE__*/React.createElement("div", {
    ref: rootElem,
    style: {
      width: width,
      height: height
    }
  }, /*#__PURE__*/React.createElement(Table, props));
};
export default PaulzTable;