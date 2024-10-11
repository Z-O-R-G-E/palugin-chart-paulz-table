import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import { isPivotType } from '../../../../utils';

export const transposePivot: ControlSetItem = {
  name: 'transposePivot',
  config: {
    type: 'CheckboxControl',
    label: t('Transpose pivot'),
    visibility: isPivotType,
    default: false,
    description: t('Swap rows and columns'),
    renderTrigger: true,
  },
};
