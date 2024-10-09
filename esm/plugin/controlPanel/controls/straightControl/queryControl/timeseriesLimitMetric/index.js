import { isAggMode, isStraightType } from '../../../../utils';
export var timeseriesLimitMetric = {
  name: 'timeseries_limit_metric',
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
    resetOnHide: false
  }
};