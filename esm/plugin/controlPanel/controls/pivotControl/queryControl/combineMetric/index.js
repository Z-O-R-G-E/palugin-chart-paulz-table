import { t } from '@superset-ui/core';
export var combineMetric = {
  name: 'combine_metric',
  config: {
    type: 'CheckboxControl',
    label: t('Combine metrics'),
    default: false,
    description: t('Display metrics side by side within each column, as ' + 'opposed to each column being displayed side by side for each metric.'),
    renderTrigger: true
  }
};