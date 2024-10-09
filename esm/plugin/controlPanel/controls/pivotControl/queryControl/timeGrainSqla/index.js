function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { sharedControls } from '@superset-ui/chart-controls';
import { ensureIsArray, isAdhocColumn, isPhysicalColumn } from '@superset-ui/core';
export var timeGrainSqla = {
  name: 'time_grain_sqla',
  config: _extends({}, sharedControls.time_grain_sqla, {
    visibility: _ref => {
      var _controls$groupbyColu;
      var {
        controls
      } = _ref;
      var dttmLookup = Object.fromEntries(ensureIsArray(controls == null || (_controls$groupbyColu = controls.groupbyColumns) == null ? void 0 : _controls$groupbyColu.options).map(option => [option.column_name, option.is_dttm]));
      return [...ensureIsArray(controls == null ? void 0 : controls.groupbyColumns.value), ...ensureIsArray(controls == null ? void 0 : controls.groupbyRows.value)].map(selection => {
        if (isAdhocColumn(selection)) {
          return true;
        }
        if (isPhysicalColumn(selection)) {
          return !!dttmLookup[selection];
        }
        return false;
      }).some(Boolean);
    }
  })
};