import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const rowSubTotals: ControlSetItem = {
  name: 'rowSubTotals',
  config: {
    type: 'CheckboxControl',
    label: t('Показать промежуточный итог по строке'),
    default: false,
    renderTrigger: true,
    description: t('Отображать промежуточный итог по строке'),
  },
};
