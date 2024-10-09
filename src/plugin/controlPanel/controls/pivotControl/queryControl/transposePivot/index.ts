import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const transposePivot: ControlSetItem = {
  name: 'transpose_pivot',
  config: {
    type: 'CheckboxControl',
    label: t('Transpose pivot'),
    default: false,
    description: t('Swap rows and columns'),
    renderTrigger: true,
  },
};
