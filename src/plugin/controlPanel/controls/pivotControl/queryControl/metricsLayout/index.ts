import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import { MetricsLayoutEnum } from '../../../../../../types/PivotTableTypes';
import { isPivotType } from '../../../../utils';

export const metricsLayout: ControlSetItem = {
  name: 'metricsLayout',
  config: {
    type: 'RadioButtonControl',
    renderTrigger: true,
    label: t('Apply metrics on'),
    visibility: isPivotType,
    default: MetricsLayoutEnum.COLUMNS,
    options: [
      [MetricsLayoutEnum.COLUMNS, t('Columns')],
      [MetricsLayoutEnum.ROWS, t('Rows')],
    ],
    description: t('Use metrics as a top level group for columns or for rows'),
  },
};
