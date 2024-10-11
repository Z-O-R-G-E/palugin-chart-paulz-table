import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import { isPivotType } from '../../../../utils';

export const rowTotals: ControlSetItem = {
  name: 'rowTotals',
  config: {
    type: 'CheckboxControl',
    label: t('Show rows total'),
    visibility: isPivotType,
    default: false,
    renderTrigger: true,
    description: t('Display row level total'),
  },
};
