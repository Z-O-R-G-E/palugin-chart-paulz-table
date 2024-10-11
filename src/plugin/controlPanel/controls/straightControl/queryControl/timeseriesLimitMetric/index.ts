import { ControlSetItem, sharedControls } from '@superset-ui/chart-controls';

import { isAggMode, isStraightType } from '../../../../utils';
import { t } from '@superset-ui/core';

export const timeseriesLimitMetric: ControlSetItem = {
  name: 'timeseriesLimitMetric',
  config: {
    ...sharedControls.timeseries_limit_metric,
    label: t('Метрика ограничения временного ряда'),
    visibility: ({ controls }) => {
      return isAggMode({ controls }) && isStraightType({ controls });
    },
    resetOnHide: false,
  },
};
