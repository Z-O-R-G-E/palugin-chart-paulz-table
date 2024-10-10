import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import { isPivotType } from '../../../../utils';

export const colSubtotalPosition: ControlSetItem = {
  name: 'colSubtotalPosition',
  config: {
    type: 'SelectControl',
    label: t('Columns subtotal position'),
    visibility: isPivotType,
    default: false,
    choices: [
      // [value, label]
      [true, t('Left')],
      [false, t('Right')],
    ],
    renderTrigger: true,
    description: t('Position of column level subtotal'),
  },
};
