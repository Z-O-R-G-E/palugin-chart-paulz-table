import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import { isPivotType } from '../../../../utils';

export const rowSubtotalPosition: ControlSetItem = {
  name: 'rowSubtotalPosition',
  config: {
    type: 'SelectControl',
    label: t('Rows subtotal position'),
    visibility: isPivotType,
    default: false,
    choices: [
      // [value, label]
      [true, t('Top')],
      [false, t('Bottom')],
    ],
    renderTrigger: true,
    description: t('Position of row level subtotal'),
  },
};
