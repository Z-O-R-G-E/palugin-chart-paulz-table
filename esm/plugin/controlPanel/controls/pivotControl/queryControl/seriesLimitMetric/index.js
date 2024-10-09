function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { sharedControls } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
export var seriesLimitMetric = {
  name: 'series_limit_metric',
  config: _extends({}, sharedControls.series_limit_metric, {
    description: t('Metric used to define how the top series are sorted if a series or cell limit is present. ' + 'If undefined reverts to the first metric (where appropriate).')
  })
};