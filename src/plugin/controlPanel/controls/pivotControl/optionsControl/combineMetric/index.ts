import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import { isPivotType } from '../../../../utils';

export const combineMetric: ControlSetItem = {
  name: 'combineMetric',
  config: {
    type: 'CheckboxControl',
    label: t('Combine metrics'),
    visibility: isPivotType,
    default: false,
    description: t(
      'Display metrics side by side within each column, as ' +
        'opposed to each column being displayed side by side for each metric.',
    ),
    renderTrigger: true,
  },
};
