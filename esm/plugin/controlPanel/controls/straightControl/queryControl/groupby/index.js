import { sharedControls } from '@superset-ui/chart-controls';
import { isAggMode, isStraightType, validateAggControlValues } from '../../../../utils';
export var groupby = {
  name: 'groupby',
  override: {
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
    mapStateToProps: (state, controlState) => {
      var _sharedControls$group, _originalMapStateToPr, _controls$metrics, _controls$percent_met;
      var {
        controls
      } = state;
      var originalMapStateToProps = sharedControls == null || (_sharedControls$group = sharedControls.groupby) == null ? void 0 : _sharedControls$group.mapStateToProps;
      var newState = (_originalMapStateToPr = originalMapStateToProps == null ? void 0 : originalMapStateToProps(state, controlState)) != null ? _originalMapStateToPr : {};
      newState.externalValidationErrors = validateAggControlValues(controls, [(_controls$metrics = controls.metrics) == null ? void 0 : _controls$metrics.value, (_controls$percent_met = controls.percent_metrics) == null ? void 0 : _controls$percent_met.value, controlState.value]);
      return newState;
    },
    rerender: ['metrics', 'percent_metrics']
  }
};