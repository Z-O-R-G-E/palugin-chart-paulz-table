import { ControlSetItem, sharedControls } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const groupbyRows: ControlSetItem = {
  name: 'groupbyRows',
  config: {
    ...sharedControls.groupby,
    label: t('Строки'),
    description: t('Столбцы для группировки по строкам'),
  },
};
