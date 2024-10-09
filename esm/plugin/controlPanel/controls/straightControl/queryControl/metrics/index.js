import { defineSavedMetrics } from '@superset-ui/chart-controls';
import { isAggMode, isStraightType, validateAggControlValues } from '../../../../utils';
export var metrics = {
  name: 'metrics',
  override: {
    validators: [],
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
      var _datasource$columns$, _columns, _controls$groupby, _controls$percent_met;
      var {
        controls,
        datasource,
        form_data
      } = _ref2;
      return {
        columns: datasource != null && (_datasource$columns$ = datasource.columns[0]) != null && _datasource$columns$.hasOwnProperty('filterable') ? datasource == null || (_columns = datasource.columns) == null ? void 0 : _columns.filter(c => c.filterable) : datasource == null ? void 0 : datasource.columns,
        savedMetrics: defineSavedMetrics(datasource),
        selectedMetrics: form_data.metrics || (form_data.metric ? [form_data.metric] : []),
        datasource,
        externalValidationErrors: validateAggControlValues(controls, [(_controls$groupby = controls.groupby) == null ? void 0 : _controls$groupby.value, (_controls$percent_met = controls.percent_metrics) == null ? void 0 : _controls$percent_met.value, controlState.value])
      };
    },
    rerender: ['groupby', 'percent_metrics']
  }
};