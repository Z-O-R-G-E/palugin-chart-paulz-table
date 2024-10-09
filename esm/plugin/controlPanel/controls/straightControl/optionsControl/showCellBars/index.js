import { t } from '@superset-ui/core';
import { isStraightType } from '../../../../utils';
export var showCellBars = {
  name: 'show_cell_bars',
  config: {
    type: 'CheckboxControl',
    label: t('Cell bars'),
    renderTrigger: true,
    default: true,
    visibility: isStraightType,
    description: t('Whether to display a bar chart background in table columns')
  }
};