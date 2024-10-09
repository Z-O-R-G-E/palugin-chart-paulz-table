import { ControlSetItem, sharedControls } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import { isPivotType } from '../../../../utils';

export const rowLimit: ControlSetItem = {
  name: 'row_limit',
  config: {
    ...sharedControls.row_limit,
    label: t('Cell limit'),
    visibility: isPivotType,
    description: t('Limits the number of cells that get retrieved.'),
  },
};
