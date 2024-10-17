import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const combineMetric: ControlSetItem = {
  name: 'combineMetric',
  config: {
    type: 'CheckboxControl',
    label: t('Объединить меры'),
    default: false,
    description: t(
      'Отображать меры рядом в каждом столбце, а не каждый столбец отображается рядом для каждой меры.',
    ),
    renderTrigger: true,
  },
};
