import { t } from '@superset-ui/core';
import { isStraightType } from '../../../../utils';
export var colorPn = {
  name: 'color_pn',
  config: {
    type: 'CheckboxControl',
    label: t('Color +/-'),
    renderTrigger: true,
    default: true,
    visibility: isStraightType,
    description: t('Whether to colorize numeric values by if they are positive or negative')
  }
};