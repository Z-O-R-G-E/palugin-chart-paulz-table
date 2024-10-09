import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const rowSubTotals: ControlSetItem = {
  name: 'row_sub_totals',
  config: {
    type: 'CheckboxControl',
    label: t('Show rows subtotal'),
    default: false,
    renderTrigger: true,
    description: t('Display row level subtotal'),
  },
};
