import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const rowTotals: ControlSetItem = {
  name: 'row_totals',
  config: {
    type: 'CheckboxControl',
    label: t('Show rows total'),
    default: false,
    renderTrigger: true,
    description: t('Display row level total'),
  },
};
