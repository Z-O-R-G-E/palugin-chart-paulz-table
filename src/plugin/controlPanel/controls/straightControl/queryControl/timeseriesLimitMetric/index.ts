import { ControlSetItem } from '@superset-ui/chart-controls';

import { isAggMode, isStraightType } from '../../../../utils';

export const timeseriesLimitMetric: ControlSetItem = {
  name: 'timeseries_limit_metric',
  override: {
    visibility: ({ controls }) => {
      return isAggMode({ controls }) && isStraightType({ controls });
    },
    resetOnHide: false,
  },
};
