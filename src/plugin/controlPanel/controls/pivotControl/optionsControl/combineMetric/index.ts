import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import { isPivotType } from '../../../../utils';

export const combineMetric: ControlSetItem = {
  name: 'combineMetric',
  config: {
    type: 'CheckboxControl',
    label: t('Объединить показатели'),
    visibility: isPivotType,
    default: false,
    description: t(
      'Отображайте метрики рядом в каждом столбце, а не каждый столбец отображается рядом для каждой метрики.',
    ),
    renderTrigger: true,
  },
};
