import { t } from '@superset-ui/core';
export var colSubTotals = {
  name: 'col_sub_totals',
  config: {
    type: 'CheckboxControl',
    label: t('Show columns subtotal'),
    default: false,
    renderTrigger: true,
    description: t('Display column level subtotal')
  }
};