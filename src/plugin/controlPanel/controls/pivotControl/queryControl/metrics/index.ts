import { ControlSetItem, sharedControls } from '@superset-ui/chart-controls';
import { t, validateNonEmpty } from '@superset-ui/core';
import { isPivotType } from '../../../../utils';

export const metrics: ControlSetItem = {
  name: 'metrics',
  config: {
    ...sharedControls.metrics,
    label: t('Метрики'),
    validators: [validateNonEmpty],
    rerender: ['conditionalFormatting'],
    visibility: isPivotType,
  },
};
