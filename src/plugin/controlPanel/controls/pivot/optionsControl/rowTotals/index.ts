import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const rowTotals: ControlSetItem = {
  name: 'rowTotals',
  config: {
    type: 'CheckboxControl',
    label: t('Показать общее количество строк'),
    default: false,
    renderTrigger: true,
    description: t('Отображать итог на уровне строки'),
  },
};
