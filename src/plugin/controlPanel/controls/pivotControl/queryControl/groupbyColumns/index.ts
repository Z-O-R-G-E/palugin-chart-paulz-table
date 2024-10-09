import { ControlSetItem, sharedControls } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import { isPivotType } from '../../../../utils';

export const groupbyColumns: ControlSetItem = {
  name: 'groupby_columns',
  config: {
    ...sharedControls.groupby,
    label: t('Columns'),
    description: t('Columns to group by on the columns'),
    visibility: isPivotType,
  },
};
