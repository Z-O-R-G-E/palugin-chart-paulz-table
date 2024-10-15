import { ControlSetItem, sharedControls } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const seriesLimitMetric: ControlSetItem = {
  name: 'seriesLimitMetric',
  config: {
    ...sharedControls.series_limit_metric,
    label: t('Метрика предела серии'),
    description: t(
      'Метрика, используемая для определения того, как сортируются верхние серии, если присутствует ограничение на серию или ячейку.' +
        ' Если не определено, возвращается к первой метрике (где это возможно).',
    ),
  },
};
