import { ControlSetItem, sharedControls } from '@superset-ui/chart-controls';
import { validateNonEmpty } from '@superset-ui/core';

export const metrics: ControlSetItem = {
  name: 'metrics',
  config: {
    ...sharedControls.metrics,
    validators: [validateNonEmpty],
    rerender: ['conditional_formatting'],
  },
};
