import { t } from '@superset-ui/core';
export var colTotals = {
  name: 'col_totals',
  config: {
    type: 'CheckboxControl',
    label: t('Show columns total'),
    default: false,
    renderTrigger: true,
    description: t('Display column level total')
  }
};