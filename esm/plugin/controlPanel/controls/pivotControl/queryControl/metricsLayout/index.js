import { t } from '@superset-ui/core';
import { MetricsLayoutEnum } from '../../../../../../types/PivotTableTypes';
export var metricsLayout = {
  name: 'metrics_layout',
  config: {
    type: 'RadioButtonControl',
    renderTrigger: true,
    label: t('Apply metrics on'),
    default: MetricsLayoutEnum.COLUMNS,
    options: [[MetricsLayoutEnum.COLUMNS, t('Columns')], [MetricsLayoutEnum.ROWS, t('Rows')]],
    description: t('Use metrics as a top level group for columns or for rows')
  }
};