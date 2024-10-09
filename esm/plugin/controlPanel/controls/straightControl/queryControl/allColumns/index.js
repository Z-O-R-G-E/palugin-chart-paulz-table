function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { ColumnOption, sharedControls } from '@superset-ui/chart-controls';
import { ensureIsArray, t } from '@superset-ui/core';
import { getQueryMode, isRawMode, isStraightType } from '../../../../utils';
export var allColumns = {
  name: 'all_columns',
  config: _extends({}, sharedControls.groupby, {
    label: t('Columns'),
    description: t('Columns to display'),
    multi: true,
    freeForm: true,
    allowAll: true,
    commaChoosesOption: false,
    optionRenderer: column => /*#__PURE__*/React.createElement(ColumnOption, {
      showType: true,
      column: column
    }),
    valueRenderer: column => /*#__PURE__*/React.createElement(ColumnOption, {
      column: column
    }),
    valueKey: 'column_name',
    mapStateToProps: (_ref, controlState) => {
      var {
        datasource,
        controls
      } = _ref;
      return {
        options: (datasource == null ? void 0 : datasource.columns) || [],
        queryMode: getQueryMode(controls),
        externalValidationErrors: isRawMode({
          controls
        }) && ensureIsArray(controlState == null ? void 0 : controlState.value).length === 0 ? [t('must have a value')] : []
      };
    },
    visibility: _ref2 => {
      var {
        controls
      } = _ref2;
      return isRawMode({
        controls
      }) && isStraightType({
        controls
      });
    },
    resetOnHide: false
  })
};