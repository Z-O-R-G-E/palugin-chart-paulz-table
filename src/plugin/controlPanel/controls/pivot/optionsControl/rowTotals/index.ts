import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const rowTotals: ControlSetItem = {
  name: 'rowTotals',
  config: {
    type: 'CheckboxControl',
    label: t('Показать общий итог по строкам'),
    default: false,
    renderTrigger: true,
    description: t('Отображать общий итог по строке'),
  },
};
