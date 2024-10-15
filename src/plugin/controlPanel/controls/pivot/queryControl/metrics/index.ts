import { ControlSetItem, sharedControls } from '@superset-ui/chart-controls';
import { t, validateNonEmpty } from '@superset-ui/core';

export const metrics: ControlSetItem = {
  name: 'metrics',
  config: {
    ...sharedControls.metrics,
    label: t('Метрики'),
    validators: [validateNonEmpty],
    rerender: ['conditionalFormatting'],
  },
};
