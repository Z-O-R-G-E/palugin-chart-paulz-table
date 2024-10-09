function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { defineSavedMetrics, sharedControls } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import { getQueryMode, isAggMode, isStraightType, validateAggControlValues } from '../../../../utils';
export var percentMetrics = {
  name: 'percent_metrics',
  config: _extends({}, sharedControls.metrics, {
    label: t('Percentage metrics'),
    description: t('Metrics for which percentage of total are to be displayed. Calculated from only data within the row limit.'),
    visibility: _ref => {
      var {
        controls
      } = _ref;
      return isAggMode({
        controls
      }) && isStraightType({
        controls
      });
    },
    resetOnHide: false,
    mapStateToProps: (_ref2, controlState) => {
      var _controls$groupby, _controls$metrics;
      var {
        datasource,
        controls
      } = _ref2;
      return {
        columns: (datasource == null ? void 0 : datasource.columns) || [],
        savedMetrics: defineSavedMetrics(datasource),
        datasource,
        datasourceType: datasource == null ? void 0 : datasource.type,
        queryMode: getQueryMode(controls),
        externalValidationErrors: validateAggControlValues(controls, [(_controls$groupby = controls.groupby) == null ? void 0 : _controls$groupby.value, (_controls$metrics = controls.metrics) == null ? void 0 : _controls$metrics.value, controlState == null ? void 0 : controlState.value])
      };
    },
    rerender: ['groupby', 'metrics'],
    default: [],
    validators: []
  })
};