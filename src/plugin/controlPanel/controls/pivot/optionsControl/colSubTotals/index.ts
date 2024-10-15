import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const colSubTotals: ControlSetItem = {
  name: 'colSubTotals',
  config: {
    type: 'CheckboxControl',
    label: t('Показать промежуточный итог столбцов'),
    default: false,
    renderTrigger: true,
    description: t('Отобразить промежуточный итог на уровне столбца'),
  },
};
