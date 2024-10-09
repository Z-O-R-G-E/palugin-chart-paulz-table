import { t } from '@superset-ui/core';
export var rowTotals = {
  name: 'row_totals',
  config: {
    type: 'CheckboxControl',
    label: t('Show rows total'),
    default: false,
    renderTrigger: true,
    description: t('Display row level total')
  }
};