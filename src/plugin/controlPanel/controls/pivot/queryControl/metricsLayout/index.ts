import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import { MetricsLayoutEnum } from '../../../../../../consts';

export const metricsLayout: ControlSetItem = {
  name: 'metricsLayout',
  config: {
    type: 'RadioButtonControl',
    renderTrigger: true,
    label: t('Применить метрики к'),
    default: MetricsLayoutEnum.COLUMNS,
    options: [
      [MetricsLayoutEnum.COLUMNS, t('Столбцы')],
      [MetricsLayoutEnum.ROWS, t('Строки')],
    ],
    description: t(
      'Используйте метрики в качестве группы верхнего уровня для столбцов или строк.',
    ),
  },
};
