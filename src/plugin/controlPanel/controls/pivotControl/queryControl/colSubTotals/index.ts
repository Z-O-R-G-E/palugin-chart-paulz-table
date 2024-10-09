import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const colSubTotals: ControlSetItem = {
  name: 'col_sub_totals',
  config: {
    type: 'CheckboxControl',
    label: t('Show columns subtotal'),
    default: false,
    renderTrigger: true,
    description: t('Display column level subtotal'),
  },
};
