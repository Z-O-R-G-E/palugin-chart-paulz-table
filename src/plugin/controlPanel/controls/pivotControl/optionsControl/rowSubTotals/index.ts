import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import { isPivotType } from '../../../../utils';

export const rowSubTotals: ControlSetItem = {
  name: 'rowSubTotals',
  config: {
    type: 'CheckboxControl',
    label: t('Show rows subtotal'),
    visibility: isPivotType,
    default: false,
    renderTrigger: true,
    description: t('Display row level subtotal'),
  },
};
