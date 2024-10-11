import { ControlSetItem, sharedControls } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import { isPivotType } from '../../../../utils';

export const groupbyColumns: ControlSetItem = {
  name: 'groupbyColumns',
  config: {
    ...sharedControls.groupby,
    label: t('Столбцы'),
    description: t('Столбцы для группировки по столбцам'),
    visibility: isPivotType,
  },
};
