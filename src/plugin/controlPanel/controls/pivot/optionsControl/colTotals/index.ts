import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const colTotals: ControlSetItem = {
  name: 'colTotals',
  config: {
    type: 'CheckboxControl',
    label: t('Показать общее количество столбцов'),
    default: false,
    renderTrigger: true,
    description: t('Отображение итогового уровня столбца'),
  },
};
