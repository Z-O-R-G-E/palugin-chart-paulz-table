import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import { isPivotType } from '../../../../utils';

export const colSubTotals: ControlSetItem = {
  name: 'colSubTotals',
  config: {
    type: 'CheckboxControl',
    label: t('Show columns subtotal'),
    visibility: isPivotType,
    default: false,
    renderTrigger: true,
    description: t('Display column level subtotal'),
  },
};
