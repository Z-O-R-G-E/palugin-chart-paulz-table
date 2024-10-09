import { t } from '@superset-ui/core';
export var transposePivot = {
  name: 'transpose_pivot',
  config: {
    type: 'CheckboxControl',
    label: t('Transpose pivot'),
    default: false,
    description: t('Swap rows and columns'),
    renderTrigger: true
  }
};