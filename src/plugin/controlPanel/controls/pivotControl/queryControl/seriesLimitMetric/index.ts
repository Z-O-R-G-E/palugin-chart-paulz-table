import { ControlSetItem, sharedControls } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import { isPivotType } from '../../../../utils';

export const seriesLimitMetric: ControlSetItem = {
  name: 'seriesLimitMetric',
  config: {
    ...sharedControls.series_limit_metric,
    label: t('Метрика предела серии'),
    visibility: isPivotType,
    description: t(
      'Метрика, используемая для определения того, как сортируются верхние серии, если присутствует ограничение на серию или ячейку.' +
        ' Если не определено, возвращается к первой метрике (где это возможно).',
    ),
  },
};
