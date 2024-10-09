import { t } from '@superset-ui/core';
export var rowSubTotals = {
  name: 'row_sub_totals',
  config: {
    type: 'CheckboxControl',
    label: t('Show rows subtotal'),
    default: false,
    renderTrigger: true,
    description: t('Display row level subtotal')
  }
};