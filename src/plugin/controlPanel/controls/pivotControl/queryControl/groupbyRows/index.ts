import { ControlSetItem, sharedControls } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const groupbyRows: ControlSetItem = {
  name: 'groupby_rows',
  config: {
    ...sharedControls.groupby,
    label: t('Rows'),
    description: t('Columns to group by on the rows'),
  },
};
