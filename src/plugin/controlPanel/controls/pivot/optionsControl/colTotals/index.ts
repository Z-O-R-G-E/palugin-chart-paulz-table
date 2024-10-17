import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const colTotals: ControlSetItem = {
  name: 'colTotals',
  config: {
    type: 'CheckboxControl',
    label: t('Показать общий итог по столбцам'),
    default: false,
    renderTrigger: true,
    description: t('Отображать общий итог по столбцам'),
  },
};
