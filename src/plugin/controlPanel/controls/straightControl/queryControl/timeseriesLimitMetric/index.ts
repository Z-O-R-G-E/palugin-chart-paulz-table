import { ControlSetItem, sharedControls } from '@superset-ui/chart-controls';

import { isAggMode, isStraightType } from '../../../../utils';

export const timeseriesLimitMetric: ControlSetItem = {
  name: 'timeseriesLimitMetric',
  config: {
    ...sharedControls.timeseries_limit_metric,
    visibility: ({ controls }) => {
      return isAggMode({ controls }) && isStraightType({ controls });
    },
    resetOnHide: false,
  },
};
