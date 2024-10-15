import { ControlSetItem, sharedControls } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const valueFormat: ControlSetItem = {
  name: 'valueFormat',
  config: {
    ...sharedControls.y_axis_format,
    label: t('Формат значения'),
  },
};
