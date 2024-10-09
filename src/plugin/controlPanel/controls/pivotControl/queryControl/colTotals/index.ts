import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const colTotals: ControlSetItem = {
  name: 'col_totals',
  config: {
    type: 'CheckboxControl',
    label: t('Show columns total'),
    default: false,
    renderTrigger: true,
    description: t('Display column level total'),
  },
};
