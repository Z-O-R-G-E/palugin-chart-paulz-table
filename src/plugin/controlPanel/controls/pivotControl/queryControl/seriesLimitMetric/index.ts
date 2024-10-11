import { ControlSetItem, sharedControls } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import { isPivotType } from '../../../../utils';

export const seriesLimitMetric: ControlSetItem = {
  name: 'seriesLimitMetric',
  config: {
    ...sharedControls.series_limit_metric,
    visibility: isPivotType,
    description: t(
      'Metric used to define how the top series are sorted if a series or cell limit is present. ' +
        'If undefined reverts to the first metric (where appropriate).',
    ),
  },
};
